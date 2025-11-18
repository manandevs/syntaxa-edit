import React from 'react';
import { FaPython } from 'react-icons/fa';
import { SiC } from 'react-icons/si';
import Button from '../shared/Button';
import { TbBrandJavascript, TbExchange } from 'react-icons/tb';

const languages = [
  { name: 'Python', slug: 'python', icon: <FaPython /> },
  { name: 'C', slug: 'c', icon: <SiC /> },
  { name: 'JavaScript', slug: 'javascript', icon: <TbBrandJavascript /> },
];

interface SidebarProps {
  activeSlug: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSlug }) => {
  return (
    <aside className="bg-gray-100 border-r border-gray-200 p-2 hidden md:flex flex-col items-center space-y-2">
      <Button
        title="Exchange Compiler"
        className="w-12 h-12 p-0"
      >
        <div className="text-2xl">
          <TbExchange />
        </div>
      </Button>
      {languages.map((lang) => (
        <Button
          href={`/services/online-code-editor/${lang.slug}`}
          key={lang.slug}
          title={lang.name}
          className="w-12 h-12 p-0"
          variant={activeSlug === lang.slug ? 'default' : 'outline'}
        >
          <div className="text-2xl">{lang.icon}</div>
        </Button>
      ))}
    </aside>
  );
};

export default Sidebar;