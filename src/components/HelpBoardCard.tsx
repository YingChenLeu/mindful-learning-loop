
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ThumbsUp, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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

const urgencyColors: Record<Problem["urgency"], string> = {
  low: "bg-blue-500",
  medium: "bg-yellow-500",
  high: "bg-red-500"
};

interface HelpBoardCardProps {
  problem: Problem;
  onHelpClick: (problem: Problem) => void;
}

export const HelpBoardCard = ({ problem, onHelpClick }: HelpBoardCardProps) => {
  return (
    <Card className="bg-discord-card border-discord-border h-full flex flex-col">
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
            onClick={() => onHelpClick(problem)}
          >
            Help Solve
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
