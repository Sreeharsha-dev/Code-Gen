import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CodeCrafter</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Home
            </Link>
            <Link to="/editor" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Editor
            </Link>
            <Button variant="primary" size="sm">
              Sign In
            </Button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/editor"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Editor
            </Link>
            <div className="px-3 py-2">
              <Button variant="primary" size="sm" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}