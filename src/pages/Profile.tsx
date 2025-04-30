
import { useState } from "react";
import { Edit, Save, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "john.doe@example.com",
    bio: "I'm a student majoring in Computer Science. I love helping others with programming problems.",
    profilePicture: "",
    theme: "system"
  });
  
  const handleChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload to a server
      const imageUrl = URL.createObjectURL(file);
      handleChange("profilePicture", imageUrl);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your profile information</CardDescription>
              </div>
              <Button 
                type={isEditing ? "submit" : "button"}
                variant="outline" 
                size="sm"
                onClick={() => !isEditing && setIsEditing(true)}
              >
                {isEditing ? (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </>
                )}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    {profile.profilePicture ? (
                      <AvatarImage src={profile.profilePicture} alt={profile.name} />
                    ) : (
                      <AvatarFallback className="text-2xl">
                        <User size={32} />
                      </AvatarFallback>
                    )}
                  </Avatar>
                  {isEditing && (
                    <div className="absolute bottom-0 right-0">
                      <Button 
                        type="button" 
                        size="sm" 
                        className="h-8 w-8 rounded-full p-0"
                        onClick={() => document.getElementById('avatar-upload')?.click()}
                      >
                        <Edit className="h-3 w-3" />
                        <span className="sr-only">Change avatar</span>
                      </Button>
                      <input
                        id="avatar-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </div>
                  )}
                </div>
                <div className="space-y-2 flex-1">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={profile.username}
                      onChange={(e) => handleChange("username", e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  disabled={!isEditing}
                />
              </div>
              
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => handleChange("bio", e.target.value)}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
            </CardContent>
          </form>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your app preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="theme">
                <TabsList className="grid w-full grid-cols-1">
                  <TabsTrigger value="theme">Theme</TabsTrigger>
                </TabsList>
                <TabsContent value="theme" className="pt-4">
                  <RadioGroup 
                    value={profile.theme} 
                    onValueChange={(value) => handleChange("theme", value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="theme-system" />
                      <Label htmlFor="theme-system">System</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="theme-light" />
                      <Label htmlFor="theme-light">Light</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="theme-dark" />
                      <Label htmlFor="theme-dark">Dark</Label>
                    </div>
                  </RadioGroup>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => {
                  handleChange("theme", "system");
                  toast.success("Settings updated successfully!");
                }}
              >
                Save Settings
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Account Statistics</CardTitle>
              <CardDescription>Your activity summary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span>Problems Helped</span>
                <span className="font-medium">54</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span>Problems Posted</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span>Joined</span>
                <span className="font-medium">Jan 2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Reputation Score</span>
                <span className="font-medium text-primary">752</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
