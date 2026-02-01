import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const Showcase: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-24 relative bg-white border-t border-gray-100">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="font-serif text-5xl font-medium mb-4 text-textMain">Selected Work</h2>
          <p className="text-textMuted max-w-md">
            A curated selection of projects where design meets performance. 
            We build worlds, not just pages.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-textMain transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-textMain transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 snap-x snap-mandatory no-scrollbar"
      >
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group relative min-w-[350px] md:min-w-[500px] aspect-[4/3] rounded-sm overflow-hidden snap-center bg-gray-100 cursor-pointer"
          >
            {/* Image */}
            <div className="absolute inset-0 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">{project.category}</span>
                        <h3 className="font-serif text-2xl text-textMain">{project.title}</h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <ArrowUpRight size={16} />
                    </div>
                </div>
                <div className="pt-4 mt-2 border-t border-gray-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-sm font-medium">{project.stats}</span>
                </div>
            </div>
          </div>
        ))}
        
        {/* Call to action card */}
        <div className="min-w-[350px] rounded-sm snap-center flex items-center justify-center p-8 bg-gray-50 border border-dashed border-gray-300">
          <div className="text-center">
            <h3 className="text-3xl font-serif mb-4 text-textMain">Your Project Next?</h3>
            <button className="text-primary font-medium hover:underline flex items-center gap-2 mx-auto">
              Start a conversation <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;