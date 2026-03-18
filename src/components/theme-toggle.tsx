'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

export function ThemeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && resolvedTheme === 'dark';

    return (
        <button
            type="button"
            aria-label={
                mounted
                    ? `Switch to ${isDark ? 'light' : 'dark'} mode`
                    : 'Toggle theme'
            }
            aria-pressed={isDark}
            className={cn(
                'group relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-background/70 text-foreground shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                className,
            )}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.16),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Sun
                className={cn(
                    'absolute h-[1.15rem] w-[1.15rem] transition-all duration-500',
                    isDark
                        ? 'scale-0 -rotate-90 opacity-0'
                        : 'scale-100 rotate-0 opacity-100',
                )}
            />
            <Moon
                className={cn(
                    'absolute h-[1.15rem] w-[1.15rem] transition-all duration-500',
                    isDark
                        ? 'scale-100 rotate-0 opacity-100'
                        : 'scale-0 rotate-90 opacity-0',
                )}
            />
            <span className="sr-only">Toggle color theme</span>
        </button>
    );
}
