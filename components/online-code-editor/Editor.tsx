"use client";

import React from 'react';
import { FiMaximize, FiMoon, FiShare2, FiMinimize } from 'react-icons/fi'; // Import FiMinimize
import Editor from '@monaco-editor/react';
import Button from '../shared/Button';
import { BsWindowSidebar } from 'react-icons/bs';
import Tooltip from '../shared/Tooltip';
import { useSidebar } from '../contexts/SidebarContext';
import { useFullScreen } from '../contexts/FullScreenContext';
import { AiFillLock } from 'react-icons/ai';

const languageConfig: { [key: string]: { monaco: string; boilerplate: string; fileName: string } } = {
  // python: { monaco: 'python', boilerplate: 'print("Hello, World!")', fileName: 'main.py' },
  c: { monaco: 'c', boilerplate: '#include <stdio.h>\n\nint main() {\n   printf("Hello, World!");\n   return 0;\n}', fileName: 'main.c' },
  // javascript: { monaco: 'javascript', boilerplate: 'console.log("Hello, World!");', fileName: 'script.js' },
};

interface CodeEditorProps {
  languageSlug: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ languageSlug }) => {
  const currentLanguage = languageConfig[languageSlug] || languageConfig.c;
  const { toggleSidebar } = useSidebar();
  const { handle } = useFullScreen();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden h-full">
      <div className="flex justify-between items-center p-2 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center">
          <Tooltip content="Toggle Sidebar" placement="right">
            <Button
              variant='ghost'
              onClick={toggleSidebar}
              className='py-1.5 px-2 hover:bg-gray-200 text-gray-600 gap-1'
            >
              <BsWindowSidebar />
            </Button>
          </Tooltip>
          <Button className='py-1.5 bg-white border border-gray-200 cursor-default' variant='outline'>
            {currentLanguage.fileName}
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          {/* Update the fullscreen button to be a toggle */}
          <Tooltip content={handle.active ? "Exit Fullscreen" : "Enter Fullscreen"} placement="bottom">
            <Button
              className='p-2 hover:bg-gray-200 text-gray-600'
              variant='ghost'
              // Conditionally call enter() or exit() based on the active state
              onClick={handle.active ? handle.exit : handle.enter}
            >
              {/* Conditionally render the icon */}
              {handle.active ? <FiMinimize size={16} /> : <FiMaximize size={16} />}
            </Button>
          </Tooltip>
          <Tooltip content="Toggle Theme" placement="bottom">
            <Button className='p-2 hover:bg-gray-200 text-gray-600 relative cursor-not-allowed' variant='ghost'>
              <AiFillLock className="text-gray-400 absolute -top-1 -right-1 z-[9999]" />
              <FiMoon size={16} />
            </Button>
          </Tooltip>
          <Tooltip content="Share Code" placement="bottom">
            <Button className='py-1.5 px-2 hover:bg-gray-200 text-gray-600 gap-1 relative cursor-not-allowed' variant='ghost'>
              <AiFillLock className="text-gray-400 absolute -top-1 -right-1 z-[9999]" />
              <FiShare2 size={16} />
              <span className="text-sm hidden lg:inline">Share</span>
            </Button>
          </Tooltip>
          <Tooltip content="Run Code" placement="bottom">
            <Button className='py-1.5'>
              Run
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="flex-grow">
        <Editor
          key={languageSlug}
          height="100%"
          language={currentLanguage.monaco}
          defaultValue={currentLanguage.boilerplate}
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;