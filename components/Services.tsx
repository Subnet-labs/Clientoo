import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left sticky text */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Shaping the Future of <span className="text-gradient">Digital Innovation</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    We move beyond standard templates. Our architecture is built for scalability, security, and pure visual impact.
                </p>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        Beyond Transactions
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
                        Towards True Ownership
                    </div>
                </div>
            </div>

            {/* Right grid */}
            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service, index) => {
                        const Icon = service.icon;
                        return (
                        <div 
                            key={index} 
                            className="glass-card p-8 rounded-2xl group hover:border-purple-500/30 transition-all duration-300 hover:bg-white/[0.04]"
                        >
                            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300">
                                <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-300 transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-400 transition-colors">
                                {service.description}
                            </p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;