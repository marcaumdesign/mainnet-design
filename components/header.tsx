import Link from 'next/link';
import dynamic from 'next/dynamic';
import * as FancyButton from '@/components/ui/fancy-button';
import { Button } from './ui/file-upload';
import { RainbowButton } from "@/components/ui/rainbow-button";
import Logo from './logo';

const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});

export default function Header() {
  
  return (
    <>
      <header className='z-10 bg-bg-white-0 border border-stroke-soft-200 px-8 py-10 fixed w-full flex h-14 max-w-[600px] items-center justify-between shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.10)]'>
        <Link
          href='/'
          className='flex items-center text-title-h6 text-text-strong-950'
        >
          <Logo className='size-16 object-contain' />
          <div className="text-title-h4 text-text-strong-950">Mainnet</div>
        </Link>
    
    <RainbowButton>Get Started</RainbowButton>
   

      </header>
    </>
  );
}
