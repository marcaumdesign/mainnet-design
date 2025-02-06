export type Works =
  | 'mobile-app'
  | 'landing-page'
  | 'web-app'
  | 'website'
  | 'templates'
  | 'branding'
  | 'social-media'
  | 'e-commerce'
  | 'dashboard';

export const works: Works[] = 
  ['mobile-app'
  ,'landing-page'
  ,'web-app'
  ,'website'
  ,'templates'
  ,'branding'
  ,'social-media'
  ,'e-commerce'
  ,'dashboard'];

export interface PortfolioProps {
  name: string;
  slug: string;
  publishedAt: string;
  link: string;
  description: string;
  work: Works[];
  type: string;
  framework: string[];
  craftedIn: string;
}

export const portfolio: PortfolioProps[] = 
[
  {
    "name": "Bee Company",
    "slug": "bee-company",
    "publishedAt": "11/2024",
    "link": "https://www.thatsbee.co/",
    "description": "Bee Company is a social media dashboard developed to show Bee's client the perfomance of different creators into a campaign.",
    "work": ["dashboard"],
    "type": "project",
    "framework": ["Figma","Next.JS"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Casinha",
    "slug": "casinha",
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
    "slug": "citadel-security",
    "publishedAt": "05/2024",
    "link": "https://citadelsecurity.com.br/",
    "description": "Citadel is a private security company based in São Paulo and Rio de Janeiro. The landing page was designed to bring people more and more ",
    "work": ["landing-page"],
    "type": "project",
    "framework": ["Figma, Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Crowdfy",
    "slug": "crowdfy",
    "publishedAt": "10/2023",
    "link": "https://www.figma.com/community/file/1352089631471215847/crowdfy-dapp-design-system-shadcn-ui",
    "description": "Crowdfy is a crowdfuding platform open-source template Created inside two hackathons. It is a file with landing page and the donation platform.",
    "work": ["web-app","landing-page"],
    "type": "template",
    "framework": ["Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Eternal Creations",
    "slug": "eternal-creations",
    "publishedAt": "09/2024",
    "link": "https://eternalcreations.games/",
    "description": "Eternal is gaming company based on Germany. This website holds an awesome game showing case CMS.",
    "work": ["website"],
    "type": "project",
    "framework": ["Figma", "Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Flora",
    "slug": "flora",
    "publishedAt": "01/2025",
    "link": "https://flora.framer.media/",
    "description": "Flora is a agrotechnology SaaS made for web desginer that want to new designs to their clients. This template is our best template until now.",
    "work": ["website"],
    "type": "template",
    "framework": ["Figma", "Framer"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "GoPark",
    "slug": "gopark",
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
    "slug": "green-goods",
    "publishedAt": "11/2024",
    "link": "https://www.figma.com/design/aNmqUjGZ5wR4eNaRqfhbQZ/Green-Goods?m=auto&t=a0GfJFOxzXH6gpUF-6",
    "description": "GreenGoods it's a revolutionary app social garden powered by GreenPill Dev Guild. It's built to help our green remain.",
    "work": ["mobile-app"],
    "type": "project",
    "framework": ["Figma", "Next.JS"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "GreenPill Brasil",
    "slug": "greenpill-brasil",
    "publishedAt": "10/2024",
    "link": "https://www.instagram.com/greenpillbr/",
    "description": "GreenPill Brasil social media it's a series of posts that explain through a beautiful design the beauty of regeneration and coordinatio.",
    "work": ["social-media"],
    "type": "project",
    "framework": ["Figma", "Photoshop"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "GreenPill Commons",
    "slug": "greenpill-commons",
    "publishedAt": "09/2024",
    "link": "https://www.figma.com/design/JupVc48WZas1QpgVtgExvY/Commons?m=auto&t=a0GfJFOxzXH6gpUF-6",
    "description": "Greenpill Commons is a mobile app made to show non -profit projects for donors and philanthropists.",
    "work": ["mobile-app"],
    "type": "project",
    "framework": ["Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Lemon Capital | BTG",
    "slug": "lemon-capital",
    "publishedAt": "12/2023",
    "link": "https://hilemon.me/",
    "description": "Lemon Capital is a focused investment advice and creative weight. A brand book and a panding page was made for it.",
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
    "slug": "nerio-coffee",
    "publishedAt": "02/2025",
    "link": "https://nerio.coffee/",
    "description": "Nério Coffee is a premium robusta coffee brand on Amazon. Their Branding and Landing Page reveals the beauty of a Ruler and Explorer visuals.",
    "work": ["landing-page", "branding"],
    "type": "project",
    "framework": [],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Off White",
    "slug": "off-white",
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
    "slug": "orange-financial",
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
    "slug": "stattus4",
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
    "slug": "studio222",
    "publishedAt": "07/2024",
    "link": "https://s222.framer.ai/",
    "description": "A regenerative streetwear brand that sells techwear made with sustainable materials.",
    "work": ["e-commerce"],
    "type": "template",
    "framework": ["Framer", "Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Travla",
    "slug": "travla",
    "publishedAt": "11/2024",
    "link": "https://www.travla.ai/",
    "description": "Travla is a great solution for travlers who are tired with all complications to make simple travels.",
    "work": ["landing-page", "mobile-app", "branding"],
    "type": "project",
    "framework": ["Framer", "Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  },
  {
    "name": "Velvet",
    "slug": "velvet",
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
    "slug": "web3dev",
    "publishedAt": "",
    "link": "https://www.w3d.community/",
    "description": "Web3Dev is a Web3 Developers community that built a web app to centralize all resources like Jobs and Courses into one place.",
    "work": ["web-app", "branding"],
    "type": "project",
    "framework": ["Figma"],
    "craftedIn": "Rio de Janeiro, Brasil"
  }
]

