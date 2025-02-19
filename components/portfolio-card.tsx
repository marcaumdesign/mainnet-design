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
  Works,
  PortfolioProps
} from "@/data/portfolio" 

function toSlug(input: string): string {
  return input
    .toLowerCase() // Converte para minúsculas
    .trim() // Remove espaços extras no início e no fim
    .normalize("NFD") // Normaliza caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais
    .replace(/\s+/g, "-") // Substitui espaços por hífens
    .replace(/-+/g, "-"); // Remove hífens repetidos
}

const capitalizer = (variants: Works) => {
  return variants
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

};

const icons: Record<Works, RemixiconComponentType> = {
  "mobile-app": RiSmartphoneFill,
  'landing-page': RiPagesFill,
  'web-app': RiAppsFill,
  'website': RiGlobalFill,
  'templates': RiTempHotFill,
  'branding': RiBook2Line,
  'social-media': RiBook2Line,
  'e-commerce': RiBook2Line,
  'dashboard': RiBook2Line,
};

const PortfolioCard: React.FC<PortfolioProps> = ({
  work,
  name,
  link,
  type,
  slug
}) => {
  const variant = Array.isArray(work) && work.length > 1 ? work[0] : work[0];
  const isProject = type === 'project';
  const imageUrl = `/images/portfolio/${slug}/${variant}.png`;

  return (
    <Link
        href={`/portfolio/${slug}`}
        className='flex items-center text-title-h6 text-text-strong-950'
      >
    <div className='bg-bg-white-0 flex flex-col w-full max-w-xs lg:max-w-none'>
      <img
      className='w-full h-auto object-cover'
      src={imageUrl}
      alt={name}
      />
      <div className='flex items-center justify-between border border-stroke-soft-200 px-4 py-4'>
      <div className='text-label-md text-text-strong-950'>{name}</div>
      <div className='flex items-center gap-2'>
        <Tag.Root variant='stroke'>
        <Tag.Icon as={icons[variant]} />
        {capitalizer(variant)}
        </Tag.Root>
      </div>
      </div>
    </div>
    </Link>
  );
};

export default PortfolioCard;