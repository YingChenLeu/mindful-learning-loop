
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProblemBoard } from "@/components/ProblemBoard";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const categories = ["All", "Maths", "Sciences", "English", "Foreign Language"] as const;
type Category = typeof categories[number];

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Help Board</h1>
        <p className="text-muted-foreground">Post your problems and help others solve theirs</p>
      </header>
      
      <div className="flex flex-col gap-6 mb-6">
        <Tabs defaultValue="All" onValueChange={(value) => setSelectedCategory(value as Category)}>
          <TabsList className="w-full md:w-auto justify-start">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="min-w-24">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        
        <div className="flex justify-end">
          <Button className="gap-2" onClick={() => navigate('/post-problem')}>
            <PlusCircle size={18} />
            Post a Problem
          </Button>
        </div>
      </div>
      
      <ProblemBoard selectedCategory={selectedCategory} />
    </div>
  );
};

export default Index;

