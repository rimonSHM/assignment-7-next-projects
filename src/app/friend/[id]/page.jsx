// "use client";
// import React, { useState } from "react";
// import { Phone, MessageSquare, Video, Calendar, Clock, Archive, Trash2 } from "lucide-react";
// import friendsData from "@/data/friends.json";
// import { useParams } from "next/navigation";


// import toast from 'react-hot-toast';
// import { FaPhoneAlt, FaCommentAlt, FaVideo } from 'react-icons/fa';

// export default function Page() {
   
//   const params = useParams();
//   const id = params?.id;

//   // safer parsing
//   const friend = friendsData.find(f => f.id === Number(id)) ?? friendsData[0];



//   // Handle actions
//   const handleAction = (action) => {
//     const newEntry = {
//       id: Date.now(),
//       type: action.toLowerCase(),
//       title: `${action} with ${friend.name}`,
//       date: new Date().toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric"
//       }),
//       icon: action === "Call" ? "📞" : action === "Text" ? "💬" : "🎥"
//     };



//     const FriendDetails = ({ friendName, setTimelineEntries }) => {
  
//   const handleCheckIn = (type) => {
//     const newEntry = {
//       id: Date.now(),
//       type: type, // 'Call', 'Text', or 'Video'
//       title: `${type} with ${friendName}`,
//       date: new Date().toLocaleDateString('en-US', {
//         month: 'long',
//         day: 'numeric',
//         year: 'numeric'
//       }),
//       icon: type === 'Call' ? <FaPhoneAlt /> : type === 'Text' ? <FaCommentAlt /> : <FaVideo />
//     };

//     // Timeline state update kora (previous entries er upore notun entry hobe)
//     setTimelineEntries(prev => [newEntry, ...prev]);

//     // Success Toast
//     toast.success(`${type} logged successfully!`);
//   };

// //    setTimeline(prev => [newEntry, ...prev]);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-[#F8FAFC] min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//         {/* Left Column */}
//         <div className="lg:col-span-4 space-y-6">
//           <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
//             <img 
//               src={friend.picture} 
//               className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" 
//               alt={friend.name}
//             />

//             <h1 className="text-2xl font-bold mt-4 text-slate-800">{friend.name}</h1>

//             <div className="flex gap-2 mt-2">
//               <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${friend.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}`}>
//                 {friend.status}
//               </span>
//               <span className="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
//                 {friend.tags?.[0] || "Friend"}
//               </span>
//             </div>

//             <p className="italic text-slate-500 mt-4">"{friend.bio}"</p>
//             <p className="text-sm text-slate-400 mt-1">Preferred: {friend.email}</p>

//             <div className="w-full mt-8 space-y-3">
//               <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium">
//                 <Clock size={18} /> Snooze 2 Weeks
//               </button>
//               <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium">
//                 <Archive size={18} /> Archive
//               </button>
//               <button className="w-full flex items-center justify-center gap-2 text-red-500 py-3 rounded-xl hover:bg-red-50 transition font-medium">
//                 <Trash2 size={18} /> Delete
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="lg:col-span-8 space-y-6">

//           {/* Stats */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
//               <p className="text-4xl font-bold text-slate-800">{friend.days_since_contact}</p>
//               <p className="text-slate-500 text-sm mt-1">Days Since Contact</p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
//               <p className="text-4xl font-bold text-slate-800">{friend.goal}</p>
//               <p className="text-slate-500 text-sm mt-1">Goal (Days)</p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
//               <p className="text-xl font-bold text-slate-800">{friend.next_due_date}</p>
//               <p className="text-slate-500 text-sm mt-1">Next Due</p>
//             </div>
//           </div>

//           {/* Goal */}
//           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
//             <div>
//               <h3 className="font-bold text-slate-800">Relationship Goal</h3>
//               <p className="text-slate-500">
//                 Connect every <span className="font-bold text-slate-800">{friend.goal} days</span>
//               </p>
//             </div>
//             <button className="px-6 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 font-medium">
//               Edit
//             </button>
//           </div>

//           {/* Quick Check-In */}
//           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <h3 className="font-bold text-slate-800 mb-4">Quick Check-In</h3>
//             <div className="grid grid-cols-3 gap-4">

//               <button onClick={() => handleAction("Call")} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition">
//                 <Phone className="w-7 h-7" />
//                 <span className="text-sm font-medium">Call</span>
//               </button>

//               <button onClick={() => handleAction("Text")} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition">
//                 <MessageSquare className="w-7 h-7" />
//                 <span className="text-sm font-medium">Text</span>
//               </button>

//               <button onClick={() => handleAction("Video")} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition">
//                 <Video className="w-7 h-7" />
//                 <span className="text-sm font-medium">Video</span>
//               </button>

//             </div>


           

//           {/* Timeline */}
          
//         </div>
//       </div>
//     </div>
//   );
// }








// "use client";
// import React, { useState } from "react";
// import { Phone, MessageSquare, Video, Clock, Archive, Trash2 } from "lucide-react";
// import friendsData from "@/data/friends.json";
// import { useParams } from "next/navigation";
// import toast from 'react-hot-toast';

// export default function Page() {
//   const params = useParams();
//   const id = params?.id;

//   // Friend data find kora
//   const friend = friendsData.find(f => f.id === Number(id)) ?? friendsData[0];

//   // 1. Timeline state (Etai missing chilo)
//   const [timelineEntries, setTimelineEntries] = useState([
//     {
//       id: 1,
//       type: "Meetup",
//       title: `Meetup with ${friend.name}`,
//       date: "March 29, 2026",
//       icon: "🤝"
//     }
//   ]);

//   // 2. Handle Action Function
//   const handleAction = (type) => {
//     const newEntry = {
//       id: Date.now(),
//       type: type,
//       title: `${type} with ${friend.name}`,
//       date: new Date().toLocaleDateString("en-US", {
//         month: "long",
//         day: "numeric",
//         year: "numeric"
//       }),
//       icon: type === "Call" ? "📞" : type === "Text" ? "💬" : "🎥"
//     };

//     // State update kora (Notun entry upore thakbe)
//     setTimelineEntries(prev => [newEntry, ...prev]);

//     // Success Toast
//     toast.success(`${type} logged successfully!`);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-[#F8FAFC] min-h-screen">
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//         {/* Left Column */}
//         <div className="lg:col-span-4 space-y-6">
//           <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
//             <img 
//               src={friend.picture} 
//               className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" 
//               alt={friend.name}
//             />
//             <h1 className="text-2xl font-bold mt-4 text-slate-800">{friend.name}</h1>
//             <p className="italic text-slate-500 mt-4">"{friend.bio}"</p>
            
//             <div className="w-full mt-8 space-y-3">
//               {/* <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium">
//                 <Clock size={18} /> Snooze 2 Weeks
//               </button>
//               <button className="w-full flex items-center justify-center gap-2 text-red-500 py-3 rounded-xl hover:bg-red-50 transition font-medium">
//                 <Trash2 size={18} /> Archive
//               </button>
//               <button className="w-full flex items-center justify-center gap-2 text-red-500 py-3 rounded-xl hover:bg-red-50 transition font-medium">
//                 <Trash2 size={18} /> Delete
//               </button> */}

//               <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700">
//     <Clock size={18} /> Snooze 2 Weeks
//   </button>

//   {/* Archive Button - Neutral styling with Archive icon */}
//   <button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition font-medium text-slate-700">
//     <Archive size={18} /> Archive
//   </button>

//   {/* Delete Button - Red styling for danger action */}
//   <button className="w-full flex items-center justify-center gap-2 text-red-500 py-3 rounded-xl hover:bg-red-50 transition font-medium">
//     <Trash2 size={18} /> Delete
//   </button>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="lg:col-span-8 space-y-6">
//           {/* Stats Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
//               <p className="text-4xl font-bold text-slate-800">{friend.days_since_contact}</p>
//               <p className="text-slate-500 text-sm mt-1">Days Since Contact</p>
//             </div>
//             <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center font-bold">
//                {friend.next_due_date}
//                <p className="text-slate-500 font-normal text-sm mt-1">Next Due</p>
//             </div>
//           </div>

//           Quick Check-In (Logic Connected)
//           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <h3 className="font-bold text-slate-800 mb-4">Quick Check-In</h3>
//             <div className="grid grid-cols-3 gap-4">
//               <button onClick={() => handleAction('Call')} className="flex flex-col items-center p-4 border rounded-2xl hover:bg-slate-50 transition">
//                 <Phone className="w-7 h-7 text-blue-500 mb-2" /> 
//                 <span className="text-sm font-medium">Call</span>
//               </button>
//               <button onClick={() => handleAction('Text')} className="flex flex-col items-center p-4 border rounded-2xl hover:bg-slate-50 transition">
//                 <MessageSquare className="w-7 h-7 text-green-500 mb-2" /> 
//                 <span className="text-sm font-medium">Text</span>
//               </button>
//               <button onClick={() => handleAction('Video')} className="flex flex-col items-center p-4 border rounded-2xl hover:bg-slate-50 transition">
//                 <Video className="w-7 h-7 text-purple-500 mb-2" /> 
//                 <span className="text-sm font-medium">Video</span>
//               </button>

              
//             </div>
//           </div>

//           {/* Timeline Section (Displaying Entries) */}
//           <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <h3 className="font-bold text-slate-800 mb-6">Timeline</h3>
//             <div className="space-y-4">
//               {timelineEntries.map((entry) => (
//                 <div key={entry.id} className="flex items-center p-4 border border-dashed border-slate-200 rounded-xl">
//                   <div className="p-3 bg-slate-50 rounded-full mr-4 text-xl">
//                     {entry.icon}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-slate-800">{entry.title}</h4>
//                     <p className="text-sm text-slate-500">{entry.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }



// export default StatsPage;



"use client";
import React, { useState } from "react";
import { Phone, MessageSquare, Video, Clock, Archive, Trash2 } from "lucide-react";
import friendsData from "@/data/friends.json";
import { useParams } from "next/navigation";
import toast from 'react-hot-toast';

export default function Page() {
  const params = useParams();
  const id = params?.id;

  // JSON থেকে আইডি অনুযায়ী ফ্রেন্ড ডাটা খুঁজে বের করা
  const friend = friendsData.find(f => f.id === Number(id)) ?? friendsData[0];

  // টাইমলাইন স্টেট (প্রথমে একটি ডিফল্ট এন্ট্রি রাখা হয়েছে)
  const [timelineEntries, setTimelineEntries] = useState([
    {
      id: 1,
      type: "Meetup",
      title: `Meetup with ${friend.name}`,
      date: "March 29, 2026",
      icon: "🤝"
    }
  ]);

  // চেক-ইন হ্যান্ডলার ফাংশন
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

    // নতুন ডাটা লিস্টের শুরুতে যোগ করা
    setTimelineEntries(prev => [newEntry, ...prev]);

    // সাকসেস মেসেজ
    toast.success(`${type} logged successfully!`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#F8FAFC] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* বাম কলাম: প্রোফাইল কার্ড */}
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

        {/* ডান কলাম: তথ্য এবং টাইমলাইন */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* স্ট্যাটস সেকশন */}
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

          {/* কুইক চেক-ইন সেকশন */}
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

          {/* টাইমলাইন ডিসপ্লে সেকশন */}
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