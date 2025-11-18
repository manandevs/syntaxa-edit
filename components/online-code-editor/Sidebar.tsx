import React from 'react';
import {
  FaPython,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaTerminal,
  FaReact,
} from 'react-icons/fa';
import { SiC, SiCplusplus, SiJavascript, SiTypescript, SiGo, SiRuby } from 'react-icons/si';

const languages = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'R', icon: <FaTerminal /> }, // Placeholder for R
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'C', icon: <SiC />, active: true },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'C#', icon: <SiC /> }, // Placeholder, can refine
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Go', icon: <SiGo /> },
  { name: 'Ruby', icon: <SiRuby /> },
];

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 border-r border-gray-200 p-2 hidden md:flex flex-col items-center space-y-2">
      {languages.map((lang) => (
        <button
          key={lang.name}
          title={lang.name}
          className={`
            w-12 h-12 flex items-center justify-center rounded-lg transition-colors
            ${lang.active
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-200'
            }
          `}
        >
          <div className="text-2xl">{lang.icon}</div>
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;