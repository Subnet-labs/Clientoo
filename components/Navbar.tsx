import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
        {/* Logo */}
        <div className="flex items-center gap-2 z-50">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <span className="font-serif font-bold italic text-lg">C</span>
          </div>
          <span className="font-serif font-bold text-2xl tracking-tight text-textMain">Cliento</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-gray-200/50">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-textMuted hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium hover:text-primary">Login</a>
          <Button variant="primary" className="!px-5 !py-2.5 !text-xs !rounded-md">Get Early Access</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-textMain p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center p-6">
          <div className="flex flex-col gap-6 text-center w-full max-w-sm">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-2xl font-serif font-medium text-textMain hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="h-px bg-gray-100 w-full my-4"></div>
            <Button variant="primary" className="w-full justify-center">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;