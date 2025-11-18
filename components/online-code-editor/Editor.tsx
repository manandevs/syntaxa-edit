"use client";

import React from 'react'; // Removed useState and useEffect
import { FiMaximize, FiMoon, FiShare2 } from 'react-icons/fi';
import Editor from '@monaco-editor/react';
import Button from '../shared/Button';

// Language configuration mapping remains the same
const languageConfig: { [key: string]: { monaco: string; boilerplate: string; fileName: string } } = {
  python: { monaco: 'python', boilerplate: 'print("Hello, World!")', fileName: 'main.py' },
  c: { monaco: 'c', boilerplate: '#include <stdio.h>\n\nint main() {\n   printf("Hello, World!");\n   return 0;\n}', fileName: 'main.c' },
  javascript: { monaco: 'javascript', boilerplate: 'console.log("Hello, World!");', fileName: 'script.js' },
};

interface CodeEditorProps {
  languageSlug: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ languageSlug }) => {
  // We no longer need the 'code' or 'editorKey' states.
  const currentLanguage = languageConfig[languageSlug] || languageConfig.c; // Fallback to 'c'

  // The useEffect hook is no longer needed.

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden h-full">
      {/* Editor Toolbar */}
      <div className="flex justify-between items-center p-2 border-b border-gray-200 bg-gray-50">
        <Button className='py-1.5 bg-white border border-gray-200' variant='outline'>
          {currentLanguage.fileName}
        </Button>
        <div className="flex items-center space-x-2">
          <Button className='py-1.5 px-1.5 hover:bg-gray-200 text-gray-600' variant='ghost'>
            <FiMaximize size={16} />
          </Button>
          <Button className='py-1.5 px-1.5 hover:bg-gray-200 text-gray-600' variant='ghost'>
            <FiMoon size={16} />
          </Button>
          <Button className='py-1.5 px-1.5 hover:bg-gray-200 text-gray-600 gap-1' variant='ghost'>
            <FiShare2 size={16} />
            <span className="text-sm hidden lg:inline">Share</span>
          </Button>
          <Button className='py-1.5'>
            Run
          </Button>
        </div>
      </div>

      {/* Monaco Editor Area */}
      <div className="flex-grow">
        <Editor
          // 1. Use the languageSlug as the key.
          key={languageSlug}
          height="100%"
          language={currentLanguage.monaco}
          // 2. Use defaultValue instead of value.
          defaultValue={currentLanguage.boilerplate}
          // The onChange handler is now optional if you don't need to track the value in real-time.
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            minimap: {
              enabled: false
            },
            fontSize: 14,
            wordWrap: 'on',
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;