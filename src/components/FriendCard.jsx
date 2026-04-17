// FriendCard 

"use client";
import Link from "next/link";

export default function FriendCard({ friend }) {
  // Mapping the status to the specific pill styles from the design
  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-yellow-400 text-black",
    current: "bg-green-500 text-white",
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-md transition-all group flex flex-col items-center text-center">
        {/* Profile Image with subtle shadow */}
        <div className="relative">
          <img 
            src={friend.picture} 
            alt={friend.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform" 
          />
        </div>

        {/* Name and Basic Info */}
        <h3 className="mt-4 font-bold text-lg text-slate-800">{friend.name}</h3>
        
        {/* Status Pill - Matching the "Overdue" badge in Pixso */}
        <div className={`mt-2 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${statusStyles[friend.status] || "bg-slate-200"}`}>
          {friend.status}
        </div>

        {/* Subtext */}
        <p className="mt-3 text-sm text-slate-400 italic">
          "{friend.bio?.substring(0, 30)}..."
        </p>

       
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {friend.tags?.map((tag, i) => (
            <span key={i} className="text-[10px] font-bold uppercase bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer info */}
        <div className="mt-5 pt-4 border-t border-slate-50 w-full">
          <p className="text-xs font-medium text-slate-400">
            Last contact: <span className="text-slate-600">{friend.days_since_contact} days ago</span>
          </p>
        </div>
      </div>
    </Link>
  );
}