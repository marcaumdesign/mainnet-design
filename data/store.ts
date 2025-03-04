// Tipos de Assets
export type AssetTypes = '3d' | 'illustrations' | 'mockups' | 'gradients';

// Tipos de Marcas
export type BrandTypes = 'SaaS' | 'Agency' | 'Business';

// Tipos de Websites
export type WebsiteTypes = 'institutional' | 'landing-page' | 'e-commerce';

// Tipos de Merch
export type MerchTypes = 'ecobags' | 'caps' | 't-shirts';

// Categorias principais
export type ProductCategory = 'assets' | 'brand-book' | 'website' | 'merch';

// Todos os tipos possíveis de produtos
export type ProductTypes = AssetTypes | BrandTypes | WebsiteTypes | MerchTypes;

export interface ProductProps {
  name: string;
  slug: string;
  link: string;
  description: string;
  archetypes?: Archetypes[];
  category: ProductCategory;
  type: ProductTypes;
  
  imagesFolder: string;
  versions?: {
    id: number;
    name: string;
    price: number;
    description: string;
  }[];
  software: string[];
}


// Arquétipos de marca
export type Archetypes = 
  | 'innocent'    // Inocente
  | 'sage'        // Sábio
  | 'explorer'    // Explorador
  | 'hero'        // Herói
  | 'outlaw'      // Fora da Lei
  | 'magician'    // Mago
  | 'everyman'    // Cara Comum
  | 'lover'       // Amante
  | 'jester'      // Bobo da Corte
  | 'caregiver'   // Prestativo
  | 'creator'     // Criador
  | 'ruler';      // Governante

export const store: ProductProps[] = [
  {
    name: "Studio 222",
    slug: "studio222",
    link: "https://marcaum.lemonsqueezy.com/buy/8a097a7c-74fa-448f-9beb-5ab5c044e48b",
    description: "Studio 222 is a high-tech appereal company selling clothes and utilities that will regenerate your style and energy through solar energy and beauty.",
    category: "website",
    type: "e-commerce",

    imagesFolder: "/images/store/studio222",
    versions: [
      {
        id: 1,
        name: "Figma",
        price: 22.00,
        description: "Get start with a Figma file of the website"
      },
      {
        id: 2,
        name: "Framer",
        price: 47.00,
        description: "Launch your website online faster than never with Framer"
      },
      {
        id: 3,
        name: "Brand Book",
        price: 47.00,
        description: "Organize your brand better with this rich guidelines"
      },
      {
        id: 4,
        name: "Brand Book + Framer + Figma",
        price: 79.00,
        description: "The most powerful tool for launch your business today"
      }
    ],
    software: ["Figma", "Framer"]
  },
  {
    name: "Flora™",
    slug: "flora",
    link: "https://marcaum.lemonsqueezy.com/buy/a14676d4-9e7a-4ac1-9573-4a9234362295",
    description: "Launch a SaaS website that makes users feeling just by the simple power of nature and a clean design. With this 5 pages you have the essential to launch any software company that want to contribute and make the world a better place.",
    category: "website",
    type: "institutional",

    imagesFolder: "/images/store/flora",
    versions: [
      {
        id: 1,
        name: "Website Template",
        price: 77.00,
        description: "Get the website template on Framer with 5 pages"
      },
      {
        id: 2,
        name: "Website Template + Figma File",
        price: 115.00,
        description: "Get your website on Framer + Figma"
      },
      {
        id: 3,
        name: "Landing Page Template",
        price: 30.00,
        description: "Only the homepage and 404"
      }
    ],
    software: ["Framer", "Figma"]
  }
];