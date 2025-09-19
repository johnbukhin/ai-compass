import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Send, ArrowLeft, Settings, MessageSquare, Bot } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
  timestamp: string
}

interface AIHelperChatProps {
  helper?: {
    id: string
    name: string
    description: string
    icon: React.ComponentType<any>
    category: string
    color: string
  }
}

export function AIHelperChat({ helper = {
  id: 'content-creator',
  name: 'Content Creator',
  description: 'Generate engaging blog posts, social media content, and marketing copy',
  icon: MessageSquare,
  category: 'Content',
  color: 'bg-blue-500'
}}: AIHelperChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hi! I'm your ${helper.name} assistant. I'm here to help you with ${helper.description.toLowerCase()}. What would you like to work on today?`,
      sender: 'ai',
      timestamp: '10:30 AM'
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `I understand you want help with "${inputValue}". Let me provide you with some detailed assistance on that topic. This is a simulated response from your ${helper.name} AI helper.`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 2000)

    console.log('Message sent:', inputValue)
    // todo: remove mock functionality - integrate with OpenAI API
  }

  const handleBack = () => {
    console.log('Back to dashboard clicked')
    // todo: remove mock functionality - navigate to dashboard
  }

  const handleSettings = () => {
    console.log('Helper settings clicked')
    // todo: remove mock functionality - open helper settings
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleBack}
              data-testid="button-back-to-dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${helper.color} rounded-lg flex items-center justify-center`}>
                <helper.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-semibold" data-testid="text-helper-name">
                  {helper.name}
                </h1>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {helper.category}
                  </Badge>
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Online
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleSettings}
            data-testid="button-helper-settings"
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              data-testid={`message-${message.sender}-${message.id}`}
            >
              {message.sender === 'ai' && (
                <Avatar className="w-8 h-8">
                  <AvatarFallback className={helper.color}>
                    <Bot className="w-4 h-4 text-white" />
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div className={`max-w-[70%] ${message.sender === 'user' ? 'order-2' : ''}`}>
                <Card className={`${
                  message.sender === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card'
                }`}>
                  <CardContent className="p-3">
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </CardContent>
                </Card>
                <p className={`text-xs text-muted-foreground mt-1 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}>
                  {message.timestamp}
                </p>
              </div>

              {message.sender === 'user' && (
                <Avatar className="w-8 h-8 order-3">
                  <AvatarFallback className="bg-muted">
                    U
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 justify-start">
              <Avatar className="w-8 h-8">
                <AvatarFallback className={helper.color}>
                  <Bot className="w-4 h-4 text-white" />
                </AvatarFallback>
              </Avatar>
              <Card className="bg-card">
                <CardContent className="p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="border-t border-border bg-background p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <Input
              placeholder={`Ask ${helper.name} anything...`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
              data-testid="input-chat-message"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              data-testid="button-send-message"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            {helper.name} is powered by advanced AI. Responses are generated based on your input.
          </p>
        </div>
      </div>
    </div>
  )
}