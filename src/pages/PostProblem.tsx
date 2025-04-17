import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { courseGroups, type CourseCategory, type Course } from "@/utils/courseData";

const PostProblem = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | ''>('');
  const [selectedCourse, setSelectedCourse] = useState<Course | ''>('');
  const [urgency, setUrgency] = useState<string>('low');
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value as CourseCategory);
    setSelectedCourse(''); // Reset course when category changes
  };

  const handleCourseChange = (value: string) => {
    setSelectedCourse(value as Course);
  };

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(courseGroups).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Select 
                value={selectedCourse} 
                onValueChange={handleCourseChange}
                disabled={!selectedCategory}
              >
                <SelectTrigger id="course">
                  <SelectValue placeholder={selectedCategory ? "Select course" : "Select a category first"} />
                </SelectTrigger>
                <SelectContent>
                  {selectedCategory && courseGroups[selectedCategory].map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="urgency">Urgency</Label>
            <Select value={urgency} onValueChange={setUrgency}>
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

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Describe your problem in detail..."
              className="min-h-[200px]" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image (optional)</Label>
            <div className="flex flex-col gap-4">
              <Button 
                variant="outline" 
                className="w-full h-32 flex flex-col items-center justify-center gap-2 border-dashed"
                onClick={() => document.getElementById('image')?.click()}
              >
                <ImagePlus className="h-8 w-8 text-muted-foreground" />
                <span className="text-muted-foreground">Click to upload an image</span>
              </Button>
              <Input 
                type="file" 
                id="image" 
                className="hidden" 
                accept="image/*"
                onChange={handleImageChange}
              />
              {selectedImage && (
                <div className="relative aspect-video w-full">
                  <img 
                    src={selectedImage} 
                    alt="Selected" 
                    className="rounded-md object-cover w-full h-full"
                  />
                </div>
              )}
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
