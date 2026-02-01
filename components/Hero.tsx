import React from 'react';
import Button from './Button';
import { ArrowDown } from 'lucide-react';
import { BlurFade } from './ui/blur-fade';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center bg-background">
      
      {/* Background Cloud Effect (Top) */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-cloud-pattern bg-cover bg-center opacity-40 mix-blend-multiply -z-10 pointer-events-none mask-image-gradient" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }} />
      
      {/* Orange Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          
          <BlurFade delay={0.25} inView>
            <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6 border border-orange-100">
               Accepting Q2 Projects
            </span>
          </BlurFade>

          <BlurFade delay={0.25 * 2} inView>
            <h1 className="font-serif font-medium text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-textMain mb-8">
              One portal for every <br />
              <span className="italic text-textMuted">project & client</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.25 * 3} inView>
            <p className="text-lg md:text-xl text-textMuted max-w-xl mb-10 leading-relaxed mx-auto">
              A modern design agency that replaces scattered emails, messy threads, and lost files with one clean, gorgeous space your clients will love.
            </p>
          </BlurFade>

          <BlurFade delay={0.25 * 4} inView className="flex flex-col items-center w-full">
            <Button variant="primary" className="px-8 py-4 shadow-xl shadow-primary/20">
              Get early access
            </Button>
            
            <div className="flex justify-center gap-8 mt-12 text-gray-400 grayscale opacity-60">
                {/* Simple Logo Placeholders */}
                {['Stripe', 'Fiverr', 'Upwork', 'Freelancer'].map((brand, i) => (
                    <span key={i} className="font-bold text-lg">{brand}</span>
                ))}
            </div>
          </BlurFade>
        </div>

        {/* 3D Floating Interface Mockup */}
        <div className="relative max-w-5xl mx-auto perspective-[2000px] animate-reveal opacity-0" style={{ animationDelay: '0.6s' }}>
           <div className="relative transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out preserve-3d">
              {/* Main Card */}
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                 
                 {/* Browser/Window Header */}
                 <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-mono text-gray-400">cliento.agency/dashboard</div>
                 </div>

                 {/* App Content */}
                 <div className="p-8 md:p-12 min-h-[500px] bg-white relative">
                    
                    <div className="flex flex-col items-center justify-center text-center mt-12">
                         <h3 className="font-serif text-4xl mb-6">The way client collaboration <br/> <span className="italic text-gray-400">should've worked from the start</span></h3>
                         <p className="text-sm text-gray-500 max-w-md mx-auto mb-12">
                             A streamlined workflow where clients always know what's next, what's done, and what matters.
                         </p>
                    </div>

                    {/* Floating Cards inside the UI */}
                    <div className="absolute top-20 left-10 w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-4 animate-float">
                        <div className="flex items-center gap-3 mb-3">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" className="w-10 h-10 rounded-full" alt="User" />
                            <div>
                                <div className="text-sm font-bold">Alex Kim</div>
                                <div className="text-xs text-gray-400">Radiant</div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-medium">
                                <span>Balance</span>
                                <span>$4,280</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-green-500"></div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-20 right-10 w-72 bg-white rounded-lg shadow-xl border border-gray-100 p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-primary mt-1">
                                <ArrowDown size={14} />
                            </div>
                            <div>
                                <div className="text-sm font-bold mb-1">Feedback received on Mockups</div>
                                <div className="text-xs text-gray-500 mb-2">"Love the new direction! Can we make the logo slightly larger?"</div>
                                <div className="text-[10px] text-gray-400">Just now • 2 attachments</div>
                            </div>
                        </div>
                    </div>

                 </div>
              </div>
              
              {/* Back Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 translate-y-10"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;