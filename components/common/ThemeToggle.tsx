'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 absolute right-3 top-3"
    >
      {theme === 'dark' ? 
        <Image src="/sun-icon.svg" alt='moon icon' width={20} height={20}/>
      : 
      <Image src="/moon-icon.svg" alt='moon icon' width={20} height={20}/>
      }
    </button>
  );
};

export default ThemeToggle;
