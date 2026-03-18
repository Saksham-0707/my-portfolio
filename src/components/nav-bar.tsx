'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

export function NavigationBar() {
    return (
        <>
            <NavigationMenu className="sticky top-0 z-40 hidden min-w-full justify-between border-b border-border/60 bg-background/70 py-4 backdrop-blur-xl sm:flex">
                <Link href="/" passHref>
                    <Avatar className="cursor-pointer ring-2 ring-border/70 transition-transform duration-300 hover:scale-105 hover:ring-primary/40">
                        <AvatarImage
                            className="size-12"
                            src="https://i.pinimg.com/564x/5d/ef/8c/5def8c3cff33b08ffcfd66c5fc725fc2.jpg"
                        />
                        <AvatarFallback>SD</AvatarFallback>
                    </Avatar>
                </Link>
                <NavigationMenuList className="w-full justify-end gap-1">
                    {navLinks.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <Link href={link.href} legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                >
                                    {link.label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                    <NavigationMenuItem className="ml-3">
                        <ThemeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Sheet>
                <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border/60 bg-background/70 py-3 backdrop-blur-xl sm:hidden">
                    <Link href="/" passHref>
                        <Avatar className="cursor-pointer ring-2 ring-border/70">
                            <AvatarImage
                                className="size-11"
                                src="https://i.pinimg.com/564x/5d/ef/8c/5def8c3cff33b08ffcfd66c5fc725fc2.jpg"
                            />
                            <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                    </Link>
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <SheetTrigger className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/70 text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                            <Menu className="h-5 w-5" />
                        </SheetTrigger>
                    </div>
                </div>
                <SheetContent className="w-[18rem] border-l border-border/60 bg-background/95 pt-16">
                    <NavigationMenu className="flex w-full flex-col items-stretch">
                        <NavigationMenuList className="flex w-full flex-col items-stretch gap-2 pt-4">
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`${navigationMenuTriggerStyle()} w-full justify-start`}
                                    >
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.href}>
                                    <Link
                                        href={link.href}
                                        legacyBehavior
                                        passHref
                                    >
                                        <NavigationMenuLink
                                            className={`${navigationMenuTriggerStyle()} w-full justify-start`}
                                        >
                                            {link.label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </SheetContent>
            </Sheet>
        </>
    );
}
