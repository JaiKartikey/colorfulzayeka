
import React from 'react';
import { Link } from 'react-router-dom';

const ModernFooter = () => {
  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-5 lg:px-7">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-3">
            <Link to="/" className="block">
              <img
                className="h-9 w-auto filter drop-shadow-lg"
                src="index-cz-transparent.png"
                alt="Colorful Zaaika"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Where culinary artistry meets creative expression
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Culinary</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/veg" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">
                  Vegetarian
                </Link>
              </li>
              <li>
                <Link to="/sweets" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">
                  Sweets
                </Link>
              </li>
              <li>
                <Link to="/nonveg" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">
                  Non-Vegetarian
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Gallery</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gallery/watercolor" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">
                  Watercolors
                </Link>
              </li>
              <li>
                <Link to="/gallery/pencil" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">
                  Pencil Art
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Colorful Zaaika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
