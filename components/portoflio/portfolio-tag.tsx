import {
  RiSmartphoneFill,
  RiPagesFill,
  RiAppsFill,
  RiGlobalFill,
  RiTempHotFill,
  RiCodeSSlashFill,
  RiBook2Line,
} from '@remixicon/react';
import * as Tag from '@/components/ui/tag';

const icons = {
  'mobile-key': RiSmartphoneFill,
  'landing-page-key': RiPagesFill,
  'web-app-key': RiAppsFill,
  'website-key': RiGlobalFill,
  'branding-key' : RiBook2Line,
  'templates-key': RiTempHotFill,
  'open-source-key': RiCodeSSlashFill,
};

interface PortfolioTagProps {
  variant:
    | 'mobile'
    | 'landing-page'
    | 'web-app'
    | 'website'
    | 'templates'
    | 'branding'
    | 'open-source';
}

const PortfolioTag = ({ variant }: PortfolioTagProps) => {
  const IconComponent = icons[`${variant}-key`];

  return (
    <>
      <Tag.Root variant='stroke'>
        <Tag.Icon as={IconComponent} />
        {variant
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')}
      </Tag.Root>
    </>
  );
};

export default PortfolioTag;
