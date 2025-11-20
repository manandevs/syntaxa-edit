import React from 'react';
import Image from 'next/image';
import Logo from '../shared/Logo';
import Button from '../shared/Button';
import Heading from '../shared/Heading';
import Disable from '../shared/Disable';

const AdBanner = () => {
  return (
    <aside className="w-64 h-full bg-blue-50 p-6 shadow-sm hidden lg:flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2 mb-4">
          <Logo />
          <Disable>
            <Button variant='outline' className='px-5 py-0.5'>PRO</Button>
          </Disable>
        </div>
        <Heading variant='small' className='text-gray-600'>
          Premium Courses by Programiz
        </Heading>
        <Disable>
          <Button className='w-full'>Learn More</Button>
        </Disable>
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