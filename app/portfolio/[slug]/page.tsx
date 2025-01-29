'use client';

import { useRouter, useParams } from 'next/navigation';
import { PortfolioProps, portfolio } from '@/data/portfolio';
import Header from '@/components/header';
import { RiArrowLeftFill, RiArrowLeftSLine } from '@remixicon/react';

const PortfolioPage = () => {
  const router = useRouter();
  const { slug } = useParams();

  const item = portfolio.find((item) => item.slug === slug);

      // Formate o texto do trabalho
const formatText = (textArray: string[]) => {
    return textArray
        ?.map((text, index) => {
            const formattedText = text.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
            if (index === textArray.length - 1 && textArray.length > 1) {
                return ` & ${formattedText}`;
            }
            return index === textArray.length - 2 ? `${formattedText}` : `${formattedText}, `;
        })
        .join('')
        .replace(', &', ' &');
};


if (!item) {
    return <div>Item não encontrado</div>;
}

  return (
    <div className='flex w-full flex-col items-center'>
      <Header variant='full' />
      <div className='w-full max-w-[1200px] inline-flex h-fit flex-col items-start justify-start  border-stroke-soft-200 bg-bg-white-0 border-l border-r'>
        <div className='flex h-fit flex-col items-start justify-center gap-4 self-stretch border-t  border-stroke-soft-200 p-8 pt-[122px]'>
          <div className='inline-flex items-center justify-center gap-1'>
            <div
              className='cursor-pointer text-subheading-md uppercase text-text-soft-400 hover:text-text-strong-950'
              onClick={() => router.push('/')}
            >
              Home
            </div>
            <RiArrowLeftSLine />
            <div
              className='text-subheading-md uppercase text-text-soft-400 hover:text-text-strong-950'
              onClick={() => router.push('/portoflio')}
            >
              Portoflio
            </div>
            <RiArrowLeftSLine />
            <div className='text-subheading-md uppercase text-text-strong-950'>
              {item.slug}
            </div>
          </div>
          <div className='text-title-h0 text-text-strong-950'>{item.name}</div>
        </div>
        <div className=' inline-flex items-center justify-start gap-8 self-stretch border-t border-stroke-soft-200 p-8'>
          <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              works
            </div>
            <div className='self-stretch text-title-h4 text-text-strong-950'>
              {formatText(item.work)}
            </div>
          </div>
        </div>
        <div className='inline-flex  items-start justify-start gap-8 self-stretch border-t  border-stroke-soft-200 p-8'>
          <div className='inline-flex flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              YEAR
            </div>
            <div className='self-stretch text-paragraph-md text-text-strong-950'>
              {item.publishedAt}
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              sOFTWARES
            </div>
            <div className='self-stretch text-paragraph-md text-text-strong-950'>
              {formatText(item.framework)}
            </div>
          </div>
          <div className='inline-flex flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              CRAFTED IN
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
              A regenerative streetwear brand that sells techwear made with
              sustainable materials.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
