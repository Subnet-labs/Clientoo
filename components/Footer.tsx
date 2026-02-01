import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-32 pb-10 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="font-serif text-5xl md:text-8xl font-normal mb-8 leading-tight">
            Ready to scale <br/>
            <span className="text-primary italic">your impact?</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
              <Button variant="primary" className="px-8 py-4 text-lg">Start your project</Button>
              <Button variant="outline" className="px-8 py-4 text-lg border-white/20 text-white hover:bg-white hover:text-black hover:border-white">View Pricing</Button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
             <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-white">
                    <span className="font-serif font-bold italic text-xs">C</span>
                </div>
                <span className="font-serif font-bold text-xl tracking-tight">Cliento</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm">
                A digital design agency focused on ROI, conversion, and storytelling for modern brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm text-gray-400">
            <div className="flex flex-col gap-4">
                <span className="text-white font-bold">Explore</span>
                <a href="#" className="hover:text-white transition-colors">Work</a>
                <a href="#" className="hover:text-white transition-colors">Services</a>
                <a href="#" className="hover:text-white transition-colors">About</a>
            </div>
            <div className="flex flex-col gap-4">
                <span className="text-white font-bold">Legal</span>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
             <div className="flex flex-col gap-4">
                <span className="text-white font-bold">Socials</span>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-xs text-gray-600 text-center">
            © 2024 Cliento Agency Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;