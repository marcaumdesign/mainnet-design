export type IconVariants =
  | 'mobile-app'
  | 'landing-page'
  | 'web-app'
  | 'website'
  | 'templates'
  | 'branding'
  | 'social-media'
  | 'e-commerce'
  | 'dashboard';

export interface PortfolioCardProps {
  name: string;
  publishedAt: string;
  link: string;
  description: string;
  work: IconVariants[];
  type: string;
  framework: string[];
  craftedIn: string;
}

export const portfolio: PortfolioCardProps[] = 
[
  {
    "name": "Bee Company",
    "publishedAt": "11/2024",
    "link": "https://www.thatsbee.co/",
    "description": "",
    "work": ["dashboard"],
    "type": "project",
    "framework": ["Figma","Next.JS"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Casinha",
    "publishedAt": "2022",
    "link": "https://casinhabanqueteria.com.br",
    "description": "Casinha is an elegant website project for a catering & food service located in São Paulo. The site is designed to show the events, the place, the food and the team in a unique and fancy way.",
    "work": ["website"],
    "type": "project",
    "framework": ["Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Citadel Security",
    "publishedAt": "05/2024",
    "link": "https://citadelsecurity.com.br/",
    "description": "",
    "work": ["landing-page"],
    "type": "project",
    "framework": ["Figma, Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Crowdfy",
    "publishedAt": "10/2023",
    "link": "https://www.figma.com/community/file/1352089631471215847/crowdfy-dapp-design-system-shadcn-ui",
    "description": "",
    "work": ["web-app","landing-page"],
    "type": "project",
    "framework": ["Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Eternal Games",
    "publishedAt": "09/2024",
    "link": "https://eternalcreations.games/",
    "description": "",
    "work": ["website"],
    "type": "project",
    "framework": ["Figma", "Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Flora",
    "publishedAt": "01/2025",
    "link": "https://flora.framer.media/",
    "description": "",
    "work": ["website"],
    "type": "template",
    "framework": ["Figma", "Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "GoPark",
    "publishedAt": "2023",
    "link": "https://gopark.app.br",
    "description": "GoPark is a startup looking to improve Brazilian urban mobility in parking. Being a multidisciplinary project, where I developed the branding, website and application.",
    "work": ["web-app", "mobile-app", "website"],
    "type": "project",
    "framework": ["Figma", "Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Green Goods",
    "publishedAt": "11/2024",
    "link": "https://www.figma.com/design/aNmqUjGZ5wR4eNaRqfhbQZ/Green-Goods?m=auto&t=a0GfJFOxzXH6gpUF-6",
    "description": "",
    "work": ["mobile-app"],
    "type": "project",
    "framework": ["Figma", "Next.JS"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Greenpill Brasil",
    "publishedAt": "10/2024",
    "link": "https://www.instagram.com/greenpillbr/",
    "description": "",
    "work": ["social-media"],
    "type": "project",
    "framework": ["Figma", "Photoshop"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Greenpill Commons",
    "publishedAt": "09/2024",
    "link": "https://www.figma.com/design/JupVc48WZas1QpgVtgExvY/Commons?m=auto&t=a0GfJFOxzXH6gpUF-6",
    "description": "",
    "work": ["mobile-app"],
    "type": "project",
    "framework": ["Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Lemon Capital",
    "publishedAt": "12/2023",
    "link": "https://hilemon.me/",
    "description": "",
    "work": ["landing-page", "branding"],
    "type": "project",
    "framework": ["Figma","Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  // {
  //   "name": "Markado",
  //   "publishedAt": "01/2025",
  //   "link": "https://markado.framer.ai/",
  //   "description": "",
  //   "work": ["web-app", "landing-page"],
  //   "type": "project",
  //   "framework": ["Figma", "Framer", "Next.JS"],
  //   "craftedIn": "Rio de Janeiro, Brasil"
  // },
  {
    "name": "Nerio Coffee",
    "publishedAt": "02/2025",
    "link": "https://nerio.coffee/",
    "description": "",
    "work": ["landing-page", "branding"],
    "type": "project",
    "framework": [],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Off White",
    "publishedAt": "2021",
    "link": "https://www.figma.com/community/file/1076507546428362439/off-white",
    "description": "A master-piece on how an ultracool branding can become even 'awesomer' with an app with pages for Shop & for Branding.",
    "work": ["mobile-app"],
    "type": "template",
    "framework": ["Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Orange Financial",
    "publishedAt": "",
    "link": "https://orange.financial/",
    "description": "",
    "work": ["landing-page"],
    "type": "project",
    "framework": ["Framer", "Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Stattus4",
    "publishedAt": "2023",
    "link": "https://stattus4.com",
    "description": "Stattus4 is an institutional website displaying beautifully sustainable benefits and water services from Stattus4. The website is composed by 5 pages.",
    "work": ["website"],
    "type": "project",
    "framework": ["Figma", "Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Studio222™",
    "publishedAt": "07/2024",
    "link": "https://s222.framer.ai/",
    "description": "",
    "work": ["e-commerce"],
    "type": "template",
    "framework": ["Framer", "Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Travla",
    "publishedAt": "11/2024",
    "link": "https://www.travla.ai/",
    "description": "",
    "work": ["landing-page", "mobile-app", "branding"],
    "type": "project",
    "framework": ["Framer", "Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Velvet",
    "publishedAt": "2023",
    "link": "https://velvet.investments",
    "description": "Velvet is a simple and captivating branding and website project designed to gather investors and vibrancy into the private markets.",
    "work": ["landing-page"],
    "type": "project",
    "framework": ["Figma", "Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Web3Dev",
    "publishedAt": "",
    "link": "https://www.w3d.community/",
    "description": "",
    "work": ["web-app", "branding"],
    "type": "project",
    "framework": ["Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  }
]
