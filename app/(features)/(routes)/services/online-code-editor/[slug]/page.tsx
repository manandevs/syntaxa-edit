"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/shared/Resizable';
import { SidebarProvider } from '@/components/contexts/SidebarContext';
import AdBanner from '@/components/online-code-editor/AdBanner';
import CodeEditor from '@/components/online-code-editor/Editor';
import Sidebar from '@/components/online-code-editor/Sidebar';
import Button from '@/components/shared/Button';
import Text from '@/components/shared/Text';

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
                            <main className="flex flex-1 overflow-auto">
                                <ResizablePanelGroup direction="horizontal" className="flex-1 rounded-lg">
                                    <ResizablePanel defaultSize={60} minSize={30} className="flex flex-col">
                                        {/* Pass the handle from context down to the editor */}
                                        <CodeEditor languageSlug={slug} />
                                    </ResizablePanel>

                                    <ResizableHandle className="w-2 bg-gray-100 hover:bg-blue-500 transition-colors cursor-col-resize" />

                                    <ResizablePanel defaultSize={40} minSize={20} className="flex flex-col bg-white shadow-sm border border-gray-200">
                                        <div className="p-2 border-b flex justify-between items-center bg-gray-50">
                                            <Text variant="small" className="font-semibold text-gray-700">Output</Text>
                                            <Button className='py-1 text-sm' variant='outline'>
                                                Clear
                                            </Button>
                                        </div>
                                        <div className="p-4 font-mono text-sm text-gray-500 flex-grow overflow-auto">
                                            {/* Output content will go here */}
                                        </div>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
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