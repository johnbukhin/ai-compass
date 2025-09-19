import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Code, 
  Lightbulb, 
  Users,
  Settings,
  Plus,
  TrendingUp,
  Clock,
  Activity
} from "lucide-react"

const aiHelpers = [
  {
    id: 'content-creator',
    name: 'Content Creator',
    description: 'Generate engaging blog posts, social media content, and marketing copy',
    icon: MessageSquare,
    usage: 342,
    maxUsage: 1000,
    category: 'Content',
    color: 'bg-blue-500'
  },
  {
    id: 'data-analyst',
    name: 'Data Analyst',
    description: 'Transform datasets into actionable insights and visualizations',
    icon: BarChart3,
    usage: 156,
    maxUsage: 1000,
    category: 'Analytics',
    color: 'bg-green-500'
  },
  {
    id: 'code-reviewer',
    name: 'Code Reviewer',
    description: 'Get intelligent code reviews and optimization suggestions',
    icon: Code,
    usage: 89,
    maxUsage: 1000,
    category: 'Development',
    color: 'bg-purple-500'
  },
  {
    id: 'document-processor',
    name: 'Document Processor',
    description: 'Summarize and extract key information from documents',
    icon: FileText,
    usage: 234,
    maxUsage: 1000,
    category: 'Productivity',
    color: 'bg-orange-500'
  },
  {
    id: 'creative-brainstorm',
    name: 'Creative Brainstorm',
    description: 'Generate innovative ideas and creative solutions',
    icon: Lightbulb,
    usage: 67,
    maxUsage: 1000,
    category: 'Creative',
    color: 'bg-yellow-500'
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    description: 'Provide 24/7 customer assistance with contextual responses',
    icon: Users,
    usage: 445,
    maxUsage: 1000,
    category: 'Support',
    color: 'bg-pink-500'
  }
]

export function Dashboard() {
  const handleHelperClick = (helperId: string) => {
    console.log(`Opening AI helper: ${helperId}`)
    // todo: remove mock functionality - navigate to helper chat
  }

  const handleAddHelper = () => {
    console.log('Add new helper clicked')
    // todo: remove mock functionality - open helper marketplace
  }

  const handleSettings = () => {
    console.log('Settings clicked')
    // todo: remove mock functionality - navigate to settings
  }

  const totalUsage = aiHelpers.reduce((sum, helper) => sum + helper.usage, 0)
  const totalAvailable = aiHelpers.reduce((sum, helper) => sum + helper.maxUsage, 0)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold" data-testid="text-dashboard-title">
            AI Helpers Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and interact with your custom AI assistants
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            onClick={handleSettings}
            data-testid="button-settings"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button 
            onClick={handleAddHelper}
            data-testid="button-add-helper"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Helper
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Helpers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="stat-total-helpers">
              {aiHelpers.length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Usage This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="stat-usage">
              {totalUsage.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              of {totalAvailable.toLocaleString()} available
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              Most Active
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="stat-most-active">
              Customer Support
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Active Since
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="stat-active-since">
              14 days
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Helpers Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your AI Helpers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiHelpers.map((helper) => (
            <Card 
              key={helper.id}
              className="hover-elevate transition-all duration-200 cursor-pointer"
              onClick={() => handleHelperClick(helper.id)}
              data-testid={`card-helper-${helper.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${helper.color} rounded-lg flex items-center justify-center`}>
                      <helper.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{helper.name}</CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {helper.category}
                      </Badge>
                    </div>
                  </div>
                  <Activity className="w-4 h-4 text-muted-foreground" />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {helper.description}
                </CardDescription>
                
                {/* Usage Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Usage this month</span>
                    <span className="font-medium">
                      {helper.usage} / {helper.maxUsage}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(helper.usage / helper.maxUsage) * 100}%` }}
                    />
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Conversation
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Add New Helper Card */}
          <Card 
            className="border-dashed border-2 hover-elevate transition-all duration-200 cursor-pointer flex items-center justify-center min-h-[280px]"
            onClick={handleAddHelper}
            data-testid="card-add-helper"
          >
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Add New Helper</h3>
                <p className="text-sm text-muted-foreground">
                  Browse our marketplace for more AI assistants
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}