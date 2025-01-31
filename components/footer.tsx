import React from 'react';
import { works, PortfolioProps } from '@/data/portfolio';
import Logo from './logo';
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from '@remixicon/react';
import PortfolioMap from './portfolio-map';
import { StripedBackground } from './striped-background';

const Footer = () => {
  return (
    <footer className='bg-bg-white-0 w-full max-w-[1100px] h-fit flex-col items-start gap-6 border-r border-l  border-stroke-soft-200'>
      <StripedBackground className='h-[100px] border-b'/>
      <div className='flex align-top justify-between p-8 gap-4'>
        <div className='w-fill max-w-[300px] inline-flex flex-col items-start justify-start gap-3'>
          <Logo />
          <div className='text-paragraph-sm text-text-sub-600'>
            ”The Lord God took the man and put him in the Garden of Eden to work
            it and take care of it.”
          </div>
          <div className='flex gap-2'>
            <RiInstagramFill /> <RiTwitterXFill /> <RiLinkedinFill />
          </div>
        </div>
        <PortfolioMap />
      </div>

      <div className='flex w-full justify-between border-t border-b border-stroke-soft-200 p-4'>
        <div>
          <span className='text-paragraph-sm text-text-strong-950'>
            Mainnet Design © {new Date().getFullYear()}.{' '}
          </span>
          <span className='text-paragraph-sm text-text-soft-400'>
            All Rights Reserved{' '}
          </span>
        </div>
        <div className='text-right'>
          <span className='text-paragraph-sm text-text-strong-950'>22°</span>
          <span className='text-paragraph-sm text-text-soft-400'>
            48’49.65”{' '}
          </span>
          <span className='text-paragraph-sm text-text-strong-950'>S 43°</span>
          <span className='text-paragraph-sm text-text-soft-400'>
            02’22.61”
          </span>
          <span className='text-paragraph-sm text-text-strong-950'> W</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
