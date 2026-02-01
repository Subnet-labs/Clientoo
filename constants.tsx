import { NavItem, Stat, Service, Project, Testimonial } from './types';
import { Layout, MousePointerClick, Zap, BarChart3, Globe, PenTool, Layers, ArrowUpRight } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'Methodology', href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'Resources', href: '#resources' },
];

export const STATS: Stat[] = [
  { label: 'Client Revenue', value: '$120M+', description: 'Generated in 2024' },
  { label: 'Conversion Lift', value: '3.2x', description: 'Average ROI increase' },
  { label: 'Awards Won', value: '40+', description: 'Design excellence' },
];

export const SERVICES: Service[] = [
  { 
    title: 'Strategic UX/UI', 
    description: 'We design interfaces that guide users effortlessly toward the purchase button.',
    icon: Layout 
  },
  { 
    title: 'Conversion Engineering', 
    description: 'Every pixel is optimized for performance. Speed equals revenue.',
    icon: Zap 
  },
  { 
    title: 'Visual Storytelling', 
    description: 'We weave your brand narrative into a visual language that sticks.',
    icon: PenTool 
  },
  { 
    title: 'Full-Stack Development', 
    description: 'Pixel-perfect implementation using modern frameworks and headless CMS.',
    icon: Layers 
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Radiant',
    category: 'E-Commerce Redesign',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    stats: '+240% Sales'
  },
  {
    id: '2',
    title: 'Apex Financial',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    stats: '2x User Retention'
  },
  {
    id: '3',
    title: 'Lumina Health',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop',
    stats: '4.9 App Store Rating'
  },
  {
    id: '4',
    title: 'Velvet',
    category: 'Luxury Fashion',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    stats: '+85% AOV'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "They didn't just redesign our site; they completely reimagined how we talk to our customers. The results were immediate.",
    author: "Alex Kim",
    role: "Marketing Director",
    company: "Radiant",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The cleanest workflow I've ever experienced with an agency. They treat your budget like it's their own money.",
    author: "Sarah Jenkins",
    role: "Founder",
    company: "Apex",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
];
