
import { cn } from "@/lib/utils";
import { ChevronDown, Hash, Headphones, Mic, Plus, Settings, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type ChannelGroupProps = {
  name: string;
  children: React.ReactNode;
  expanded?: boolean;
};

const ChannelGroup = ({ name, children, expanded = true }: ChannelGroupProps) => {
  return (
    <div className="mb-2">
      <button className="flex items-center px-1 w-full text-xs text-muted-foreground hover:text-foreground py-1">
        <ChevronDown size={12} className={cn("mr-1", expanded ? "" : "rotate-270")} />
        <span className="uppercase font-semibold tracking-wide">{name}</span>
      </button>
      {expanded && <div className="mt-1">{children}</div>}
    </div>
  );
};

type ChannelProps = {
  name: string;
  type: "text" | "voice" | "announcement";
  active?: boolean;
  unread?: boolean;
  mentionCount?: number;
};

const Channel = ({ name, type, active, unread, mentionCount }: ChannelProps) => {
  const getIcon = () => {
    switch (type) {
      case "text":
        return <Hash size={18} className="flex-shrink-0" />;
      case "voice":
        return <Volume2 size={18} className="flex-shrink-0" />;
      case "announcement":
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path fill="currentColor" d="M3.9 8.26H2V15.2941H3.9V8.26Z" />
            <path fill="currentColor" d="M19.1 4V5.12659L4.85 8.26447V18.1176C4.85 18.5496 5.1464 18.9252 5.5701 19.0315L9.3701 19.9727C9.4461 19.9906 9.524 20 9.6 20C9.89545 20 10.1776 19.8635 10.36 19.6235L12.7065 16.5242L19.1 17.9304V19.0588H21V4H19.1ZM9.2181 17.9944L6.75 17.3826V15.2113L10.6706 16.0753L9.2181 17.9944Z" />
          </svg>
        );
    }
  };

  return (
    <div
      className={cn(
        "group flex items-center px-2 py-[0.4rem] rounded hover:bg-discord-sidebar/50 mb-[0.2rem] cursor-pointer",
        active ? "bg-discord-sidebar/70 text-white" : "text-muted-foreground",
        unread && !active ? "text-white" : ""
      )}
    >
      {getIcon()}
      <span className="ml-1.5 text-sm truncate">{name}</span>
      {mentionCount && mentionCount > 0 && (
        <Badge className="ml-auto bg-red-500 hover:bg-red-500 px-1.5 min-w-5 h-5 text-xs flex items-center justify-center">
          {mentionCount}
        </Badge>
      )}
      <div className="ml-auto hidden group-hover:flex items-center space-x-0.5">
        <button className="text-muted-foreground hover:text-foreground p-0.5">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

export const ChannelSidebar = () => {
  return (
    <div className="bg-discord-channelbar w-60 h-screen flex flex-col">
      <div className="px-4 h-12 flex items-center shadow-sm">
        <h2 className="font-bold text-white flex-1">Lovable Server</h2>
      </div>
      
      <div className="flex-1 px-2 py-3 overflow-y-auto discord-scrollbar">
        <ChannelGroup name="text channels">
          <Channel name="welcome" type="text" active={true} />
          <Channel name="announcements" type="announcement" unread={true} />
          <Channel name="general" type="text" unread={true} mentionCount={3} />
          <Channel name="off-topic" type="text" />
          <Channel name="memes" type="text" unread={true} />
        </ChannelGroup>
        
        <ChannelGroup name="voice channels">
          <Channel name="General" type="voice" />
          <Channel name="Gaming" type="voice" />
          <Channel name="Music" type="voice" />
        </ChannelGroup>
      </div>
      
      <div className="bg-discord-userbar px-2 py-2 flex items-center h-[52px]">
        <div className="flex items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-discord-primary flex items-center justify-center text-white">
            <span className="text-sm font-medium">U</span>
          </div>
          <div className="ml-2">
            <div className="text-sm font-medium text-white">User</div>
            <div className="text-xs text-green-400">#Online</div>
          </div>
        </div>
        <div className="flex space-x-1 text-gray-400">
          <button className="hover:text-gray-200">
            <Mic size={18} />
          </button>
          <button className="hover:text-gray-200">
            <Headphones size={18} />
          </button>
          <button className="hover:text-gray-200">
            <Settings size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
