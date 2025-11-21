"use client";

import React from 'react';
import { ourValuesContent } from '@/data/Values';
import Heading from './Heading';
import Text from './Text';
import Button from './Button';

const ValuesModal = () => {
  return (
    <div className="w-full max-w-4xl mx-auto h-full overflow-y-auto p-2 md:p-6 custom-scrollbar">
      
      <div className="text-center mb-12 border-b pb-8 border-gray-100">
        <Heading className="text-gray-900 mb-4" variant="default">
          Our Values & Mission
        </Heading>
        <Text className="text-lg text-gray-500 max-w-2xl mx-auto">
          We are building the tools we wish we had. Here is what drives us forward every single day.
        </Text>
      </div>

      <div className="space-y-20">
        {ourValuesContent.map((section) => (
          <section key={section.id} className="flex flex-col gap-8">
            
            {/* Section Header */}
            <div className="flex flex-col gap-4">
              <Heading variant="medium" className="text-gray-900 relative pl-4 border-l-4 border-blue-600">
                {section.heading}
              </Heading>
              <Text className="text-lg text-gray-600 leading-relaxed">
                {section.intro}
              </Text>
            </div>

            {/* Optional Image */}
            {section.image && (
              <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                {/* Placeholder for actual image - remove grayscale/blur when real images are added */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                   {/* <Image src={section.image.src} alt={section.image.alt} fill className="object-cover" /> */}
                   <span className='italic'>Image Placeholder: {section.image.alt}</span>
                </div>
              </div>
            )}

            {/* Subsections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {section.subSections.map((sub, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h3 className="font-peachi text-xl font-semibold text-gray-800">
                    {sub.subHeading}
                  </h3>
                  <Text className="text-gray-600 text-base leading-relaxed">
                    {sub.content}
                  </Text>
                  
                  {/* Bullet Points */}
                  {sub.bulletPoints && (
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      {sub.bulletPoints.map((point, i) => (
                        <li key={i} className="text-gray-500 text-sm font-poppins leading-snug">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            {section.buttons && section.buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-4">
                {section.buttons.map((btn, i) => (
                  <Button 
                    key={i} 
                    variant={btn.variant || 'default'} 
                    href={btn.url.startsWith('http') ? undefined : btn.url} // Use href for internal, onClick/a for external if needed
                    onClick={btn.url.startsWith('http') ? () => window.open(btn.url, '_blank') : undefined}
                    className='text-sm px-6 py-2.5'
                  >
                    {btn.text}
                  </Button>
                ))}
              </div>
            )}

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 mt-8" />
          </section>
        ))}
      </div>

      {/* Footer of Modal */}
      <div className="mt-16 text-center p-8 bg-gray-50 rounded-2xl">
        <Heading variant="small" className="mb-4">Ready to code faster?</Heading>
        <Button variant="black">Get Started Now</Button>
      </div>
    </div>
  );
};

export default ValuesModal;