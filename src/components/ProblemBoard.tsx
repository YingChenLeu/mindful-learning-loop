
import { useState } from "react";
import { ProblemChatDialog } from "./ProblemChatDialog";
import { HelpBoardCard } from "./HelpBoardCard";

type Problem = {
  id: number;
  title: string;
  description: string;
  category: string;
  timestamp: string;
  user: {
    name: string;
    avatar?: string;
    color?: string;
  };
  responses: number;
  likes: number;
  urgency: "low" | "medium" | "high";
};

const mockProblems: Problem[] = [
  {
    id: 1,
    title: "Need help with React Query implementation",
    description: "I'm trying to implement React Query for data fetching but getting strange errors in the console.",
    category: "React",
    timestamp: "2 hours ago",
    user: {
      name: "Sarah",
      color: "#3BA55C"
    },
    responses: 3,
    likes: 5,
    urgency: "medium"
  },
  {
    id: 2,
    title: "CSS Grid layout not working on mobile",
    description: "My grid layout looks fine on desktop but breaks completely on mobile devices.",
    category: "CSS",
    timestamp: "5 hours ago",
    user: {
      name: "Mike",
      color: "#FAA61A"
    },
    responses: 7,
    likes: 12,
    urgency: "high"
  },
  {
    id: 3,
    title: "TypeScript interface for nested API response",
    description: "I need help creating a TypeScript interface for a complex nested API response.",
    category: "TypeScript",
    timestamp: "1 day ago",
    user: {
      name: "Alex",
      color: "#ED4245"
    },
    responses: 2,
    likes: 4,
    urgency: "low"
  },
  {
    id: 4,
    title: "Setting up a CI/CD pipeline for React project",
    description: "Looking for guidance on setting up a CI/CD pipeline for my React project using GitHub Actions.",
    category: "DevOps",
    timestamp: "3 days ago",
    user: {
      name: "Jamie",
      color: "#9B59B6"
    },
    responses: 0,
    likes: 2,
    urgency: "medium"
  }
];

export interface ProblemBoardProps {
  selectedCategory: string;
  className?: string;
}

export const ProblemBoard = ({ selectedCategory, className }: ProblemBoardProps) => {
  const [problems, setProblems] = useState<Problem[]>(mockProblems);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const filteredProblems = selectedCategory === "All"
    ? problems
    : problems.filter(problem => problem.category === selectedCategory);

  const handleHelpClick = (problem: Problem) => {
    setSelectedProblem(problem);
    setIsChatOpen(true);
  };

  const handleCloseChatDialog = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {filteredProblems.map((problem) => (
          <HelpBoardCard
            key={problem.id}
            problem={problem}
            onHelpClick={handleHelpClick}
          />
        ))}
      </div>

      {selectedProblem && (
        <ProblemChatDialog
          isOpen={isChatOpen}
          onClose={handleCloseChatDialog}
          problem={selectedProblem}
        />
      )}
    </>
  );
};
