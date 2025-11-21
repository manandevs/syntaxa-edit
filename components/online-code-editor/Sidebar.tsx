"use client";

import React from 'react';
import Button from '../shared/Button';
import { TbExchange } from 'react-icons/tb';
import Tooltip from '../shared/Tooltip';
import { useSidebar } from '../contexts/SidebarContext';
import { languages } from '@/config/language';

interface SidebarProps {
  activeSlug: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSlug }) => {
  const { isSidebarOpen } = useSidebar();

  if (!isSidebarOpen) {
    return null;
  }

  return (
    <aside className="bg-gray-100 border-r border-gray-200 p-2 hidden md:flex flex-col items-center space-y-2 animate-in fade-in-0 duration-300">
      <Tooltip content="Switch Language" placement="right">
        <Button
          title="Exchange Compiler"
          className="w-12 h-12 p-0"
        >
          <div className="text-2xl">
            <TbExchange />
          </div>
        </Button>
      </Tooltip>
      {languages.map((lang) => (
        <Tooltip key={lang.slug} content={lang.name} placement="right">
          <Button
            href={`/services/online-code-editor/${lang.slug}`}
            title={lang.name}
            className="w-12 h-12 p-0"
            variant={activeSlug === lang.slug ? 'default' : 'outline'}
          >
            <div className="text-2xl">{React.createElement(lang.icon)}</div>
          </Button>
        </Tooltip>
      ))}
    </aside>
  );
};

export default Sidebar;