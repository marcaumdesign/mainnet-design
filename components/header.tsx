import Link from 'next/link';
import dynamic from 'next/dynamic';
import * as FancyButton from '@/components/ui/fancy-button';
import * as Button from './ui/button';
import { RainbowButton } from '@/components/ui/rainbow-button';
import Logo from './logo';
import { portfolio, PortfolioProps } from '@/data/portfolio';

const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});

interface HeaderProps {
  size?: 'compact' | 'full';
  portfolio?: PortfolioProps[];
  slug?: string;
}

export default function Header({ size, portfolio = [], slug }: HeaderProps) {
  const item = portfolio.find((item) => item.slug === slug);

  const maxWidthClass = size === 'full' ? 'max-w-[1100px] ' : 'max-w-[600px]';

  return (
    <>
      <header
        className={`fixed z-10 flex h-fit w-full border-b border-stroke-soft-200 bg-bg-white-0 px-3 py-3 md:border-l md:border-r lg:px-8 lg:py-4 ${maxWidthClass} items-center justify-between shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.10)]`}
      >
        <Link
          href='/'
          className='flex items-center text-title-h6 text-text-strong-950'
        >
          <Logo className='size-16 object-contain' />
        </Link>

        <div className='flex items-center gap-2'>
          <Button.Root
            mode='stroke'
            variant='neutral'
            className='h-[42px] w-fit px-2 text-label-md md:px-2'
            onClick={() => {
              window.open('./portfolio');
            }}
          >
            View Work
          </Button.Root>

          <RainbowButton
            onClick={() =>
              window.open('https://calendly.com/marcaum/design', '_blank')
            }
            className='w-fit px-2 md:px-2'
          >
            Get Started
          </RainbowButton>
        </div>
      </header>
    </>
  );
}
