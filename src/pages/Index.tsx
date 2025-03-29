
import { ServerSidebar } from "@/components/ServerSidebar";
import { ChannelSidebar } from "@/components/ChannelSidebar";
import { MessageArea } from "@/components/MessageArea";
import { MembersSidebar } from "@/components/MembersSidebar";

const Index = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <ServerSidebar />
      <ChannelSidebar />
      <div className="flex-1 bg-discord-bg flex flex-col">
        <MessageArea />
      </div>
      <MembersSidebar />
    </div>
  );
};

export default Index;
