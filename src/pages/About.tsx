import React from 'react';
import { BookOpen, Users, School, GraduationCap, Sprout, TreeDeciduous } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-[#2D4F53] text-[#D8DEDE] py-12 relative overflow-hidden">
      {/* Decorative Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BookOpen className="absolute top-20 left-10 text-[#A8D3CC]/20 w-16 h-16 animate-bounce" />
        <Users className="absolute top-40 right-20 text-[#A8D3CC]/20 w-12 h-12 animate-bounce delay-100" />
        <School className="absolute bottom-20 left-20 text-[#A8D3CC]/20 w-20 h-20 animate-bounce delay-200" />
        <GraduationCap className="absolute top-60 left-1/2 text-[#A8D3CC]/20 w-14 h-14 animate-bounce delay-300" />
        <Sprout className="absolute bottom-40 right-40 text-[#A8D3CC]/20 w-16 h-16 animate-bounce delay-150" />
        <TreeDeciduous className="absolute top-32 left-32 text-[#A8D3CC]/20 w-10 h-10 animate-bounce delay-75" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-12">
          <section className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#A8D3CC] flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-[#2D4F53]" />
            </div>
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#D8DEDE] to-[#A8D3CC] bg-clip-text text-transparent">
              About Initiative
            </h1>
            <p className="text-lg mb-8 text-[#D8DEDE]/90">
              Our mission is to connect students with resources and communities that foster growth and collaboration.
            </p>
          </section>

          <section className="bg-[#2D4F53]/50 rounded-lg p-8 backdrop-blur-sm border border-[#A8D3CC]/20">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-[#A8D3CC]" />
              Our Vision
            </h2>
            <p className="text-[#D8DEDE]/90 leading-relaxed">
              We envision a world where every student has access to the tools and support they need to succeed. 
              By building a platform that connects students with valuable resources and a supportive community, 
              we aim to empower the next generation of leaders and innovators.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#2D4F53]/50 rounded-lg p-6 backdrop-blur-sm border border-[#A8D3CC]/20">
              <h3 className="text-xl font-semibold mb-3 text-[#A8D3CC]">Our Goals</h3>
              <ul className="space-y-2 text-[#D8DEDE]/90">
                <li>• Connect students with educational resources</li>
                <li>• Foster a collaborative learning environment</li>
                <li>• Provide access to a supportive community</li>
                <li>• Empower students to achieve their full potential</li>
              </ul>
            </div>
            <div className="bg-[#2D4F53]/50 rounded-lg p-6 backdrop-blur-sm border border-[#A8D3CC]/20">
              <h3 className="text-xl font-semibold mb-3 text-[#A8D3CC]">What We Offer</h3>
              <ul className="space-y-2 text-[#D8DEDE]/90">
                <li>• Resource directory</li>
                <li>• Community forum</li>
                <li>• Study groups</li>
                <li>• Mentorship programs</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
