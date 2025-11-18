"use client";

import React from 'react';
import { FiMaximize, FiMoon, FiShare2 } from 'react-icons/fi';
import Editor from '@monaco-editor/react';
import Button from '../shared/Button';
import { BsWindowSidebar } from 'react-icons/bs';
import Tooltip from '../shared/Tooltip';
import { useSidebar } from '../contexts/SidebarContext';

const languageConfig: { [key: string]: { monaco: string; boilerplate: string; fileName: string } } = {
  python: { monaco: 'python', boilerplate: 'print("Hello, World!")', fileName: 'main.py' },
  c: { monaco: 'c', boilerplate: '#include <stdio.h>\n\nint main() {\n   printf("Hello, World!");\n   return 0;\n}', fileName: 'main.c' },
  javascript: { monaco: 'javascript', boilerplate: 'console.log("Hello, World!");', fileName: 'script.js' },
};

interface CodeEditorProps {
  languageSlug: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ languageSlug }) => {
  const currentLanguage = languageConfig[languageSlug] || languageConfig.c;
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden h-full">
      <div className="flex justify-between items-center p-2 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center">
          {/* Correct Usage: Tooltip wraps the Button */}
          <Tooltip content="Toggle Sidebar" placement="right">
            <Button
              onClick={toggleSidebar}
              className='p-2 mr-2 hover:bg-gray-200 text-gray-600'
              variant='ghost'
            >
              <BsWindowSidebar />
            </Button>
          </Tooltip>

          <Button className='py-1.5 bg-white border border-gray-200 cursor-default' variant='outline'>
            {currentLanguage.fileName}
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Tooltip content="Fullscreen" placement="bottom">
            <Button className='p-2 hover:bg-gray-200 text-gray-600' variant='ghost'>
              <FiMaximize size={16} />
            </Button>
          </Tooltip>
          <Tooltip content="Toggle Theme" placement="bottom">
            <Button className='p-2 hover:bg-gray-200 text-gray-600' variant='ghost'>
              <FiMoon size={16} />
            </Button>
          </Tooltip>
          <Tooltip content="Share Code" placement="bottom">
            <Button className='py-1.5 px-2 hover:bg-gray-200 text-gray-600 gap-1' variant='ghost'>
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