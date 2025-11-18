import React from 'react';
import Image from 'next/image';

const AdBanner = () => {
  return (
    <aside className="w-64 bg-blue-50 p-6 rounded-lg shadow-sm hidden lg:flex flex-col">
      <div className="flex items-center space-x-2 mb-4">
         <Image src="/programiz-logo.svg" alt="Programiz Logo" width={100} height={24} />
         <span className="text-purple-600 font-bold border border-purple-400 px-2 py-0.5 rounded text-sm">PRO</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Premium Courses by Programiz
      </h3>
      
      <button className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition-colors mt-4">
        Learn More
      </button>

      <div className="flex-grow flex items-end justify-center mt-8">
        <Image 
          src="/student-illustration.svg" 
          alt="Student Illustration"
          width={180}
          height={140}
        />
      </div>
    </aside>
  );
};

export default AdBanner;