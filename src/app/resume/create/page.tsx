"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Mic, 
  Image as ImageIcon, 
  Paperclip,
  Bot,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function CreateResume() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "你好！我是你的AI简历助手。让我们开始创建你的专业简历吧！",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInput("");

    // 模拟AI回复
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "好的，让我来帮你完善简历内容。请告诉我你的教育背景和工作经验。",
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gray-50">
      {/* 聊天消息区域 - 使用absolute定位确保不会导致页面滚动 */}
      <div className="absolute inset-0 bottom-[80px] overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          <div className="h-8" /> {/* 添加顶部间距 */}
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2.5 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-600'
                  }`}>
                    {message.sender === 'user' ? 
                      <User className="w-5 h-5 text-white" /> : 
                      <Bot className="w-5 h-5 text-white" />
                    }
                  </div>
                  <div className={`flex flex-col gap-1 ${message.sender === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`rounded-2xl px-4 py-2 max-w-full break-words ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white border border-gray-200 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 输入区域 - 固定在底部 */}
      <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4 h-[80px]">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="输入你的问题..."
                className="w-full px-6 py-4 text-base text-gray-700 placeholder:text-gray-400 rounded-2xl border-[1.5px] border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white shadow-sm"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-100/80 rounded-xl"
                >
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-100/80 rounded-xl"
                >
                  <ImageIcon className="w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-100/80 rounded-xl"
                >
                  <Mic className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <Button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-xl px-8 py-4 flex items-center gap-2 shadow-sm hover:shadow transition-all duration-200"
            >
              发送
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
} 