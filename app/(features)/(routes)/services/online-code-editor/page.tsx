import React from 'react';
import Link from 'next/link';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';
import { compilers } from '@/data/Compilers';

export default function OnlineCodeEditorPage() {
    return (
        <section className="relative w-full h-auto flex items-center bg-white pt-[70px] md:pt-[98px] min-h-screen">
            <div className="max-w-7xl mx-auto px-5 py-16 w-full z-10">
                <div className="text-center mb-12">
                    <Heading className="text-black">
                        Choose Your Compiler
                    </Heading>
                    <Text className="max-w-2xl mx-auto">
                        Select a language or framework below to start coding instantly in your browser.
                    </Text>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                    {compilers.map((compiler) => {
                        const Icon = compiler.icon;
                        return (
                            <div
                                key={compiler.slug}
                                className="group"
                            >
                                <div
                                    className="overflow-hidden relative w-56 h-64 bg-gray-100 rounded-2xl flex flex-col justify-end items-center gap-2 pb-8 transition-colors duration-300 group-hover:bg-[var(--lang-light-color)]"
                                    style={{
                                        '--lang-color': compiler.color,
                                        '--lang-light-color': compiler.lightColor,
                                    } as React.CSSProperties}
                                >
                                    <Icon className="absolute top-8 text-7xl text-gray-300 transition-colors duration-300 group-hover:text-[var(--lang-color)]" />

                                    <svg className="absolute opacity-30 -rotate-12 -bottom-12 -right-12 w-40 h-40 stroke-gray-300 transition-colors duration-300 group-hover:stroke-[var(--lang-color)]" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                                        <path d="M65.8,46.1V30.3a15.8,15.8,0,1,0-31.6,0V46.1M22.4,38.2H77.6l4,47.3H18.4Z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
                                    </svg>

                                    <div className="flex flex-col items-center z-10">
                                        <Heading variant='small' className='text-gray-800'>{compiler.name}</Heading>
                                        <Text
                                            variant='small'
                                            className="text-gray-500 inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 after:transition-colors after:duration-300 group-hover:after:bg-[var(--lang-color)] before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5 before:transition-colors before:duration-300 group-hover:before:bg-[var(--lang-color)]"
                                        >
                                            Online Editor
                                        </Text>
                                    </div>

                                    <div className='flex flex-col gap-0 justify-center items-center mt-4'>
                                        <Link
                                            href={`/services/online-code-editor/${compiler.slug}/info`}
                                            className="cursor-pointer z-10 px-4 py-2 underline text-gray-600 font-semibold group-hover:text-[var(--lang-color)] rounded-md transition-all"
                                        >
                                            Docs
                                        </Link>
                                        <Link
                                            href={`/services/online-code-editor/${compiler.slug}`}
                                            className="cursor-pointer z-10 px-4 py-2 bg-gray-300 text-gray-800 font-semibold group-hover:bg-[var(--lang-color)] group-hover:text-white rounded-md transition-all"
                                        >
                                            Start Coding
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}