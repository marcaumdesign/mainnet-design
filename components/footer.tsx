import React from 'react';
import { works, PortfolioProps } from '@/data/portfolio';
import Logo from './logo';
import {
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from '@remixicon/react';


const Footer = () => {
  return (
    <footer className='w-fill inline-flex h-fit items-start justify-between border-t border-stroke-soft-200 p-8'>
      <div className='w-fill inline-flex flex-col items-start justify-start gap-3'>
        <Logo />
        <div className='text-paragraph-sm text-text-sub-600'>
          ”The Lord God took the man and put him in the Garden of Eden to work
          it and take care of it.”
        </div>
        <div className='flex gap-2'>
          <RiInstagramFill /> <RiTwitterXFill /> <RiLinkedinFill />
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
