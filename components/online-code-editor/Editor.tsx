"use client";

import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import Button from '../shared/Button';
import Tooltip from '../shared/Tooltip';
import { BsWindowSidebar } from 'react-icons/bs';
import { FiMaximize, FiMoon, FiShare2, FiMinimize } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
import Disable from '../shared/Disable';
import { useSidebar } from '../contexts/SidebarContext';
import { useFullScreen } from '../contexts/FullScreenContext';
import { languageConfig } from '@/config/LanguageConfig';

// Fix: Define a minimal interface for what we need from the editor instance
interface MonacoEditorInstance {
  getValue: () => string;
}

interface CodeEditorProps {
  languageSlug: string;
  setOutput: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ languageSlug, setOutput }) => {
  const cfg = languageConfig[languageSlug] || languageConfig.c;
  // Fix: Apply the interface to the ref
  const editorRef = useRef<MonacoEditorInstance | null>(null);

  const { toggleSidebar } = useSidebar();
  const { handle } = useFullScreen();

  const runCode = async () => {
    const code = editorRef.current?.getValue() || "";

    const res = await fetch(`/api/sandbox/execute/${languageSlug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();

    setOutput(data.output || data.stderr || "No output");
  };

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-sm h-full">

      <div className="flex justify-between items-center p-2 border-b bg-gray-50 rounded-t-lg">

        <div className="flex items-center gap-2">
          <Tooltip content="Toggle Sidebar" placement='right'>
            <Button variant="ghost" onClick={toggleSidebar} className="p-2">
              <BsWindowSidebar />
            </Button>
          </Tooltip>

          <Button variant="outline" className="py-1.5 border bg-white cursor-default">
            {cfg.fileName}
          </Button>
        </div>

        <div className="flex items-center gap-2">

          <Tooltip placement='bottom' content={handle.active ? "Exit Fullscreen" : "Enter Fullscreen"}>
            <Button variant="ghost" onClick={handle.active ? handle.exit : handle.enter} className="p-2">
              {handle.active ? <FiMinimize /> : <FiMaximize />}
            </Button>
          </Tooltip>

          <Disable>
            <Tooltip placement='bottom' content="Toggle Theme">
              <Button className="p-2" variant="ghost">
                <FiMoon />
              </Button>
            </Tooltip>
          </Disable>

          <Button className="p-2 relative cursor-not-allowed" variant="ghost">
            <AiFillLock className="absolute -top-1 -right-1" />
            <FiShare2 />
          </Button>

          <Tooltip placement='bottom' content="Run Code">
            <Button className="py-1.5 px-4" onClick={runCode}>Run</Button>
          </Tooltip>

        </div>
      </div>

      <div className="flex-grow rounded-b-lg">
        <Editor
          height="100%"
          defaultValue={cfg.boilerplate}
          language={cfg.monaco}
          // Fix: Cast or assign the editor instance
          onMount={(editor) => (editorRef.current = editor as unknown as MonacoEditorInstance)}
          options={{
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: "on",
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;