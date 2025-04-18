
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { RocketIcon } from 'lucide-react';

const Intro = () => {
  return (
    <div className="min-h-screen bg-[#2D4F53] text-[#D8DEDE] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-16">
        <RocketIcon size={64} className="text-[#A8D3CC] mb-8 animate-bounce" />
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#D8DEDE] to-[#A8D3CC] bg-clip-text text-transparent">
          Welcome to MindfulLearning
        </h1>
        <p className="text-xl mb-8 max-w-2xl text-[#D8DEDE]/90">
          Join our community of learners and educators to share knowledge, solve problems, and grow together.
        </p>
        <div className="flex gap-4">
          <Button
            asChild
            className="bg-[#A8D3CC] text-[#2D4F53] hover:bg-[#D8DEDE] hover:text-[#2D4F53] transition-colors"
          >
            <Link to="/post-problem">
              Post a Problem
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#A8D3CC] text-[#D8DEDE] hover:bg-[#A8D3CC] hover:text-[#2D4F53]"
          >
            <Link to="/browse">
              Browse Problems
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
