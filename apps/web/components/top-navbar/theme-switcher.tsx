'use client'

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return null

  return (
    <button className="flex p-1 items-center bg-secondary rounded-full shadow-sm shadow-primary/60"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <span
        className={`flex items-center p-1 rounded-full transition-colors 
            ${theme === 'light' ? 'bg-foreground text-primary-foreground' : 'text-muted-foreground'}`}
      >
        <Sun size={18} />
      </span>
      <span
        className={`flex items-center p-1 rounded-full transition-colors 
          ${theme === 'dark' ? 'bg-foreground text-primary-foreground' : 'text-muted-foreground'}`}
      >
        <Moon size={18} />
      </span>
    </button>
  )
}

export default ThemeSwitcher;