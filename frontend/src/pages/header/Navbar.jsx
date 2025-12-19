import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* LEFT SIDE: Company Name */}
          <div className="flex flex-shrink-0 items-center">
            <span className="text-2xl font-bold tracking-tight text-white">
              Employee <span className="text-indigo-500">Listti</span>
            </span>
          </div>

          {/* RIGHT SIDE: Links */}
          <div className="flex items-center space-x-6">
            
            {/* Link 1: Standard Text Link */}
            <a 
              href="/employee" 
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
            >
              Employee
            </a>

            {/* Link 2: Primary Action (Styled as a button for better UX) */}
            <a 
              href="/post-employee" 
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
            >
              Post Employee
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;