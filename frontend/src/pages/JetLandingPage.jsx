import React from 'react';

export default function JetLandingPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-x-hidden font-inter bg-gray-50 py-24 md:py-32">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4" type="video/mp4" />
      </video>

      {/* Content wrapper */}
      <div className="relative flex-1 flex flex-col justify-center z-10 max-w-7xl mx-auto w-full">
        {/* Hero Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <span className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">
            AI-Powered Career Acceleration
          </span>
          
          <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
              Dream Job.
            </h1>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter z-10" style={{ color: '#202A36', marginTop: '-12px' }}>
              On Autopilot.
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mt-6">
            The intelligent platform that enhances your resume, matches you with perfect opportunities, and lands your dream job.
          </p>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.location.href='/jobs'}
              className="px-6 py-3 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors cursor-pointer"
            >
              Explore Jobs
            </button>
            <button 
              onClick={() => window.location.href='/register'}
              className="px-6 py-3 rounded-full text-white font-medium transition-colors cursor-pointer" 
              style={{ backgroundColor: '#202A36' }} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1a2229'} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#202A36'}
            >
              Get Started Free
            </button>
          </div>
        </main>
      </div>
    </section>
  );
}
