"use client";

import { useState } from 'react';
import { FiCheck, FiInfo } from 'react-icons/fi';
import { HiShieldCheck } from 'react-icons/hi2';
import Heading from '../shared/Heading';
import Text from '../shared/Text';
import Button from '../shared/Button';
import { pricingData, enterpriseFeatures } from '@/data/Pricing'; // Import from data

export const PricingTeaser = () => {
   const [isAnnual, setIsAnnual] = useState(true);

   return (
      <section className="bg-[#FDFCF9] relative">
                  <div className="absolute bg-[#9CE015] size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[1] bottom-[-150px] right-[-150px]"></div>
         <div className="absolute bg-[#7558FC] size-[200px] lg:size-[320px] blur-[200px] md:blur-[300px] z-[1] top-[50px] left-[-150px]"></div>

         <div className="mx-auto max-w-[1375px] px-6 py-20 sm:py-28 xl:px-8">

            {/* Heading */}
            <div className="mx-auto max-w-4xl text-center xl:text-left">
               <Heading className='text-black' variant='medium'>
                  Find the plan that fits your ambition.
               </Heading>

               <div className="flex items-center justify-center xl:justify-start gap-6">
                  <span
                     onClick={() => setIsAnnual(true)}
                     className={`cursor-pointer text-base font-medium transition-colors ${isAnnual ? 'text-[#1F1F1F] underline decoration-2 underline-offset-[6px]' : 'text-[#A8A8A8]'}`}
                  >
                     Billed annually (Save 25%)
                  </span>
                  <span
                     onClick={() => setIsAnnual(false)}
                     className={`cursor-pointer text-base font-medium transition-colors ${!isAnnual ? 'text-[#1F1F1F] underline decoration-2 underline-offset-[6px]' : 'text-[#A8A8A8]'}`}
                  >
                     Billed monthly
                  </span>
               </div>
            </div>

            {/* Pricing Cards */}
            <div className="mx-auto mt-12 flex max-w-4xl flex-col xl:max-w-none xl:flex-row xl:items-start xl:gap-6">
               <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-3">

                  {pricingData.map((card) => (
                     <div key={card.title} className="flex w-full flex-col overflow-hidden rounded-xl border border-black/10 md:flex-row xl:flex-col">

                        {/* Top */}
                        <div className="flex flex-1 flex-col justify-between bg-white p-8 md:w-1/2 xl:w-full">
                           <div>
                              <Heading className='text-black' variant='small'>
                                 {card.title}
                              </Heading>

                              <Text className="text-gray-600">
                                 {card.description}
                              </Text>
                           </div>

                           <div className="mt-8">
                              <div className="flex items-start gap-1">
                                 <Heading className='text-black' variant='medium'>
                                    {isAnnual ? card.price.annual : card.price.monthly}
                                 </Heading>

                                 <Text className="pt-2 text-sm text-neutral-600">
                                    {card.title !== 'Starter' && '/ seat/mo'}
                                 </Text>
                              </div>

                              <Text className="text-sm text-neutral-600 h-4">
                                 {card.title !== 'Starter' && isAnnual && 'billed annually'}
                              </Text>

                              <div className="mt-6 flex flex-col items-center gap-4">
                                 <Button variant='black' className='text-nowrap'>
                                    {card.title === 'Starter' ? 'Get Started' : 'Start 14-day trial'}
                                 </Button>

                                 {card.showDemoButton && (
                                    <Button variant='ghost' className='text-nowrap'>
                                       Book a Demo
                                    </Button>
                                 )}
                              </div>
                           </div>
                        </div>

                        {/* Bottom */}
                        <div className="border-black/10 bg-[#FCFBF8] p-8 md:w-1/2 md:border-l xl:w-full xl:border-l-0 xl:border-t">
                           <Text className="text-xs font-semibold uppercase tracking-wider text-neutral-800">
                              {card.featuresTitle}
                           </Text>

                           <ul className="mt-4 flex flex-col gap-3">
                              {card.features.map((feature) => (
                                 <li key={feature} className="flex items-start gap-2">
                                    <FiCheck className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-[#17100E]" strokeWidth="3" />

                                    <Text className="text-sm leading-snug text-neutral-600">
                                       {feature}
                                    </Text>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>

               {/* Enterprise Card */}
               <div className="mt-8 w-full xl:mt-0 xl:max-w-xs">
                  <div className="flex h-full flex-col rounded-xl border border-black/10 bg-[#F4F3EC]">
                     <div className="flex flex-1 flex-col justify-between p-8">

                        <div>
                           <Heading variant="small" className="mb-2 text-black">
                              Enterprise
                           </Heading>

                           <Text className="text-sm leading-relaxed text-neutral-600">
                              For large organizations with custom security, deployment, and support needs.
                           </Text>
                        </div>

                        <div className="mt-8">
                           <Text className="text-xl font-semibold text-black">
                              Custom Pricing
                           </Text>

                           <div className="mt-6 flex h-9 items-center">
                              <Button variant='outline' className='ml-4 text-nowrap'>
                                 Contact Sales
                              </Button>
                           </div>

                           <div className="mt-8 border-t border-black/10 pt-6">
                              <Text className="text-xs font-semibold uppercase tracking-wider text-neutral-800">
                                 Everything in Team, plus
                              </Text>

                              <ul className="mt-4 flex flex-col gap-3">
                                 {enterpriseFeatures.map(feature => (
                                    <li key={feature} className="flex items-start gap-2">
                                       <FiCheck className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-[#17100E]" strokeWidth="3" />
                                       <Text className="text-sm leading-snug text-neutral-600">
                                          {feature}
                                       </Text>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>

            {/* Guarantee Section */}
            <div className="mx-auto mt-16 max-w-4xl text-center">

               <button className="group inline-flex items-center gap-2">
                  <HiShieldCheck className="h-6 w-6 text-[#17100E] transition-colors group-hover:text-blue-600" />

                  <Text className="text-xl font-bold text-[#17100E] transition-colors group-hover:text-blue-600">
                     30-Day Money-Back Guarantee
                  </Text>

                  <FiInfo className="h-4 w-4 text-neutral-400" />
               </button>

               <Text className="mt-4 text-center text-base leading-relaxed text-neutral-600">
                  All plans include cross-platform support on macOS, Windows, and Linux, with regular updates and community access.
               </Text>

               <div className="mt-6 flex flex-row items-center justify-center gap-6">
                  <div className="mt-6 flex flex-row items-center justify-center gap-6">
                     <Button
                        variant="ghost"
                        className="font-semibold text-black underline underline-offset-4 hover:text-blue-600 shadow-none px-0 py-0"
                     >
                        View all features
                     </Button>

                     <Button
                        variant="ghost"
                        className="font-semibold text-black underline underline-offset-4 hover:text-blue-600 shadow-none px-0 py-0"
                     >
                        Compare plans
                     </Button>
                  </div>
               </div>

            </div>

         </div>
      </section>
   );
};