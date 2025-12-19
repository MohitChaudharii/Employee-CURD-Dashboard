import React from 'react'

const NoMatch = () => {
  return (
    <>
    <div className="flex min-h-screen flex-col items-center justify-center  px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        {/* Big Impact Number in Brand Color */}
        <p className="text-8xl font-bold text-indigo-500">404</p>
        
        {/* Main Text in White */}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Not Found Page
        </h1>
        
        {/* Subtle Back Link (Essential for UX) */}
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span aria-hidden="true">&larr;</span> Back to Home
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default NoMatch;
