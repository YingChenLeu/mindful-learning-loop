import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import AboutDev from "./pages/AboutDev";
import Index from "./pages/Index";
import PostProblem from "./pages/PostProblem";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/about" element={<About />} />
              <Route path="/about-dev" element={<AboutDev />} />
              <Route path="/browse" element={<Index />} />
              <Route path="/post-problem" element={<PostProblem />} />
              <Route path="/community" element={<Community />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
