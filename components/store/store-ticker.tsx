import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { store } from "@/data/store";
import StoreCard from "./store-card";

interface StoreTickerProps {
  hideSecondMarquee?: boolean;
}

export function StoreTicker({ hideSecondMarquee = false }: StoreTickerProps) {
  return (
    <div className="z-50 bg-bg-white-0 relative flex h-fit lg:h-fit w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {store.map((product) => (
          <StoreCard key={product.name} {...product}/>
        ))}
      </Marquee>
    </div>
  );
}
