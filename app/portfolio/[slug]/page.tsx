'use client';

import { useRouter, useParams } from 'next/navigation';
import { PortfolioProps, portfolio } from '@/data/portfolio';
import Header from '@/components/header';
import {
  RiArrowLeftFill,
  RiArrowLeftSLine,
  RiArrowRightUpFill,
  RiArrowRightUpLine,
} from '@remixicon/react';
import WorkDisplay from '@/components/work-display';
import { formatText } from '@/utils/format-text';
import { RainbowButton } from '@/components/ui/rainbow-button';
import * as Button from '@/components/ui/button';

const PortfolioPage = () => {
  const router = useRouter();
  const { slug } = useParams() as { slug: string };

  const item = portfolio.find((item) => item.slug === slug);
  const thumbnail = `/images/portfolio/${slug}/thumbnail.png`;

  if (!item) {
    return <div>Item não encontrado</div>;
  }

  return (
    <div className='flex w-full flex-col items-center'>
      <Header size='full' slug={slug} portfolio={portfolio} />
      <div className='inline-flex h-fit w-full max-w-[1100px] flex-col items-start justify-start border-l border-r border-stroke-soft-200 bg-bg-white-0'>
        <div className='flex h-fit flex-col items-start justify-center gap-4 self-stretch border-t border-stroke-soft-200 p-8 pt-[122px]'>
          <div className='inline-flex items-center justify-center gap-1'>
            <div
              className='cursor-pointer text-subheading-sm uppercase text-text-soft-400 hover:text-text-strong-950'
              onClick={() => router.push('/')}
            >
              Home
            </div>
            <RiArrowLeftSLine />
            <div
              className='text-subheading-sm uppercase text-text-soft-400 hover:text-text-strong-950'
              onClick={() => router.push('/portoflio')}
            >
              Portoflio
            </div>
            <RiArrowLeftSLine />
            <div className='text-subheading-sm uppercase text-text-strong-950'>
              {item.slug}
            </div>
          </div>
          <div className='text-title-h0 text-text-strong-950'>{item.name}</div>
        </div>
        <div className='inline-flex items-center justify-start gap-8 self-stretch border-t border-stroke-soft-200 p-8'>
          <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              {item.work.length === 1 ? 'Work' : 'Works'}
            </div>
            <div className='flex w-full gap-2 justify-between'>
              <div className='self-stretch text-title-h4 text-text-strong-950'>
                {formatText(item.work)}
              </div>
              {item.type == "project" ? (<div className="flex gap-2"><RainbowButton
                onClick={() => window.open(`${item.link}`, '_blank')}
              >
                Open Project <RiArrowRightUpLine />
              </RainbowButton>
              </div>) : (<div className="flex gap-2"><RainbowButton
                onClick={() => window.open(`${item.link}`, '_blank')}
              >
                Download Template <RiArrowRightUpLine />
              </RainbowButton>
              <Button.Root variant='neutral' mode='stroke' className='text-label-md' >Live Preview</Button.Root></div>) }
            </div>
          </div>
        </div>
        <div className='inline-flex items-start justify-start gap-8 self-stretch border-t border-stroke-soft-200 p-8'>
          <div className='inline-flex flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              Year
            </div>
            <div className='self-stretch text-paragraph-md text-text-strong-950'>
              {item.publishedAt}
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              Softwares
            </div>
            <div className='self-stretch text-paragraph-md text-text-strong-950'>
              {formatText(item.framework)}
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              Crafted In
            </div>
            <div className='self-stretch text-paragraph-md text-text-strong-950'>
              {item.craftedIn}
            </div>
          </div>
          {/* <div className='inline-flex w-[263px] flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              collaborators
            </div>
            <div className='flex h-fit flex-col items-start justify-start gap-1 self-stretch'>
              <div className='self-stretch text-paragraph-md text-text-strong-950'>
                Marcus Dutra [Design Director]
              </div>
              <div className='self-stretch text-paragraph-md text-text-strong-950'>
                Clara Goldenstein [Copywriter]
              </div>
            </div>
          </div> */}
          <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              Description
            </div>
            <div className='self-stretch text-paragraph-md text-text-strong-950'>
              {item.description}
            </div>
          </div>
        </div>
        <img
          className='h-auto w-full border-t border-stroke-soft-200 object-cover'
          src={thumbnail}
          alt={item.name}
        />
        {item.work.length < 1 || <WorkDisplay slug={item.slug} />}
      </div>
    </div>
  );
};

export default PortfolioPage;
