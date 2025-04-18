
import React from 'react';
import { Leaf, GraduationCap, Sprout, BookOpen, TreeDeciduous, School, Plant, Pencil } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#2D4F53] text-[#D8DEDE] py-12 relative overflow-hidden">
      {/* Decorative Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Leaf className="absolute top-20 left-10 text-[#A8D3CC]/20 w-16 h-16 animate-bounce" />
        <Sprout className="absolute top-40 right-20 text-[#A8D3CC]/20 w-12 h-12 animate-bounce delay-100" />
        <TreeDeciduous className="absolute bottom-20 left-20 text-[#A8D3CC]/20 w-20 h-20 animate-bounce delay-200" />
        <Plant className="absolute top-60 left-1/2 text-[#A8D3CC]/20 w-14 h-14 animate-bounce delay-300" />
        <School className="absolute bottom-40 right-40 text-[#A8D3CC]/20 w-16 h-16 animate-bounce delay-150" />
        <Pencil className="absolute top-32 left-32 text-[#A8D3CC]/20 w-10 h-10 animate-bounce delay-75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-12">
          <section className="text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6 text-[#A8D3CC]" />
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#D8DEDE] to-[#A8D3CC] bg-clip-text text-transparent">
              Our Learning Initiative
            </h1>
            <p className="text-lg mb-8 text-[#D8DEDE]/90">
              Fostering growth through collaborative learning and mutual support
            </p>
          </section>

          <section className="bg-[#2D4F53]/50 rounded-lg p-8 backdrop-blur-sm border border-[#A8D3CC]/20">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#A8D3CC]" />
              Our Mission
            </h2>
            <p className="text-[#D8DEDE]/90 leading-relaxed">
              We believe in the power of community-driven learning. Our platform connects students and educators 
              in a collaborative environment where questions lead to understanding, and challenges become 
              opportunities for growth. Like a garden that needs nurturing to flourish, we provide the space 
              and resources for academic development to bloom.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2D4F53]/50 rounded-lg p-6 backdrop-blur-sm border border-[#A8D3CC]/20">
              <h3 className="text-xl font-semibold mb-3 text-[#A8D3CC]">Peer Support</h3>
              <p className="text-[#D8DEDE]/90">
                Connect with fellow students who understand your academic journey. Share experiences, 
                solutions, and insights across various subjects and levels.
              </p>
            </div>
            <div className="bg-[#2D4F53]/50 rounded-lg p-6 backdrop-blur-sm border border-[#A8D3CC]/20">
              <h3 className="text-xl font-semibold mb-3 text-[#A8D3CC]">Knowledge Growth</h3>
              <p className="text-[#D8DEDE]/90">
                Every question asked and answered contributes to our collective learning. Watch your 
                understanding grow as you engage with diverse perspectives and approaches.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
