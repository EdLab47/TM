import React from 'react';

export interface GuideStep {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  isCheckable: boolean;
}

export interface SheetInfo {
  id: number;
  title: string;
  description?: string;
}

export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
}