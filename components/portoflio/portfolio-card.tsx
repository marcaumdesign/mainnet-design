import React from 'react';
import Link from 'next/link';
import * as Tag from '@/components/ui/tag';
import * as Button from '@/components/ui/button';

import {
  RiSmartphoneFill,
  RiPagesFill,
  RiAppsFill,
  RiGlobalFill,
  RiBook2Line,
  RiTempHotFill,
  RiCodeSSlashFill,
  RemixiconComponentType,
} from '@remixicon/react';
import {
  IconVariants,
  PortfolioCardProps
} from "@/data/portfolio" 

const icons: Record<IconVariants, RemixiconComponentType> = {
  "mobile-app": RiSmartphoneFill,
  'landing-page': RiPagesFill,
  'web-app': RiAppsFill,
  'website': RiGlobalFill,
  'branding': RiBook2Line,
  'templates': RiTempHotFill,
  'social-media': RiGlobalFill, 
  'e-commerce': RiAppsFill, 
  'dashboard': RiPagesFill, 
};

const capitalizer = (variants: IconVariants) => {
  return variants
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  work,
  name,
  link,
}) => {
  const variant = Array.isArray(work) && work.length > 1 ? work[0] : work[0];
  const isMobile = variant === 'mobile-app';
  const imageWidth = isMobile ? 251 : 864;
  const imageHeight = 540;
  const imageUrl = `/images/portfolio/${name}/${variant}.png`;

  return (
    <div className='bg-bg-white-0'>
      <img
        className='object-fit'
        src={imageUrl}
        alt={name}
        width={imageWidth}
        height={imageHeight}
      />
      <div className='flex items-center justify-between border border-stroke-soft-200 px-4 py-4'>
        <div className='text-label-md text-text-strong-950'>{name}</div>
        <div className='flex items-center gap-2'>
          {/* { {isMobile || (<PortfolioTag variant={variant}/>) } } */}
          {!isMobile && (
            <Tag.Root variant='stroke'>
              <Tag.Icon as={icons[variant]} />
              {capitalizer(variant)}
            </Tag.Root>
          )}
          <Link href={link} passHref target='_blank'>
            <Button.Root size='xxsmall' variant='neutral' mode='filled'>
              {isMobile ? 'Open' : 'Open Project'}
            </Button.Root>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
