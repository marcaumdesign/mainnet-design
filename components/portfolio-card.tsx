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

// Exemplo de uso
const slug = toSlug("Exemplo Nome");
console.log(slug); // Saída: exemplo-nome

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
  type,
}) => {
  const variant = Array.isArray(work) && work.length > 1 ? work[0] : work[0];
  const isProject = type === 'project';
  const imageWidth = 864;
  const imageHeight = 540;
  const imageUrl = `/images/portfolio/${toSlug(name)}/${variant}.png`;

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
        
            <Tag.Root variant='stroke'>
              <Tag.Icon as={icons[variant]} />
              {capitalizer(variant)}
            </Tag.Root>
          
          <Link href={link} passHref target='_blank'>
            <Button.Root size='xxsmall' variant='neutral' mode='filled'>
              {isProject ? 'Open Template' : 'Open Project'}
            </Button.Root>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
