
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type ServerProps = {
  name: string;
  img?: string;
  active?: boolean;
  hasNotification?: boolean;
  isHome?: boolean;
  onClick?: () => void;
};

const ServerIcon = ({ name, img, active, hasNotification, isHome, onClick }: ServerProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={onClick}
            className={cn(
              "group relative flex h-12 w-12 items-center justify-center rounded-full mb-2 transition-all duration-200",
              active ? "rounded-[16px] bg-discord-primary text-white" : "bg-discord-sidebar text-gray-300 hover:rounded-[16px] hover:bg-discord-primary hover:text-white"
            )}
          >
            {img ? (
              <img src={img} alt={name} className="h-7 w-7 rounded-full" />
            ) : isHome ? (
              <svg aria-hidden="true" role="img" width="28" height="20" viewBox="0 0 28 20">
                <path fill="currentColor" d="M23.0212 1.67671C21.3107 0.879656 19.5079 0.318797 17.6584 0C17.4062 0.461742 17.1749 0.934541 16.9708 1.4184C15.003 1.12145 12.9974 1.12145 11.0283 1.4184C10.819 0.934541 10.589 0.461744 10.3368 0.00000331C8.48074 0.324783 6.67795 0.885657 4.96746 1.68231C1.56727 6.77853 0.649666 11.7538 1.11108 16.652C3.10102 18.1418 5.3262 19.2743 7.69177 20C8.22338 19.2743 8.69519 18.4993 9.09812 17.691C8.32996 17.3997 7.58522 17.0424 6.87684 16.6135C7.06531 16.4762 7.24726 16.3387 7.42403 16.1847C11.5911 18.1749 16.408 18.1749 20.5763 16.1847C20.7531 16.3332 20.9351 16.4762 21.1171 16.6135C20.41 17.0369 19.6639 17.3997 18.897 17.691C19.3052 18.4993 19.7718 19.2689 20.3021 19.9945C22.6677 19.2689 24.8929 18.1364 26.8828 16.6466H26.8893C27.43 10.9731 25.9665 6.04728 23.0212 1.67671ZM9.68041 13.6383C8.39754 13.6383 7.34085 12.4453 7.34085 10.994C7.34085 9.54272 8.37155 8.34973 9.68041 8.34973C10.9893 8.34973 12.0395 9.54272 12.0187 10.994C12.0187 12.4453 10.9828 13.6383 9.68041 13.6383ZM18.3161 13.6383C17.0332 13.6383 15.9765 12.4453 15.9765 10.994C15.9765 9.54272 17.0124 8.34973 18.3161 8.34973C19.6184 8.34973 20.6751 9.54272 20.6543 10.994C20.6543 12.4453 19.6184 13.6383 18.3161 13.6383Z"></path>
              </svg>
            ) : (
              <span className="text-lg font-medium">{name.charAt(0).toUpperCase()}</span>
            )}
            {hasNotification && (
              <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full bg-red-500"></span>
            )}
            <span className={cn(
              "absolute -left-[0.3rem] h-2 w-2 rounded-full bg-white transition-all duration-200",
              active ? "visible" : "invisible group-hover:visible",
              active ? "h-10" : "h-5 group-hover:h-10"
            )}></span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5} className="bg-black text-white border-none z-50">
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const servers = [
  { name: "Home", isHome: true, active: true },
  { name: "Lovable", img: "/placeholder.svg", hasNotification: true },
  { name: "Gaming", hasNotification: false },
  { name: "Music", hasNotification: false },
  { name: "Dev", hasNotification: true },
  { name: "Art", hasNotification: false },
];

export const ServerSidebar = () => {
  return (
    <div className="flex flex-col items-center bg-discord-server w-[72px] h-screen py-3 overflow-y-auto discord-scrollbar">
      {servers.map((server, index) => (
        <ServerIcon key={index} {...server} />
      ))}
      <div className="w-8 h-[2px] bg-discord-sidebar/50 my-2 rounded-full"></div>
      <ServerIcon name="Add Server" active={false} onClick={() => {}} />
    </div>
  );
};
