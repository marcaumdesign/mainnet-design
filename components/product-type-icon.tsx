import { ProductTypes } from '@/data/store';
import { RiStore2Line, RiPaintBrushLine, RiTShirtLine, Ri24HoursLine } from '@remixicon/react';

interface ProductTypeIconProps {
  type: ProductTypes;
  className?: string;
}

export const ProductTypeIcon = ({ type, className = '' }: ProductTypeIconProps) => {
  // Você pode personalizar os ícones para cada tipo depois
  const getIcon = () => {
    // Brand Types
    if (type === 'SaaS') return <RiStore2Line className={className} />;
    if (type === 'Agency') return <RiStore2Line className={className} />;
    if (type === 'Business') return <RiStore2Line className={className} />;

    // Asset Types
    if (type === '3d') return <RiPaintBrushLine className={className} />;
    if (type === 'illustrations') return <RiPaintBrushLine className={className} />;
    if (type === 'mockups') return <RiPaintBrushLine className={className} />;
    if (type === 'gradients') return <RiPaintBrushLine className={className} />;

    // Merch Types
    if (type === 'ecobags') return <RiTShirtLine className={className} />;
    if (type === 'caps') return <RiTShirtLine className={className} />;
    if (type === 't-shirts') return <RiTShirtLine className={className} />;

    // Default
    return <Ri24HoursLine className={className} />;
  };

  return getIcon();
}; 