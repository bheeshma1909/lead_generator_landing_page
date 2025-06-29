import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-base-200 pt-section pb-8">
      <div className="container mx-auto max-w-container px-gutter">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <img 
                src="/Screenshot_2025-06-17_at_3.49.01_PM.png" 
                alt="Leadgenerator.io Logo" 
                className="h-8 w-auto mr-2" 
              />
              <span className="text-text-light text-xl font-bold">
                Leadgenerator.io
              </span>
            </div>
            <p className="text-text-light/70 max-w-md mb-6 leading-relaxed">
              AI-powered sales automation for modern businesses. Generate leads
              24/7/365 without human intervention.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-text-light font-semibold mb-4">PRODUCT</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-text-light font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-text-light font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-text-light/70 hover:text-accent-teal transition-colors text-sm">
                    Opt-Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-base-300 pt-8">
          <p className="text-text-light/60 text-center text-sm">
            2025 Leadgenerator.io. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};