
import React from 'react';

const HeroBanner = () => {
  return (
    <section className="bg-[#F8FAFC] pt-20 pb-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1A202C] tracking-tight mb-6">
          Friends to keep close in your life
        </h1>

        <p className="text-[#64748B] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        <button className="inline-flex items-center gap-2 bg-[#1E3A34] hover:bg-[#152925] text-white px-6 py-4 rounded-lg font-semibold transition-all shadow-sm mx-auto">
          <span className="text-xl">+</span>
          Add a Friend
        </button>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <StatCard value="10" label="Total Friends" />
          <StatCard value="3" label="On Track" />
          <StatCard value="6" label="Need Attention" />
          <StatCard value="12" label="Interactions This Month" />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ value, label }) => (
  <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm">
    <span className="text-4xl font-bold text-[#1A202C] mb-2">{value}</span>
    <span className="text-xs font-bold text-[#94A3B8] text-center uppercase tracking-widest">
      {label}
    </span>
  </div>
);

export default HeroBanner;