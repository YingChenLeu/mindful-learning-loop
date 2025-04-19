
import React from 'react';
import { School, BookOpen, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Community = () => {
  return (
    <div className="min-h-screen bg-[#2D4F53] text-[#D8DEDE] py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Learning Community</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-[#2D4F53]/50 border border-[#A8D3CC]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <School className="w-8 h-8 text-[#A8D3CC] animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-[#D8DEDE]">SchoolName1</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2D4F53]/50 border border-[#A8D3CC]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <BookOpen className="w-8 h-8 text-[#A8D3CC] animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-[#D8DEDE]">SchoolName2</h3>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2D4F53]/50 border border-[#A8D3CC]/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <GraduationCap className="w-8 h-8 text-[#A8D3CC] animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-[#D8DEDE]">SchoolName3</h3>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;
