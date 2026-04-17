


"use client";
import React, { useState } from "react";
import { Phone, MessageSquare, Video, Clock, Archive, Trash2 } from "lucide-react";
import friendsData from "@/data/friends.json";
import { useParams } from "next/navigation";
import toast from 'react-hot-toast';

export default function Page() {
  const params = useParams();
  const id = params?.id;

 
  const friend = friendsData.find(f => f.id === Number(id)) ?? friendsData[0];

 
  const [timelineEntries, setTimelineEntries] = useState([
    {
      id: 1,
      type: "Meetup",
      title: `Meetup with ${friend.name}`,
      date: "March 29, 2026",
      icon: "🤝"
    }
  ]);

 
  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type: type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      }),
      icon: type === "Call" ? "📞" : type === "Text" ? "💬" : "🎥"
    };

   
    setTimelineEntries(prev => [newEntry, ...prev]);

    
    toast.success(`${type} logged successfully!`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#F8FAFC] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src={friend.picture} 
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" 
              alt={friend.name}
            />
            <h1 className="text-2xl font-bold mt-4 text-slate-800">{friend.name}</h1>
            
            <div className="flex gap-2 mt-2">
              <span className="bg-green-100 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-green-200">
                {friend.status || "Active"}
              </span>
            </div>

            <p className="italic text-slate-500 mt-4 text-sm leading-relaxed">"{friend.bio}"</p>
            
            <div className="w-full mt-8 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700">
                <Clock size={18} /> Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700">
                <Archive size={18} /> Archive
              </button>
              <button className="w-full flex items-center justify-center gap-2 text-red-500 py-3 rounded-xl hover:bg-red-50 transition font-medium">
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-slate-800">{friend.days_since_contact}</p>
              <p className="text-slate-500 text-sm mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <p className="text-4xl font-bold text-slate-800">{friend.goal || 30}</p>
              <p className="text-slate-500 text-sm mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
              <p className="text-xl font-bold text-slate-800 mt-2">{friend.next_due_date}</p>
              <p className="text-slate-500 text-sm mt-1">Next Due</p>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleAction('Call')} className="flex flex-col items-center p-4 bg-blue-50/50 border border-blue-100 rounded-2xl hover:bg-blue-50 transition group">
                <Phone className="w-7 h-7 text-blue-500 mb-2 group-hover:scale-110 transition" /> 
                <span className="text-sm font-medium">Call</span>
              </button>
              <button onClick={() => handleAction('Text')} className="flex flex-col items-center p-4 bg-green-50/50 border border-green-100 rounded-2xl hover:bg-green-50 transition group">
                <MessageSquare className="w-7 h-7 text-green-500 mb-2 group-hover:scale-110 transition" /> 
                <span className="text-sm font-medium">Text</span>
              </button>
              <button onClick={() => handleAction('Video')} className="flex flex-col items-center p-4 bg-purple-50/50 border border-purple-100 rounded-2xl hover:bg-purple-50 transition group">
                <Video className="w-7 h-7 text-purple-500 mb-2 group-hover:scale-110 transition" /> 
                <span className="text-sm font-medium">Video</span>
              </button>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Timeline</h3>
            <div className="space-y-4">
              {timelineEntries.map((entry) => (
                <div key={entry.id} className="flex items-center p-4 border border-dashed border-slate-200 rounded-xl bg-slate-50/30">
                  <div className="p-3 bg-white rounded-full mr-4 text-xl shadow-sm">
                    {entry.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{entry.title}</h4>
                    <p className="text-xs text-slate-500">{entry.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}