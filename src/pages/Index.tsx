
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProblemBoard } from "@/components/ProblemBoard";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Help Board</h1>
        <p className="text-muted-foreground">Post your problems and help others solve theirs</p>
      </header>
      
      <div className="flex justify-end mb-6">
        <Button className="gap-2" onClick={() => navigate('/post-problem')}>
          <PlusCircle size={18} />
          Post a Problem
        </Button>
      </div>
      
      <ProblemBoard />
    </div>
  );
};

export default Index;
