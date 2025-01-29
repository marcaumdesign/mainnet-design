import Link from 'next/link';
import dynamic from 'next/dynamic';
import * as FancyButton from '@/components/ui/fancy-button';
import { Button } from './ui/file-upload';
import { RainbowButton } from "@/components/ui/rainbow-button";
import Logo from './logo';

const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});

interface HeaderProps {
  variant?: "compact" | "full";
}

export default function Header({ variant = 'compact' }) {
  const maxWidthClass = variant === 'full' ? 'max-w-[1200px]' : 'max-w-[600px]';

  return (
    <>
      <header className={`z-10 bg-bg-white-0 border-b border-stroke-soft-200 lg:px-8 lg:py-4 px-3 py-3 fixed w-full flex h-fit ${maxWidthClass} items-center justify-between shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.10)]`}>
        <Link
          href='/'
          className='flex items-center text-title-h6 text-text-strong-950'
        >
          <Logo className='size-16 object-contain' />
        </Link>
    
        <RainbowButton onClick={() => window.open("https://calendly.com/marcaum/design", "_blank")}>Get Started</RainbowButton>
      </header>
    </>
  );
}
