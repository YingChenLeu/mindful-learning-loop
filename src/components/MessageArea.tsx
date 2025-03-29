
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AtSign, Bell, Hash, Pin, PlusCircle, Smile, UserPlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

type Message = {
  id: number;
  content: string;
  timestamp: string;
  user: {
    id: number;
    name: string;
    avatar?: string;
    color?: string;
  };
  isFirstInGroup?: boolean;
};

const messages: Message[] = [
  {
    id: 1,
    content: "Hey everyone, welcome to the general channel! 👋",
    timestamp: "Today at 9:30 AM",
    user: {
      id: 1,
      name: "Lovable Bot",
      avatar: "/placeholder.svg",
      color: "#5865F2"
    },
    isFirstInGroup: true
  },
  {
    id: 2,
    content: "We just launched our new feature!",
    timestamp: "Today at 10:15 AM",
    user: {
      id: 2,
      name: "Sarah",
      color: "#3BA55C"
    },
    isFirstInGroup: true
  },
  {
    id: 3,
    content: "That's awesome! How do we use it?",
    timestamp: "Today at 10:17 AM",
    user: {
      id: 3,
      name: "Mike",
      color: "#FAA61A"
    },
    isFirstInGroup: true
  },
  {
    id: 4,
    content: "Check out the documentation here: https://docs.example.com",
    timestamp: "Today at 10:18 AM",
    user: {
      id: 2,
      name: "Sarah",
      color: "#3BA55C"
    },
    isFirstInGroup: false
  },
  {
    id: 5,
    content: "I'll work on implementing it for our project this afternoon.",
    timestamp: "Today at 10:20 AM",
    user: {
      id: 2,
      name: "Sarah",
      color: "#3BA55C"
    },
    isFirstInGroup: false
  },
  {
    id: 6,
    content: "Great, let me know if you need any help!",
    timestamp: "Today at 10:21 AM",
    user: {
      id: 4,
      name: "Alex",
      color: "#ED4245"
    },
    isFirstInGroup: true
  },
  {
    id: 7,
    content: "Has anyone seen the new AI features that got added to the platform?",
    timestamp: "Today at 10:32 AM",
    user: {
      id: 5,
      name: "Jamie",
      color: "#9B59B6"
    },
    isFirstInGroup: true
  },
  {
    id: 8,
    content: "Yeah, they're pretty impressive! I've been experimenting with them all morning.",
    timestamp: "Today at 10:35 AM",
    user: {
      id: 3,
      name: "Mike",
      color: "#FAA61A"
    },
    isFirstInGroup: true
  }
];

const MessageComponent = ({ message }: { message: Message }) => {
  const { user, content, timestamp, isFirstInGroup } = message;
  
  return (
    <div className={cn("py-[17px] px-4 hover:bg-discord-sidebar/10", isFirstInGroup ? "mt-[17px]" : "mt-0")}>
      <div className="flex">
        {isFirstInGroup && (
          <div className="mr-4">
            <Avatar className="h-10 w-10 rounded-full">
              {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
              <AvatarFallback style={{ backgroundColor: user.color || "#5865F2" }} className="text-white">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>
        )}
        <div className={cn("flex-1", !isFirstInGroup && "pl-14")}>
          {isFirstInGroup && (
            <div className="flex items-baseline mb-1">
              <span className="font-medium text-white mr-2">{user.name}</span>
              <span className="text-xs text-muted-foreground">{timestamp}</span>
            </div>
          )}
          <div className="text-sm text-foreground/90">{content}</div>
        </div>
      </div>
    </div>
  );
};

export const MessageArea = () => {
  const [newMessage, setNewMessage] = useState("");
  
  return (
    <div className="flex flex-col h-full">
      {/* Channel Header */}
      <div className="h-12 border-b border-border flex items-center px-4 shadow-sm">
        <Hash size={24} className="text-muted-foreground mr-2" />
        <span className="font-bold text-white">general</span>
        <div className="h-6 mx-2 border-r border-border"></div>
        <span className="text-sm text-muted-foreground">Welcome to the beginning of the #general channel</span>
        
        <div className="ml-auto flex items-center space-x-3 text-muted-foreground">
          <button className="hover:text-white">
            <Bell size={20} />
          </button>
          <button className="hover:text-white">
            <Pin size={20} />
          </button>
          <button className="hover:text-white">
            <UserPlus size={20} />
          </button>
        </div>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto discord-scrollbar flex flex-col">
        <div className="flex-1"></div> {/* Push messages to bottom */}
        <div className="pt-4 pb-0">
          {messages.map((message) => (
            <MessageComponent key={message.id} message={message} />
          ))}
        </div>
      </div>
      
      {/* Message Input */}
      <div className="p-4">
        <div className="relative">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Message #general"
            className="min-h-[44px] max-h-[50vh] w-full resize-none rounded-lg bg-discord-sidebar/90 border-none px-4 py-3 text-white placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <div className="absolute right-3 bottom-2.5 flex items-center space-x-2 text-muted-foreground">
            <button className="hover:text-white">
              <PlusCircle size={20} />
            </button>
            <button className="hover:text-white">
              <AtSign size={20} />
            </button>
            <button className="hover:text-white">
              <Smile size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
