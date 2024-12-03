import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">CodeCrafter</h3>
            <p className="text-gray-600 mb-4">
              Transform your ideas into production-ready code with our AI-powered platform.
              Write better code, faster than ever before.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">API</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} CodeCrafter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}