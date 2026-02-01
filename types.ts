import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  stats: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}