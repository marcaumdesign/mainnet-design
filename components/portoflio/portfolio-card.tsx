import React from 'react';
import Link from 'next/link';
import * as Tag from '@/components/ui/tag';
import * as Button from '@/components/ui/button';
import PortfolioTag from './portfolio-tag';

interface PortfolioCardProps {
  variant:
    | 'mobile'
    | 'landing-page'
    | 'web-app'
    | 'website'
    | 'templates'
    | 'branding'
    | 'open-source';
  title: string;
  link: string;
  imageUrl: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  variant,
  title,
  link,
  imageUrl,
}) => {
  const isMobile = variant === 'mobile';
  const imageWidth = isMobile ? 251 : 864;
  const imageHeight = 540;

  return (
    <div className='bg-bg-white-0'>
      <img className='object-fill' src={imageUrl} alt={title} width={imageWidth} height={imageHeight} />
      <div className='border border-stroke-soft-200 flex justify-between px-4 py-4 items-center'>
        <div className='text-label-md text-text-strong-950'>{title}</div>
        <div className='gap-2 flex items-center'>
          {isMobile || (<PortfolioTag variant={variant}/>) }
            <Link href={link} passHref target="_blank">
              
              <Button.Root size="xxsmall" variant='neutral' mode='filled'>
              {isMobile ? "Open" : "Open Project"}
              </Button.Root>
            </Link>
        </div>
      </div>

    </div>
  );
};

export default PortfolioCard;
