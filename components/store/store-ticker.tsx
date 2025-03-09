import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { store, ProductCategory } from "@/data/store";
import StoreCard from "./store-card";

interface StoreTickerProps {
  hideSecondMarquee?: boolean;
  category?: ProductCategory;
}

export function StoreTicker({ hideSecondMarquee = false, category }: StoreTickerProps) {
  const filteredProducts = category 
    ? store.filter(product => product.category === category)
    : store;

  if (filteredProducts.length === 0) return null;

  return (
    <div className="z-50 bg-bg-white-0 relative flex h-fit lg:h-fit w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {filteredProducts.map((product) => (
          <StoreCard key={product.name} {...product}/>
        ))}
      </Marquee>
    </div>
  );
}
