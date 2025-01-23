import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import {
  IconVariants,
  PortfolioCardProps,
  portfolio,
} from "@/data/portfolio"
import PortfolioCard from "./portfolio-card";

console.log(portfolio)
const firstRow = portfolio.slice(0, portfolio.length / 2);
const secondRow = portfolio.slice(portfolio.length / 2);


export function PortfolioTicker() {
  return (
    <div className="z-50 bg-bg-white-0 relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((portfolio) => (
          <PortfolioCard key={portfolio.name} {...portfolio}/>
          // <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((portfolio) => (
          <PortfolioCard key={portfolio.name} {...portfolio}/>
        ))}
      </Marquee>
      
    </div>
  );
}
