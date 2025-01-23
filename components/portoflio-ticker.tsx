import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import {
  IconVariants,
  PortfolioCardProps,
  portfolio,
} from "@/data/portfolio"
import PortfolioCard from "./portfolio-card";

// const portfolio = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

console.log(portfolio)
const firstRow = portfolio.slice(0, portfolio.length / 2);
const secondRow = portfolio.slice(portfolio.length / 2);


export function PortfolioTicker() {
  return (
    <div className="z-50 bg-bg-white-0 relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
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
