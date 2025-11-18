import React from 'react';
import Image from 'next/image';
import Logo from '../shared/Logo';
import Button from '../shared/Button';
import Heading from '../shared/Heading';

const AdBanner = () => {
  return (
    <aside className="w-64 h-full bg-blue-50 p-6 rounded-lg shadow-sm hidden lg:flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2 mb-4">
          <Logo />
          <Button variant='outline' className='px-5 py-0.5'>PRO</Button>
        </div>
        <Heading variant='small' className='text-gray-600'>
          Premium Courses by Programiz
        </Heading>
        <Button>Learn More</Button>
      </div>

      <div className="h-full flex items-end justify-center mt-8">
        <Image
          src="/images/student-illustration.png"
          alt="Student Illustration"
          width={180}
          height={140}
        />
      </div>
    </aside>
  );
};

export default AdBanner;