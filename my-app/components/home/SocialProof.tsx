"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaQuoteLeft } from 'react-icons/fa';
import { GiRamProfile } from 'react-icons/gi';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { testimonials, companyLogos } from '@/contexts/Home';
import Heading from '../shared/Heading';
import Text from '../shared/Text';
import { Navigation } from 'swiper/modules';

const SocialProof = () => {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Heading className="text-black" variant="medium">
            Loved By Developers Worldwide
          </Heading>
          <Text>
            Don&apos;t just take our word for it. Here&apos;s what developers are saying.
          </Text>
        </div>

        {/* Testimonial Carousel */}
        <div className="mt-16 relative">
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            className="overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex-[0_0_auto]">
                <div className="relative h-full bg-white p-8 rounded-2xl shadow-lg border border-gray-200/80 flex flex-col">
                  <FaQuoteLeft className="absolute top-6 left-8 text-5xl text-gray-100 -z-0" />
                  <p className="relative z-10 text-gray-700 italic flex-grow">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-6 flex items-center gap-4 pt-6 border-t border-gray-200">
                    <GiRamProfile className="w-16 h-16 rounded-full shadow-md" />
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              className="prev-btn w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              className="next-btn w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-24 text-center">
          <Text className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Trusted by high-performing teams at
          </Text>
          <div className="mt-6 flex justify-center items-center flex-wrap gap-x-12 gap-y-6">
            {companyLogos.map(({ name, Icon }) => (
              <Icon
                key={name}
                className="h-8 text-gray-400 grayscale hover:grayscale-0 hover:text-gray-600 transition-all"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
