import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import {
  Works,
  PortfolioProps,
  portfolio,
} from "@/data/portfolio"
import PortfolioCard from "./portfolio-card";
import { useRouter } from "next/navigation";

const firstRow = portfolio.slice(0, portfolio.length / 2);
const secondRow = portfolio.slice(portfolio.length / 2);

interface PortfolioTickerProps {
  hideSecondMarquee?: boolean;
}

export function PortfolioTicker({ hideSecondMarquee = false }: PortfolioTickerProps) {
  const router = useRouter();

  const handleProjectClick = (slug: string) => {
    // Reseta o scroll para o topo
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Navega para o novo projeto
    router.push(`/portfolio/${slug}`);
  };

  return (
    <div className="z-50 bg-bg-white-0 relative flex h-fit lg:h-fit w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((portfolio) => (
          <div key={portfolio.name} onClick={() => handleProjectClick(portfolio.slug)}>
            <PortfolioCard {...portfolio}/>
          </div>
        ))}
      </Marquee>
      {!hideSecondMarquee && (
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((portfolio) => (
            <div key={portfolio.name} onClick={() => handleProjectClick(portfolio.slug)}>
              <PortfolioCard {...portfolio}/>
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
}
