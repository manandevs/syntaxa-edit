import React from 'react';
import { FiMaximize, FiMoon, FiShare2 } from 'react-icons/fi';

const CodeLine = ({ num, children }: { num: number; children: React.ReactNode }) => (
  <div>
    <span className="text-right text-gray-400 pr-4 select-none w-10 inline-block">{num}</span>
    {children}
  </div>
);

const Editor = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden h-full resize-x">
      {/* Editor Toolbar */}
      <div className="flex justify-between items-center p-2 border-b border-gray-200 bg-gray-50">
        <div className="px-3 py-1 bg-white border border-gray-200 rounded-t-md text-sm">
          main.c
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600">
            <FiMaximize size={16} />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-200 text-gray-600">
            <FiMoon size={16} />
          </button>
          <button className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-200 text-gray-600">
            <FiShare2 size={16} />
            <span className="text-sm hidden lg:inline">Share</span>
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-blue-700">
            Run
          </button>
        </div>
      </div>
      
      {/* Code Area */}
      <div className="flex-grow p-4 font-mono text-sm leading-relaxed overflow-auto">
        <CodeLine num={1}>
          <span className="text-green-600">{`// Online C compiler to run C program online`}</span>
        </CodeLine>
        <CodeLine num={2}>
          <span className="text-purple-600">#include</span>
          <span className="text-red-500">{` <stdio.h>`}</span>
        </CodeLine>
        <CodeLine num={3}>&nbsp;</CodeLine>
        <CodeLine num={4}>
          <span className="text-blue-600">int</span>
          <span>{` main() {`}</span>
        </CodeLine>
        <div className="pl-10">
            <CodeLine num={5}>
              <span className="text-green-600">{`// Write C code here`}</span>
            </CodeLine>
            <div className="bg-gray-100 border-l-2 border-blue-500 -ml-10 pl-10">
                 <CodeLine num={6}>
                  <span className="text-blue-600">printf</span>
                  <span>(</span>
                  <span className="text-yellow-600">{`"Try programiz.pro"`}</span>
                  <span>);</span>
                </CodeLine>
            </div>
            <CodeLine num={7}>&nbsp;</CodeLine>
            <CodeLine num={8}>
              <span className="text-purple-600">return</span>
              <span> 0;</span>
            </CodeLine>
        </div>
        <CodeLine num={9}>
          <span>{`}`}</span>
        </CodeLine>
      </div>
    </div>
  );
};

export default Editor;