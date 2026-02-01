import React from 'react';
import { Palette, MessageSquare, CreditCard, LayoutTemplate, FileCheck, Users, Zap } from 'lucide-react';
import Button from './Button';

const Features: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#FDFCFB] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-primary mb-3 block">Core Features</span>
            <h2 className="font-serif text-5xl md:text-6xl text-textMain mb-6">Powerful features built <br/> for <span className="italic text-textMuted">client clarity</span></h2>
            <p className="text-lg text-textMuted">Simple, structured tools that help your clients understand every part of the project—without asking for updates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            
            {/* Large Card: Branding */}
            <div className="bento-card md:col-span-2 row-span-2 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group">
                <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-gray-50 to-transparent -z-0"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
                        <Palette size={24} />
                    </div>
                    <h3 className="text-3xl font-serif mb-2">Organized Client Spaces</h3>
                    <p className="text-gray-500 max-w-sm">Branded, structured spaces where clients can follow all their work—with support for multiple active projects in one clean view.</p>
                </div>
                
                {/* Mockup inside card */}
                <div className="mt-8 bg-gray-900 rounded-tl-xl p-4 shadow-xl translate-x-12 translate-y-4 group-hover:translate-x-8 group-hover:translate-y-2 transition-transform duration-500">
                    <div className="flex gap-4 mb-4">
                        <div className="w-24 h-8 bg-gray-800 rounded opacity-50"></div>
                        <div className="w-24 h-8 bg-gray-800 rounded opacity-50"></div>
                    </div>
                    <div className="space-y-3">
                         <div className="bg-orange-600 p-4 rounded-lg text-white flex justify-between items-center">
                             <span>Website Design</span>
                             <span className="bg-white/20 px-2 py-1 rounded text-xs">Active</span>
                         </div>
                         <div className="bg-gray-800 p-4 rounded-lg text-gray-400">
                             <span>Webflow Development</span>
                         </div>
                    </div>
                </div>
            </div>

            {/* Tall Card: Speed */}
            <div className="bento-card md:col-span-1 row-span-2 rounded-3xl p-8 flex flex-col items-center text-center justify-center bg-primary text-white border-none group">
                <div className="w-full flex-1 flex flex-col justify-center">
                    <div className="text-6xl font-serif mb-2">2.5x</div>
                    <p className="opacity-90">Faster first-deliverable handoff</p>
                </div>
                <div className="w-full bg-white/10 rounded-xl p-4 backdrop-blur-sm mt-8 group-hover:bg-white/20 transition-colors">
                    <div className="flex items-center gap-3 text-left">
                         <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary">
                            <Zap size={16} />
                         </div>
                         <div className="text-xs">
                             <div className="font-bold">Instant Setup</div>
                             <div className="opacity-75">No configuration needed</div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Standard Card: Communication */}
            <div className="bento-card md:col-span-1 rounded-3xl p-8 flex flex-col justify-between group">
                <MessageSquare className="text-orange-500 mb-4" size={32} />
                <div>
                    <h3 className="text-xl font-bold mb-2">Smart Comms</h3>
                    <p className="text-sm text-gray-500">Clients get meaningful updates—not noise. Every change appears instantly.</p>
                </div>
            </div>

            {/* Standard Card: Cash Flow */}
            <div className="bento-card md:col-span-1 rounded-3xl p-8 flex flex-col justify-between group">
                <div className="flex justify-between items-start">
                    <CreditCard className="text-green-600 mb-4" size={32} />
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">+30%</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2">Cash Flow</h3>
                    <p className="text-sm text-gray-500">Monitor payments, progress, and revenue goals in one dashboard.</p>
                </div>
            </div>

            {/* Wide Card: Essentials */}
            <div className="bento-card md:col-span-2 rounded-3xl p-8 bg-black text-white border-gray-800 flex flex-col justify-center relative overflow-hidden group">
                <div className="relative z-10">
                     <span className="text-xs border border-white/20 rounded-full px-3 py-1 mb-4 inline-block">Client Essentials</span>
                     <h3 className="text-3xl font-serif mb-4">Everything your clients need — <br/> <span className="text-gray-400 italic">all in one place</span></h3>
                     <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">Explore Platform</Button>
                </div>
                <div className="absolute right-0 bottom-0 opacity-20 group-hover:opacity-30 transition-opacity">
                     <LayoutTemplate size={200} />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Features;