'use client';

import { portfolio } from '@/data/portfolio';
import { RiArrowLeftUpLine, RiArrowRightUpLine, RiArrowUpLine } from '@remixicon/react';

const PortfolioMap = () => {
  // Agrupa os projetos por categoria de trabalho
  const groupedPortfolio: Record<string, typeof portfolio> = {};

  portfolio.forEach((item) => {
    item.work.forEach((workType) => {
      if (!groupedPortfolio[workType]) {
        groupedPortfolio[workType] = [];
      }
      groupedPortfolio[workType].push(item);
    });
  });

  // Ordena as categorias pelo número de projetos, do maior para o menor
  const sortedCategories = Object.entries(groupedPortfolio).sort((a, b) => b[1].length - a[1].length);

  return (
    <div className="p-8 flex flex-wrap gap-6 w-full">
      {sortedCategories.map(([category, projects]) => (
        <div key={category} className="flex flex-col">
          <h3 className="text-nowrap text-text-sub-600 text-subheading-sm uppercase">{category === "e-commerce" ? (category) : category.replace('-', ' ')}</h3>
          {projects.map((project) => (
            <a 
              key={project.slug} 
              href={`/portfolio/${project.slug}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-strong-950 flex items-center text-paragraph-sm hover:text-text-sub-600"
            >
              <span>{project.name}</span>
              
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PortfolioMap;
