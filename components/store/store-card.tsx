import { ProductProps } from "@/data/store";
import Image from "next/image";
import Link from "next/link";

export default function StoreCard(props: ProductProps) {
  return (
    <Link
      href={`/store/${props.slug}`}
      className="group relative flex h-[300px] w-[400px] flex-col items-start justify-end overflow-hidden border border-stroke-soft-200 bg-bg-white-0"
    >
      <Image
        src={`${props.imagesFolder}/thumbnail.png`}
        alt={props.name}
        fill
        className="object-cover transition-all duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent" />
      <div className="relative z-10 p-4">
        <h3 className="text-title-h4 text-white">{props.name}</h3>
        <p className="text-paragraph-sm text-white/80">{props.description}</p>
      </div>
    </Link>
  );
}