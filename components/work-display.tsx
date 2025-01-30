import React from 'react';
import Image from 'next/image';
import { portfolio } from '@/data/portfolio';
import { formatText } from '@/utils/format-text';

interface WorkDisplayProps {
  slug: string;
}

const WorkDisplay: React.FC<WorkDisplayProps> = ({ slug }) => {
  const item = portfolio.find((item) => item.slug === slug);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className='w-full'>
      
      <div className='w-full'>
        {item.work.map((work, index) => (
          <div key={index} className='w-full'>
            <div className='w-full inline-flex items-center justify-start gap-8 self-stretch border-t border-stroke-soft-200 p-8'>
          <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              Work
            </div>
            <div className='self-stretch text-title-h4 text-text-strong-950'>
              {formatText([work])}
            </div>
          </div>
        </div>
            <Image
             
              src={`/images/portfolio/${slug}/${work} `}
              alt={`${work} image`}
              layout='responsive'
              width={100}
              height={300}
              className='w-full border-t border-stroke-soft-200'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkDisplay;
