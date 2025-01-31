import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import {
  Works,
  PortfolioProps,
  portfolio,
} from "@/data/portfolio"
import PortfolioCard from "./portfolio-card";

const firstRow = portfolio.slice(0, portfolio.length / 2);
const secondRow = portfolio.slice(portfolio.length / 2);

interface PortfolioTickerProps {
  hideSecondMarquee?: boolean;
}

export function PortfolioTicker({ hideSecondMarquee = false }: PortfolioTickerProps) {
  return (
    <div className="z-50 bg-bg-white-0 relative flex h-fit lg:h-fit w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((portfolio) => (
          <PortfolioCard key={portfolio.name} {...portfolio}/>
        ))}
      </Marquee>
      {!hideSecondMarquee && (
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((portfolio) => (
            <PortfolioCard key={portfolio.name} {...portfolio}/>
          ))}
        </Marquee>
      )}
    </div>
  );
}
