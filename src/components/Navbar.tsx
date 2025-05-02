
import React from 'react';
import { Link } from 'react-router-dom';
import { RocketIcon, UserRound, Users, LogIn, Construction } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="bg-[#2D4F53] text-[#D8DEDE] p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2 hover:text-[#A8D3CC] transition-colors">
            <RocketIcon size={20} />
            <span>Initiative</span>
          </Link>
          <Link to="/about-dev" className="flex items-center space-x-2 hover:text-[#A8D3CC] transition-colors">
            <UserRound size={20} />
            <span>About the Dev</span>
          </Link>
          <Link to="/community" className="flex items-center space-x-2 hover:text-[#A8D3CC] transition-colors">
            <Users size={20} />
            <span>Community</span>
          </Link>
          <Link to="/in-development" className="flex items-center space-x-2 hover:text-[#A8D3CC] transition-colors">
            <Construction size={20} />
            <span>In Development</span>
          </Link>
        </div>
        <Button variant="outline" className="bg-transparent border-[#A8D3CC] text-[#D8DEDE] hover:bg-[#A8D3CC] hover:text-[#2D4F53]">
          <LogIn className="mr-2" size={20} />
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
