
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type MemberStatus = "online" | "idle" | "dnd" | "offline";

type Member = {
  id: number;
  name: string;
  status: MemberStatus;
  avatar?: string;
  color?: string;
  isBot?: boolean;
  game?: string;
};

const members: Member[] = [
  {
    id: 1,
    name: "Lovable Bot",
    status: "online",
    avatar: "/placeholder.svg",
    color: "#5865F2",
    isBot: true
  },
  { id: 2, name: "Sarah", status: "online", color: "#3BA55C" },
  { id: 3, name: "Mike", status: "idle", color: "#FAA61A", game: "Visual Studio Code" },
  { id: 4, name: "Alex", status: "dnd", color: "#ED4245" },
  { id: 5, name: "Jamie", status: "online", color: "#9B59B6" },
  { id: 6, name: "Taylor", status: "offline", color: "#5865F2" },
  { id: 7, name: "Morgan", status: "online", color: "#3BA55C" },
  { id: 8, name: "Casey", status: "online", color: "#FAA61A" },
  { id: 9, name: "Riley", status: "idle", color: "#ED4245" },
  { id: 10, name: "Jordan", status: "offline", color: "#9B59B6" },
];

const statusColors: Record<MemberStatus, string> = {
  online: "bg-discord-green",
  idle: "bg-yellow-500",
  dnd: "bg-red-500",
  offline: "bg-gray-500",
};

const MemberGroup = ({ name, members }: { name: string; members: Member[] }) => {
  if (!members.length) return null;
  
  return (
    <div className="mb-6">
      <h3 className="text-xs font-semibold uppercase text-muted-foreground mb-2 px-3">{name} — {members.length}</h3>
      <div>
        {members.map((member) => (
          <div key={member.id} className="flex items-center px-3 py-1.5 hover:bg-discord-sidebar/50 rounded cursor-pointer group">
            <div className="relative">
              <Avatar className="h-8 w-8 rounded-full">
                {member.avatar && <AvatarImage src={member.avatar} alt={member.name} />}
                <AvatarFallback style={{ backgroundColor: member.color || "#5865F2" }} className="text-white">
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <span className={cn(
                "absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-discord-channelbar",
                statusColors[member.status]
              )}></span>
            </div>
            <div className="ml-2">
              <div className="flex items-center">
                <span className={cn(
                  "text-sm font-medium",
                  member.status === "offline" ? "text-muted-foreground" : "text-white"
                )}>
                  {member.name}
                </span>
                {member.isBot && (
                  <span className="ml-1 text-xs bg-discord-primary text-white px-1 rounded text-[10px] uppercase font-bold">
                    Bot
                  </span>
                )}
              </div>
              {member.game && (
                <div className="text-xs text-muted-foreground">Playing {member.game}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const MembersSidebar = () => {
  // Group members by status
  const onlineMembers = members.filter(m => m.status !== "offline");
  const offlineMembers = members.filter(m => m.status === "offline");
  
  return (
    <div className="bg-discord-channelbar w-60 h-screen">
      <div className="pt-3 px-3">
        <div className="mb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full h-7 bg-discord-server rounded-sm text-sm px-2 py-1 text-muted-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>
      </div>
      
      <div className="h-[calc(100vh-76px)] overflow-y-auto discord-scrollbar px-0">
        <MemberGroup name="Online" members={onlineMembers} />
        <MemberGroup name="Offline" members={offlineMembers} />
      </div>
    </div>
  );
};
