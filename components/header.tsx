import Link from 'next/link';
import dynamic from 'next/dynamic';
import * as FancyButton from '@/components/ui/fancy-button';
import { Button } from './ui/file-upload';
import { RainbowButton } from "@/components/ui/rainbow-button";

const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});

export default function Header() {
  
  return (
    <>
      <header className='w-full flex h-14 max-w-5xl items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-2 text-title-h6 text-text-strong-950'
        >
          <img
            src='/images/logo.svg'
            alt=''
            className='size-16 object-contain'
          />
          <div className="text-title-h4 text-text-strong-950">Mainnet</div>
        </Link>

    
    <RainbowButton>Get Started</RainbowButton>
   

      </header>
    </>
  );
}
