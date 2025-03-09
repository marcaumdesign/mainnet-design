import { ProductCategory, ProductProps, WebsiteTypes } from "@/data/store";
import Image from "next/image";
import Link from "next/link";
import * as Tag from '@/components/ui/tag';
import { 
  RiStore2Line,
  RiRocketLine,
  RiGlobalLine
} from "@remixicon/react";

const icons: Record<WebsiteTypes, React.ComponentType<{ className?: string }>> = {
  'institutional': RiGlobalLine,
  'landing-page': RiRocketLine,
  'e-commerce': RiStore2Line
};

const capitalizer = (text: string) => {
  return text
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function StoreCard(props: ProductProps) {
  return (
    <Link
      href={`/store/${props.slug}`}
      className="relative flex h-fit  flex-col overflow-hidden border border-stroke-soft-200 bg-bg-white-0"
    >
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={`${props.imagesFolder}/thumbnail.png`}
          alt={props.name}
          width={400}
          height={200}
          className="h-full w-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      
      <div className="relative h-fit z-10 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-title-h5 text-text-strong-950">{props.name}</h3>
          <Tag.Root variant='stroke'>
            <Tag.Icon as={icons[props.type as WebsiteTypes]}/>
            {capitalizer(props.type)}
          </Tag.Root>
        </div>
      </div>
    </Link>
  );
}