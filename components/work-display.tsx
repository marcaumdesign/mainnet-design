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
            <div className='w-full inline-flex items-center justify-start gap-8 self-stretch border-t border-stroke-soft-200 p-4 md:p-8'>
          <div className='inline-flex shrink grow basis-0 flex-col items-start justify-start gap-2'>
            <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
              Work Type
            </div>
            <div className='self-stretch text-title-h4 text-text-strong-950'>
              {formatText([work])}
            </div>
          </div>
        </div>
            <Image
              src={`/images/portfolio/${slug}/${work}.png`}
              alt={`${work} image`}
              width={1100}
              height={600}
              className='w-full border-t border-stroke-soft-200'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkDisplay;
