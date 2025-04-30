
import { Home, BarChart2, User, Heart, PlusCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const sidebarItems = [
  {
    title: "Browse Problems",
    url: "/browse",
    icon: Home,
  },
  {
    title: "Contributions",
    url: "/contributions",
    icon: BarChart2,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "Wellness Support",
    url: "/wellness",
    icon: Heart,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-2">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              HS
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">Help Student</span>
            <span className="text-xs text-muted-foreground">Community Member</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    tooltip={item.title}
                  >
                    <button onClick={() => navigate(item.url)}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="px-2">
          <button 
            className="flex items-center gap-2 w-full p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onClick={() => navigate('/post-problem')}
          >
            <PlusCircle size={16} />
            <span>Post Problem</span>
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
