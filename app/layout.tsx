import InitialLoader from '@/components/initial-loader';
import { NotificationProvider } from '@/components/ui/notification-provider';
import { Provider as TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/utils/cn';
import Clarity from '@microsoft/clarity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import Head from 'next/head';
import Script from 'next/script';
import './globals.css';
import LenisProvider from '@/providers/LenisProvider';
const projectId = 'pyygop0f82';

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
  Clarity.init(projectId);

  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(
        inter.variable,
        geistMono.variable,
        'antialiased',
        'hide-scroll',
      )}
    >
      <head>
      {/* // <!-- Meta Pixel Code --> */}
      <script>
        
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1177142284032271');
        fbq('track', 'PageView');`}
        
        
        
        
      </script>

      <noscript><img height="1" width="1" style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1177142284032271&ev=PageView&noscript=1"/>
        </noscript>

      {/* // <!-- End Meta Pixel Code --> */}

      {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-T4FF6715QC"></script>
<script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-T4FF6715QC');`}
</script>

        <script id='clarity'>
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pyygop0f82");
          `}
        </script>
      </head>

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
    </html>
  );
}
