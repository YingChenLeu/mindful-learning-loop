
import { useState } from "react";
import { Users, Heart, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MatchingWheel } from "@/components/MatchingWheel";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-mobile";

// Mock user data for wellness support
const wellnessUsers = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Peer Counselor",
    topics: ["Stress", "Time Management"],
    avatar: "",
    bio: "I'm a psychology student who loves helping others manage stress and find balance.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Wellness Guide",
    topics: ["Mental Health", "Mindfulness"],
    avatar: "",
    bio: "Certified mindfulness coach with 3+ years experience helping students navigate college life.",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Student Mentor",
    topics: ["Work-Life Balance", "Motivation"],
    avatar: "",
    bio: "Senior student who has overcome burnout and now helps others find their passion again.",
  }
];

const topicsList = [
  "Stress", 
  "Anxiety", 
  "Depression", 
  "Time Management", 
  "Work-Life Balance", 
  "Motivation", 
  "Sleep Issues", 
  "Social Anxiety", 
  "Homesickness"
];

const Wellness = () => {
  const [isMatchDialogOpen, setIsMatchDialogOpen] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [matchMessage, setMatchMessage] = useState("");
  const [activeTab, setActiveTab] = useState("browse");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleTopicSelect = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== t));
    } else if (selectedTopics.length < 3) {
      setSelectedTopics([...selectedTopics, topic]);
    } else {
      toast.info("You can select up to 3 topics");
    }
  };

  const handleMatchRequest = () => {
    // In a real app, this would connect to a backend service
    toast.success("Match request submitted! We'll connect you soon.");
    setIsMatchDialogOpen(false);
  };
  
  const handleRandomMatch = () => {
    toast.success("Finding you a wellness supporter...");
    // Simulate finding a match after a delay
    setTimeout(() => {
      toast.success("You've been matched with Emma Thompson! Check your messages.");
    }, 2000);
  };

  const handleWheelMatch = (user: typeof wellnessUsers[0]) => {
    toast.success(`You've been matched with ${user.name}!`);
  };

  const MatchingWheelSection = () => (
    <div className="bg-card rounded-lg p-6 border shadow-sm">
      <MatchingWheel users={wellnessUsers} onMatch={handleWheelMatch} />
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Wellness Support</h1>
          <p className="text-muted-foreground">Connect with peers for emotional and wellness support</p>
        </div>
        <div className="flex gap-3">
          {isMobile ? (
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="gap-2">
                  <Heart className="h-4 w-4" />
                  Find Match
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Find Your Match</DrawerTitle>
                  <DrawerDescription>
                    Use our matching wheel to find the perfect wellness supporter
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <MatchingWheelSection />
                </div>
              </DrawerContent>
            </Drawer>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Heart className="h-4 w-4" />
                  Find Match
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Find Your Match</DialogTitle>
                  <DialogDescription>
                    Use our matching wheel to find the perfect wellness supporter
                  </DialogDescription>
                </DialogHeader>
                <MatchingWheelSection />
              </DialogContent>
            </Dialog>
          )}
          
          <Dialog open={isMatchDialogOpen} onOpenChange={setIsMatchDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Users className="h-4 w-4" />
                Request Match
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request Wellness Support</DialogTitle>
                <DialogDescription>
                  Tell us what you're looking for and we'll match you with someone who can help.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Select Topics (up to 3)</Label>
                  <div className="flex flex-wrap gap-2">
                    {topicsList.map(topic => (
                      <Badge 
                        key={topic} 
                        variant={selectedTopics.includes(topic) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-muted"
                        onClick={() => handleTopicSelect(topic)}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Briefly describe what you're looking for help with..."
                    value={matchMessage}
                    onChange={(e) => setMatchMessage(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsMatchDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleMatchRequest}>Request Match</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="browse">Browse Supporters</TabsTrigger>
          <TabsTrigger value="wheel">Matching Wheel</TabsTrigger>
        </TabsList>
        <TabsContent value="browse" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessUsers.map(user => (
              <Card key={user.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        {user.avatar ? (
                          <AvatarImage src={user.avatar} alt={user.name} />
                        ) : (
                          <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{user.name}</CardTitle>
                        <CardDescription>{user.role}</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{user.bio}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {user.topics.map(topic => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full gap-2"
                    onClick={() => toast.success(`Chat request sent to ${user.name}!`)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Connect
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="wheel" className="mt-6">
          <div className="flex justify-center">
            <MatchingWheelSection />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Wellness;
