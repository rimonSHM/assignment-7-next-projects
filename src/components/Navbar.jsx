"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Clock, TrendingUp } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { path: "/", text: "Home", icon: <Home size={18} /> },
    { path: "/timeline", text: "Timeline", icon: <Clock size={18} /> },
    { path: "/stats", text: "Stats", icon: <TrendingUp size={18} /> },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-12 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-[#1A202C]">
          KeenKeeper
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-200
                  ${isActive 
                    ? "bg-[#1E3A34] text-white shadow-sm" 
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
              >
                {item.icon}
                {item.text}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;