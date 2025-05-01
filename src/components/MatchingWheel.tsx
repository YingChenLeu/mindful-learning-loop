
import { useState, useEffect } from "react";
import { Users, Heart, MessageCircle, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface WellnessUser {
  id: number;
  name: string;
  role: string;
  topics: string[];
  avatar: string;
  bio: string;
}

interface MatchingWheelProps {
  users: WellnessUser[];
  onMatch: (user: WellnessUser) => void;
}

export const MatchingWheel = ({ users, onMatch }: MatchingWheelProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedUser, setSelectedUser] = useState<WellnessUser | null>(null);
  const [rotationDegree, setRotationDegree] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSelectedUser(null);
    
    // Random rotation between 1440 and 2160 degrees (4-6 full rotations)
    const newRotation = rotationDegree + 1440 + Math.random() * 720;
    setRotationDegree(newRotation);
    
    // Select a random user
    const randomIndex = Math.floor(Math.random() * users.length);
    
    // Show result after animation completes
    setTimeout(() => {
      setIsSpinning(false);
      setSelectedUser(users[randomIndex]);
      onMatch(users[randomIndex]);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      <div className="text-center max-w-md">
        <h2 className="text-xl font-bold mb-2">Wellness Match Wheel</h2>
        <p className="text-muted-foreground">Spin the wheel to find your perfect wellness supporter!</p>
      </div>

      <div className="relative w-64 h-64 md:w-80 md:h-80">
        {/* Wheel Background */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/20 bg-card"></div>
        
        {/* Spinning Wheel */}
        <div 
          className={cn(
            "absolute inset-0 rounded-full overflow-hidden transition-all duration-3000 ease-out",
            isSpinning ? "cursor-not-allowed" : "cursor-pointer"
          )}
          style={{ transform: `rotate(${rotationDegree}deg)` }}
        >
          {users.map((user, index) => {
            const segmentAngle = 360 / users.length;
            const rotation = index * segmentAngle;
            
            return (
              <div 
                key={user.id}
                className="absolute origin-center w-1 h-1"
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: "center" 
                }}
              >
                <div 
                  className="absolute"
                  style={{ 
                    transform: `translateY(-50%) translateX(32px) rotate(90deg)`,
                    width: "90px"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 overflow-hidden rounded-full bg-background flex items-center justify-center">
                      <Avatar className="h-7 w-7">
                        {user.avatar ? (
                          <AvatarImage src={user.avatar} alt={user.name} />
                        ) : (
                          <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                        )}
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Center Button */}
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary text-primary-foreground border-4 border-background shadow-lg",
            isSpinning ? "cursor-not-allowed opacity-50" : "hover:bg-primary/90"
          )}
          disabled={isSpinning}
          onClick={spinWheel}
        >
          {isSpinning ? (
            <RotateCw className="h-8 w-8 animate-spin" />
          ) : (
            <Heart className="h-8 w-8" />
          )}
        </Button>
      </div>

      {/* Selected User */}
      {selectedUser && (
        <div className="flex flex-col items-center max-w-md mt-4 text-center animate-fade-in">
          <h3 className="text-lg font-semibold">You've been matched with:</h3>
          <div className="flex items-center gap-2 mt-2">
            <Avatar>
              {selectedUser.avatar ? (
                <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
              ) : (
                <AvatarFallback>{selectedUser.name.substring(0, 2)}</AvatarFallback>
              )}
            </Avatar>
            <span className="font-medium">{selectedUser.name}</span>
          </div>
          <div className="flex flex-wrap gap-1 justify-center mt-2">
            {selectedUser.topics.map(topic => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
          </div>
          <Button
            className="mt-4 gap-2"
            size="sm"
            onClick={() => toast.success(`Chat request sent to ${selectedUser.name}!`)}
          >
            <MessageCircle className="h-4 w-4" />
            Connect Now
          </Button>
        </div>
      )}
    </div>
  );
};
