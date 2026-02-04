import React, { useState, useEffect, useRef } from 'react';
import { MessageRole, ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, Bot, X, Sparkles, Loader2 } from 'lucide-react';

export const GeminiTutor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: MessageRole.MODEL,
      text: "¡Hola! Soy tu asistente de informática. ¿Tienes dudas sobre la Tarjeta Madre o cómo configurar PowerPoint?",
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
        // Filter history for API context
        const historyForApi = messages.map(m => ({ role: m.role, text: m.text }));
        const responseText = await sendMessageToGemini(historyForApi, userMsg.text);

        const aiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: MessageRole.MODEL,
            text: responseText,
            timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        console.error("Chat error", error);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 sm:w-96 mb-4 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300 h-[500px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-secondary to-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Profe AI</h3>
                <p className="text-xs text-white/80">Experto en Hardware</p>
              </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-hide">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                    msg.role === MessageRole.USER 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                   <Loader2 className="w-4 h-4 text-primary animate-spin" />
                   <span className="text-xs text-slate-400">Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Pregunta sobre la tarjeta madre..."
                className="w-full bg-slate-100 text-slate-800 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 top-1.5 p-1.5 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-secondary text-white rounded-full shadow-xl shadow-primary/30 hover:scale-110 transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          <Bot className="w-8 h-8" />
          <span className="absolute right-0 top-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>
      )}
    </div>
  );
};
