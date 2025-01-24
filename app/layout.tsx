import type { Metadata } from 'next';
import Clarity from '@microsoft/clarity';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/utils/cn';
import { Provider as TooltipProvider } from '@/components/ui/tooltip';
import { NotificationProvider } from '@/components/ui/notification-provider';
import Header from '@/components/header';

const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = localFont({
  src: './fonts/GeistMono[wght].woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Mainnet Design',
  description: 'Design made to last.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(inter.variable, geistMono.variable, 'antialiased', "hide-scroll")}
    >
      <body className='bg-bg-white-0  lg:bg-bg-weak-50 text-text-strong-950 overflow-auto '>
        <ThemeProvider attribute='class'>
          <TooltipProvider>
            <div className='flex min-h-screen flex-col'>
              
              <main className='flex flex-1 flex-col'>{children}<SpeedInsights/><Analytics/></main>
            </div>
          </TooltipProvider>
        </ThemeProvider>
        <NotificationProvider />
      </body>
    </html>
  );
}
