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

const Footer = (props: { className?: string }) => {
  return (
    <footer className='bg-bg-white-0 w-full max-w-[1100px] h-fit flex-col items-start gap-6 border-r border-t border-l border-stroke-soft-200'>
      
      <div className={`flex-col flex md:flex-row align-top justify-between  ${props.className || ''}`}>
        <div className='p-4 lg:p-8 w-full inline-flex flex-col items-start justify-start gap-3 border-b border-stroke-soft-200'>
          <Logo />
          <div className='max-w-[300px] text-paragraph-sm text-text-sub-600'>
          "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters."
          </div>
          <div className="flex w-full justify-between">
          <div className='flex gap-2 text-paragraph-sm items-center'>
            <a href="https://instagram.com/mainnet.design" target='_blank'><RiInstagramFill className='hover:text-text-sub-600'/></a> <a href="https://x.com/mainnetdesign" target='_blank'><RiTwitterXFill className='hover:text-text-sub-600'/></a> <a href="https://linkedin.com/company/mainnet-design" target='_blank'><RiLinkedinFill className='hover:text-text-sub-600'/></a>
        
          </div>
            <a href="malito:marcus@mainnet.design" className='text-paragraph-sm hover:text-text-sub-600'>marcus@mainnet.design</a></div>
          
          
          

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
