import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MessageRole } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are a friendly and expert Computer Science teacher for high school students.
Your goal is to help students with their "Motherboard Master Project".
They are creating a PowerPoint presentation about computer parts.

Key knowledge you possess:
1. You know about computer hardware (Motherboard, CPU, RAM, Chipset, PCI Express, SATA, BIOS, PSU).
2. You know PowerPoint tricks (Animations, Transitions, automated timing).
3. You encourage students to summarize text and not copy-paste.

Rules:
- Keep answers concise and encouraging.
- Use emojis occasionally to be friendly.
- If asked about the assignment details, refer to the "10 Sheet" structure: 
  (1. Cover, 2. Map, 3. CPU Socket, 4. RAM, 5. Chipset, 6. PCIe, 7. SATA, 8. Power, 9. BIOS, 10. Conclusion).
- If they ask for a definition, give a very short summary they can use in their slides (max 2 sentences).
`;

export const sendMessageToGemini = async (
  history: { role: MessageRole; text: string }[],
  newMessage: string
): Promise<string> => {
  try {
    // We will use generateContent with the system instruction in the config
    // For a simple chat history, we can concatenate the history into a string prompt 
    // or use the Chat API. Let's use the generateContent with strictly formatted history for simplicity
    // and statelessness if needed, or use the Chat API if we want to maintain session easily. 
    // However, the best practice provided suggests extracting text from generateContent.
    
    // Let's use a fresh generative request including history context to ensure strict adherence to the system prompt.
    
    const formattedHistory = history.map(h => `${h.role === MessageRole.USER ? 'Student' : 'Teacher'}: ${h.text}`).join('\n');
    const fullPrompt = `${formattedHistory}\nStudent: ${newMessage}\nTeacher:`;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    const text = response.text;
    return text || "Sorry, I couldn't generate a response.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the digital classroom right now. Please try again later.";
  }
};