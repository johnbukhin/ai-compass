import { AIHelperChat } from '@/components/ai-helper-chat'
import { MessageSquare } from 'lucide-react'

export default function HelperChat() {
  return (
    <AIHelperChat 
      helper={{
        id: 'content-creator',
        name: 'Content Creator',
        description: 'Generate engaging blog posts, social media content, and marketing copy',
        icon: MessageSquare,
        category: 'Content',
        color: 'bg-blue-500'
      }}
    />
  )
}