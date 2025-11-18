import React from 'react';
import Link from 'next/link';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';
import {
  FaPython,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaTerminal,
} from 'react-icons/fa';
import { SiC, SiCplusplus, SiJavascript, SiTypescript, SiGo, SiRuby } from 'react-icons/si';

// Define the list of available compilers/editors
const compilers = [
  { name: 'Python', slug: 'python', icon: FaPython },
  { name: 'R', slug: 'r', icon: FaTerminal },
  { name: 'SQL', slug: 'sql', icon: FaDatabase },
  { name: 'HTML', slug: 'html', icon: FaHtml5 },
  { name: 'Java', slug: 'java', icon: FaJava },
  { name: 'C', slug: 'c', icon: SiC },
  { name: 'C++', slug: 'cpp', icon: SiCplusplus },
  { name: 'C#', slug: 'csharp', icon: SiC }, // Using SiC as a placeholder
  { name: 'JavaScript', slug: 'javascript', icon: SiJavascript },
  { name: 'TypeScript', slug: 'typescript', icon: SiTypescript },
  { name: 'Go', slug: 'go', icon: SiGo },
  { name: 'Ruby', slug: 'ruby', icon: SiRuby },
];

export default function OnlineCodeEditorPage() {
    return (
        <section className="relative w-full h-auto flex items-center bg-white pt-[70px] md:pt-[98px] min-h-screen">
            <div className="max-w-7xl mx-auto px-5 py-16 w-full z-10">
                <div className="text-center mb-12">
                    <Heading className="text-black" variant="medium">
                        Choose Your Compiler
                    </Heading>
                    <Text className="max-w-2xl mx-auto">
                        Select a language or framework below to start coding instantly in your browser.
                    </Text>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {compilers.map((compiler) => {
                        const Icon = compiler.icon;
                        return (
                            <Link 
                                href={`/services/online-code-editor/${compiler.slug}`} 
                                key={compiler.slug}
                                className="group"
                            >
                                <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1">
                                    <Icon className="w-12 h-12 text-gray-700 transition-colors group-hover:text-blue-600" />
                                    <span className="mt-4 font-semibold text-gray-800 text-center">
                                        {compiler.name}
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}