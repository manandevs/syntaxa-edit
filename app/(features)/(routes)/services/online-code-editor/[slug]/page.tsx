"use client";

import { SidebarProvider } from '@/components/contexts/SidebarContext';
import AdBanner from '@/components/online-code-editor/AdBanner';
import CodeEditor from '@/components/online-code-editor/Editor';
import Sidebar from '@/components/online-code-editor/Sidebar';
import Button from '@/components/shared/Button';
import Heading from '@/components/shared/Heading';
import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
    const params = useParams();
    const slug = params?.slug as string;

    return (
        <SidebarProvider>
            <section className="relative w-full h-auto flex items-center bg-white pt-[70px] md:pt-[98px]">
                <div className="w-full z-10">
                    <div className="flex flex-col h-screen font-sans">
                        <div className="flex flex-1 overflow-hidden">
                            <Sidebar activeSlug={slug} />
                            <main className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] overflow-auto">
                                <CodeEditor languageSlug={slug} />
                                {/* Output Panel Placeholder */}
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 resize-x">
                                    <div className="p-2 border-b flex justify-between items-center bg-gray-50">
                                        <Heading className='text-gray-500' variant='small'>Output</Heading>
                                        <Button className='py-1.5 bg-white border border-gray-200' variant='outline'>
                                            Clear
                                        </Button>
                                    </div>
                                    <div className="p-4 font-mono text-sm text-gray-500 h-32">
                                        {/* Output content will go here */}
                                    </div>
                                </div>
                                <AdBanner />
                            </main>
                        </div>
                    </div>
                </div>
            </section>
        </SidebarProvider>
    );
};

export default Page;