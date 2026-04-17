// timeline page 

"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaCommentAlt, FaVideo, FaUsers } from 'react-icons/fa';

const TimelinePage = () => {
  // Demo Data (Real project-e eta API ba state theke ashbe)
  const [entries] = useState([
    { id: 1, type: 'Meetup', with: 'Tom Baker', date: 'March 29, 2026', icon: <FaUsers className="text-yellow-600" /> },
    { id: 2, type: 'Text', with: 'Sarah Chen', date: 'March 28, 2026', icon: <FaCommentAlt className="text-gray-400" /> },
    { id: 3, type: 'Meetup', with: 'Olivia Martinez', date: 'March 26, 2026', icon: <FaUsers className="text-yellow-600" /> },
    { id: 4, type: 'Video', with: 'Aisha Patel', date: 'March 23, 2026', icon: <FaVideo className="text-gray-600" /> },
    { id: 5, type: 'Meetup', with: 'Sarah Chen', date: 'March 21, 2026', icon: <FaUsers className="text-yellow-600" /> },
    { id: 6, type: 'Call', with: 'Marcus Johnson', date: 'March 19, 2026', icon: <FaPhoneAlt className="text-gray-600" /> },
  ]);

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-6">Timeline</h1>
          
          {/* Search/Filter Bar */}
          <div className="relative max-w-md mx-auto">
            <input 
              type="text" 
              placeholder="Filter timeline" 
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-200 transition"
            />
            <span className="absolute right-3 top-2.5 text-slate-400">▼</span>
          </div>
        </div>

     
        <div className="space-y-3">
          {entries.map((entry) => (
            <div 
              key={entry.id} 
              className="flex items-center p-4 bg-white border border-dashed border-slate-300 rounded-xl hover:shadow-sm transition cursor-default group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-lg mr-4 group-hover:bg-slate-100 transition">
                <span className="text-xl">
                  {entry.icon}
                </span>
              </div>

              {/* Text Info */}
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800">
                  {entry.type} <span className="font-normal text-slate-500">with</span> {entry.with}
                </h4>
                <p className="text-sm text-slate-400 mt-0.5">{entry.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default TimelinePage; 




