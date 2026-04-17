"use client";
import { useEffect, useState } from 'react';
import HeroBanner from '@/components/HeroBanner';
import FriendCard from '@/components/FriendCard';
import Footer from '@/components/Footer';
import friends from "../data/friends.json";
import Link from "next/link";

// import friends from './data/friends.json';


export default function Home() {


  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <HeroBanner />


       


       <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {friends.map((friend) => (
        <Link key={friend.id} href={`/friend/${friend.id}`}>
          <div className={`p-4 rounded-2xl shadow cursor-pointer ${
            friend.status === "overdue"
              ? "bg-red-100"
              : friend.status === "almost due"
              ? "bg-yellow-100"
              : "bg-green-100"
          }`}>
            <img src={friend.picture} className="w-16 h-16 rounded-full" />
            <h2 className="text-lg font-bold mt-2">{friend.name}</h2>
            <p>Days: {friend.days_since_contact}</p>
            <div className="flex gap-2 mt-2">
              {friend.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-white px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
    </main>
  );
}
