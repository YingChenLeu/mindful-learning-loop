
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PostProblem = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <Button 
        variant="ghost" 
        className="mb-6 gap-2" 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={18} />
        Back to Problems
      </Button>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Post a Problem</h1>
          <p className="text-muted-foreground">Share your problem with the community</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="What's your problem about?" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe your problem in detail..."
              className="min-h-[200px]" 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="css">CSS</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="devops">DevOps</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency</Label>
              <Select>
                <SelectTrigger id="urgency">
                  <SelectValue placeholder="Select urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <Button variant="secondary" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button>Post Problem</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProblem;
