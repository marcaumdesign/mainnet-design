import InitialLoader from '@/components/initial-loader';
import { NotificationProvider } from '@/components/ui/notification-provider';
import { Provider as TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/utils/cn';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import Head from 'next/head';
import Script from 'next/script';
import './globals.css';
import LenisProvider from '@/providers/LenisProvider';
const projectId = 'pyygop0f82';

const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Mainnet Design',
  description: 'Design made to last.',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Clarity init moved to lazyOnload script for better performance
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(
        inter.variable,
        GeistMono.variable,
        'antialiased',
        'hide-scroll',
      )}
    >
      <Head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://media.contra.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/logo.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/lotties/logo-lightmode.lottie"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/lotties/logo-darkmode.lottie"
          as="fetch"
          crossOrigin="anonymous"
        />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical styles to prevent layout shifts */
            body { margin: 0; padding: 0; }
            .min-h-screen { min-height: 100vh; }
            .fixed { position: fixed; }
            .relative { position: relative; }
            .flex { display: flex; }
            .h-\\[500px\\] { height: 500px; }
            .h-\\[154px\\] { height: 154px; }
            .w-\\[154px\\] { width: 154px; }
            .min-h-\\[24px\\] { min-height: 24px; }
            .rounded-full { border-radius: 9999px; }
            .object-cover { object-fit: cover; }
            .overflow-auto { overflow: auto; }
            .antialiased { -webkit-font-smoothing: antialiased; }
            /* Hide scrollbar */
            .hide-scroll::-webkit-scrollbar { display: none; }
            .hide-scroll { scrollbar-width: none; -ms-overflow-style: none; }
          `
        }} />
        
        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src='https://www.facebook.com/tr?id=1177142284032271&ev=PageView&noscript=1'
          />
        </noscript>
      </Head>

      <body className='overflow-auto bg-bg-white-0 text-text-strong-950 lg:bg-bg-weak-50'>
        <LenisProvider>
          <InitialLoader />
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <div className='flex min-h-screen flex-col'>
                <main className='flex flex-1 flex-col'>
                  {children}
                  <SpeedInsights />
                  <Analytics />
                </main>
              </div>
            </TooltipProvider>
          </ThemeProvider>
          <NotificationProvider />
        </LenisProvider>
        {/* Google Tag Manager */}
      </body>

      {/* <!-- Meta Pixel Code --> */}
      <Script strategy='lazyOnload' id='meta-pixel'>
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq("init", "1177142284032271");
fbq("track", "PageView");`}
      </Script>

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-T4FF6715QC'
        id='gtag-script'
      />
      <Script strategy='lazyOnload' id='gtag-config'>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-T4FF6715QC');`}
      </Script>

      <Script strategy='lazyOnload' id='clarity'>
        {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pyygop0f82");`}
      </Script>
    </html>
  );
}
