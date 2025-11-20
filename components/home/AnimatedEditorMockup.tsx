"use client";

import { useState, useEffect, useRef } from "react";
import { FiZap, FiAlertCircle } from "react-icons/fi";
import Text from "../shared/Text";
import { codeLines, codeWithError, correctCode, mockupLanguages } from "@/data/Mockup"; // Import from data

const AnimatedEditorMockup = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentCode, setCurrentCode] = useState<string[]>(['']);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [showError, setShowError] = useState(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const typeLine = (lineIndex = 0, charIndex = 0) => {
      if (lineIndex >= codeLines.length) {
        timeoutsRef.current.push(
          setTimeout(() => {
            setTheme(t => (t === 'dark' ? 'light' : 'dark'));
            setCurrentCode(['']);
            setShowError(false);
            typeLine(0);
          }, 2500)
        );
        return;
      }

      const targetLine = lineIndex === 1 && showError ? codeWithError : codeLines[lineIndex];

      if (charIndex < targetLine.length) {
        setCurrentCode(prev => {
          const n = [...prev];
          n[lineIndex] = targetLine.substring(0, charIndex + 1);
          if (!n[lineIndex + 1]) n[lineIndex + 1] = '';
          return n;
        });

        if (lineIndex === 1 && charIndex === 21) {
          setShowAutocomplete(true);
          timeoutsRef.current.push(setTimeout(() => setShowAutocomplete(false), 1000));
        }

        timeoutsRef.current.push(setTimeout(() => typeLine(lineIndex, charIndex + 1), 50));
      } else {
        if (lineIndex === 1 && !showError) {
          timeoutsRef.current.push(
            setTimeout(() => {
              setShowError(true);
              setCurrentCode(prev => {
                const n = [...prev];
                n[1] = codeWithError;
                return n;
              });

              timeoutsRef.current.push(
                setTimeout(() => {
                  setShowError(false);
                  setCurrentCode(prev => {
                    const n = [...prev];
                    n[1] = correctCode;
                    return n;
                  });
                  typeLine(lineIndex + 1);
                }, 1500)
              );
            }, 1000)
          );
        } else typeLine(lineIndex + 1);
      }
    };

    typeLine();

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, [showError]);

  const themeClasses =
    theme === 'dark'
      ? 'bg-[#1e293b] border-gray-700 text-gray-300'
      : 'bg-white border-gray-200 text-gray-800';

  const syntaxHighlight = (line: string) =>
    line
      .replace(/(const|return)/g, '<span class="text-purple-400">$1</span>')
      .replace(/(Welcome)/g, '<span class="text-yellow-300">$1</span>')
      .replace(/(<h1|<\/h1>)/g, '<span class="text-red-400">$1</span>')
      .replace(/(className|class)/g, '<span class="text-cyan-300">$1</span>')
      .replace(/("title"|"Hello, World!")/g, '<span class="text-green-400">$1</span>');

  const dots = ['.', '..', '...'];

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Editor Panel */}
      <div
        className={`relative w-full max-w-2xl rounded-xl shadow-2xl p-4 border transition-colors duration-500 ${themeClasses}`}
      >
        {/* Window Controls */}
        <div className="flex items-center gap-2 mb-4">
          {['red', 'yellow', 'green'].map((c, i) => (
            <div key={i} className={`w-3.5 h-3.5 bg-${c}-500 rounded-full`}></div>
          ))}
        </div>

        {/* Code Area */}
        <div
          className={`relative ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-100/50'} h-64 rounded-md p-4 text-sm font-mono overflow-hidden transition-colors duration-500`}
        >
          <pre>
            {currentCode.map((line, i) => (
              <div key={i} className="relative">
                <span dangerouslySetInnerHTML={{ __html: syntaxHighlight(line) }} />
                {i === 1 && showError && (
                  <div className="absolute bottom-0 left-20 w-10 border-b-2 border-red-500 animate-pulse"></div>
                )}
              </div>
            ))}
          </pre>

          {/* Autocomplete Popup */}
          {showAutocomplete && (
            <div
              className={`absolute top-24 left-16 w-48 rounded-md shadow-lg p-2 border transition-colors duration-500 ${themeClasses}`}
            >
              <div className="flex items-center gap-2 p-2 bg-blue-500/10 rounded-md">
                <FiZap className="text-blue-500" />
                <span className="font-semibold text-blue-500">className</span>
              </div>
            </div>
          )}
        </div>

        {/* Floating Error */}
        {showError && (
          <div
            className={`absolute bottom-6 right-6 flex items-center gap-2 p-2 rounded-lg text-xs transition-colors duration-500 z-50 ${
              theme === 'dark' ? 'bg-red-500/10 text-red-400' : 'bg-red-100 text-red-600'
            }`}
          >
            <FiAlertCircle />
            <span>Invalid prop `class`</span>
          </div>
        )}

        {/* Floating Elements */}
        <div className="absolute -top-3 -left-12 w-48 p-3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg text-xs border border-gray-200 z-50">
          <strong>Performance:</strong>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
            <div className="bg-green-500 h-2 rounded-full w-[95%]"></div>
          </div>
        </div>
        <div className="absolute -bottom-8 -right-12 w-40 p-3 bg-white/50 backdrop-blur-md rounded-lg shadow-lg text-xs border border-gray-200 z-50">
          <pre>&lt;Button primary /&gt;</pre>
        </div>
      </div>

      {/* Language Icons Panel */}
      <div className="w-full max-w-2xl grid grid-cols-5 gap-3 p-3 border rounded-lg bg-gray-50 justify-center">
        {mockupLanguages.map(({ icon: Icon, label, color }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center w-full h-full p-1 aspect-square bg-white rounded-md shadow hover:scale-105 transition-transform truncate"
          >
            <Icon className={`${color} w-8 h-8`} />
            <Text text={label} className="text-xs" />
          </div>
        ))}
        <div className="flex justify-end text-end w-full h-full p-1 aspect-square bg-white rounded-md shadow hover:scale-105 transition-transform truncate">
          {dots.map((d, i) => (
            <p
              key={i}
              className={['text-md', 'text-2xl', 'text-5xl'][i] + ' mt-auto p-[1px]'}
              style={{ WebkitTextStroke: '1px black' }}
            >
              {d}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedEditorMockup;