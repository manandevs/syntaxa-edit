import AdBanner from '@/components/online-code-editor/AdBanner'
import Editor from '@/components/online-code-editor/Editor'
import Sidebar from '@/components/online-code-editor/Sidebar'
import React from 'react'

const page = () => {
    return (
        <section className="relative w-full h-auto flex items-center bg-white pt-[70px] md:pt-[98px]">
            <div className="w-full z-10">
                <div className="flex flex-col h-screen font-sans">
                    <div className="flex flex-1 overflow-hidden">
                        <Sidebar />
                        <main className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 overflow-auto">
                            <div className="flex flex-col min-h-[600px]">
                                <Editor />

                                {/* Output Panel Placeholder */}
                                <div className="mt-4 bg-white rounded-lg shadow-sm border border-gray-200">
                                    <div className="p-2 border-b flex justify-between items-center bg-gray-50">
                                        <h2 className="font-semibold text-sm">Output</h2>
                                        <button className="text-sm text-gray-600 hover:text-gray-800 px-3 py-1 border rounded-md">
                                            Clear
                                        </button>
                                    </div>
                                    <div className="p-4 font-mono text-sm text-gray-500 h-32">
                                        {/* Output content will go here */}
                                    </div>
                                </div>
                            </div>
                            <AdBanner />
                        </main>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page