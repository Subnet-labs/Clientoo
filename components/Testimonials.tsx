import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]"></div>

       <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Built for People, <br/>
                <span className="text-gradient">Powered by Results</span>
            </h2>
            <p className="text-gray-400">Join thousands shaping the decentralized revolution—because innovation happens together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Card */}
            <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full min-h-[250px] bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/20">
                <div>
                    <h3 className="text-5xl font-bold text-white mb-2">2.3M+</h3>
                    <p className="text-purple-300 font-medium">Active Users</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 mt-8">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    Growing stronger every day
                </div>
            </div>

            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-white/[0.04] transition-colors flex flex-col justify-between">
                <div>
                    <div className="flex gap-1 mb-4">
                        {[1,2,3,4,5].map(i => <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />)}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-500/20" />
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.author}</h4>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
             
             {/* CTA Card in Grid */}
             <div className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center bg-white/[0.02]">
                <h3 className="text-xl font-bold text-white mb-2">120K+</h3>
                <p className="text-gray-400 text-sm mb-4">Transactions validated daily with zero downtime.</p>
                <div className="px-4 py-2 rounded-full bg-white/5 text-xs font-medium text-gray-300 border border-white/10">
                    Join Our Community
                </div>
             </div>
        </div>
       </div>
    </section>
  );
};

export default Testimonials;