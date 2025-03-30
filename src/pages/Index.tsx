
import { useState } from "react";
import { PlusCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ProblemBoard } from "@/components/ProblemBoard";

const Index = () => {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Help Board</h1>
        <p className="text-muted-foreground">Post your problems and help others solve theirs</p>
      </header>
      
      <div className="flex justify-end mb-6">
        <Button className="gap-2">
          <PlusCircle size={18} />
          Post a Problem
        </Button>
      </div>
      
      <ProblemBoard />
    </div>
  );
};

export default Index;
