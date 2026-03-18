import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { NavigationBar } from '@/components/nav-bar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
    title: 'Saksham Doda',
    description: 'I plan, design, build, test and deploy software',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${GeistSans.className} min-h-screen bg-background text-foreground antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    storageKey="portfolio-theme"
                >
                    <NavigationBar />
                    <main className="container mx-auto">{children}</main>
                    <footer className="container mx-auto py-8">
                        <p className="text-center text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground">
                            © Designed & Built by Saksham Doda · 2025
                        </p>
                    </footer>
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
