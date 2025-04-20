
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn, UserRound } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-[#2D4F53] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl relative bg-[#A8D3CC]/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 w-1/2 h-full transition-transform duration-500 ease-in-out"
             style={{ 
               transform: isLogin ? 'translateX(0)' : 'translateX(100%)',
               background: 'linear-gradient(135deg, #2D4F53 0%, #1A1F2C 100%)',
             }}>
        </div>

        <div className="grid grid-cols-2 min-h-[500px]">
          {/* Login Form */}
          <div className={`p-8 transition-all duration-500 ease-in-out ${isLogin ? 'opacity-100' : 'opacity-0'}`}
               style={{ zIndex: isLogin ? 2 : 1 }}>
            <div className="text-[#D8DEDE] max-w-sm mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <LogIn className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Login</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-login">Email</Label>
                  <Input
                    id="email-login"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#A8D3CC]/10 border-[#A8D3CC]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-login">Password</Label>
                  <Input
                    id="password-login"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#A8D3CC]/10 border-[#A8D3CC]/20"
                  />
                </div>
                <Button className="w-full bg-[#A8D3CC] text-[#2D4F53] hover:bg-[#A8D3CC]/90">
                  Login
                </Button>
              </div>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className={`p-8 transition-all duration-500 ease-in-out ${!isLogin ? 'opacity-100' : 'opacity-0'}`}
               style={{ zIndex: !isLogin ? 2 : 1 }}>
            <div className="text-[#D8DEDE] max-w-sm mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <UserRound className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Sign Up</h2>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-[#A8D3CC]/10 border-[#A8D3CC]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-signup">Email</Label>
                  <Input
                    id="email-signup"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-[#A8D3CC]/10 border-[#A8D3CC]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-signup">Password</Label>
                  <Input
                    id="password-signup"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#A8D3CC]/10 border-[#A8D3CC]/20"
                  />
                </div>
                <Button className="w-full bg-[#A8D3CC] text-[#2D4F53] hover:bg-[#A8D3CC]/90">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Switch Form Button */}
        <button
          onClick={toggleForm}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#D8DEDE] hover:text-[#A8D3CC] transition-colors"
        >
          {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
