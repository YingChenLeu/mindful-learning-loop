
import { useState } from "react";
import { MessageCircle, ThumbsUp, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Problem = {
  id: number;
  title: string;
  description: string;
  category: string;
  timestamp: string;
  user: {
    name: string;
    avatar?: string;
    color?: string;
  };
  responses: number;
  likes: number;
  urgency: "low" | "medium" | "high";
};

const mockProblems: Problem[] = [
  {
    id: 1,
    title: "Need help with React Query implementation",
    description: "I'm trying to implement React Query for data fetching but getting strange errors in the console.",
    category: "React",
    timestamp: "2 hours ago",
    user: {
      name: "Sarah",
      color: "#3BA55C"
    },
    responses: 3,
    likes: 5,
    urgency: "medium"
  },
  {
    id: 2,
    title: "CSS Grid layout not working on mobile",
    description: "My grid layout looks fine on desktop but breaks completely on mobile devices.",
    category: "CSS",
    timestamp: "5 hours ago",
    user: {
      name: "Mike",
      color: "#FAA61A"
    },
    responses: 7,
    likes: 12,
    urgency: "high"
  },
  {
    id: 3,
    title: "TypeScript interface for nested API response",
    description: "I need help creating a TypeScript interface for a complex nested API response.",
    category: "TypeScript",
    timestamp: "1 day ago",
    user: {
      name: "Alex",
      color: "#ED4245"
    },
    responses: 2,
    likes: 4,
    urgency: "low"
  },
  {
    id: 4,
    title: "Setting up a CI/CD pipeline for React project",
    description: "Looking for guidance on setting up a CI/CD pipeline for my React project using GitHub Actions.",
    category: "DevOps",
    timestamp: "3 days ago",
    user: {
      name: "Jamie",
      color: "#9B59B6"
    },
    responses: 0,
    likes: 2,
    urgency: "medium"
  }
];

const urgencyColors = {
  low: "bg-blue-500",
  medium: "bg-yellow-500",
  high: "bg-red-500"
};

export const ProblemBoard = () => {
  const [problems, setProblems] = useState<Problem[]>(mockProblems);
  
  const handleHelpClick = (id: number) => {
    console.log(`Helping with problem #${id}`);
    // This would navigate to a detailed view in a real app
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {problems.map((problem) => (
        <Card key={problem.id} className="bg-discord-card border-discord-border h-full flex flex-col">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start mb-2">
              <Badge className="bg-discord-primary/80 hover:bg-discord-primary">{problem.category}</Badge>
              <Badge className={`${urgencyColors[problem.urgency]} hover:${urgencyColors[problem.urgency]}`}>
                {problem.urgency.charAt(0).toUpperCase() + problem.urgency.slice(1)} Priority
              </Badge>
            </div>
            <CardTitle className="text-lg text-white">{problem.title}</CardTitle>
          </CardHeader>
          
          <CardContent className="flex-grow">
            <p className="text-muted-foreground text-sm">{problem.description}</p>
          </CardContent>
          
          <CardFooter className="flex flex-col border-t border-discord-border pt-4 gap-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  {problem.user.avatar && <AvatarImage src={problem.user.avatar} />}
                  <AvatarFallback style={{ backgroundColor: problem.user.color }}>{problem.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{problem.user.name}</span>
              </div>
              <div className="flex items-center text-muted-foreground text-xs gap-1">
                <Clock size={14} />
                <span>{problem.timestamp}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MessageCircle size={16} />
                  <span>{problem.responses}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <ThumbsUp size={16} />
                  <span>{problem.likes}</span>
                </div>
              </div>
              
              <Button 
                variant="default" 
                className="bg-discord-primary hover:bg-discord-primary/90"
                onClick={() => handleHelpClick(problem.id)}
              >
                Help Solve
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
