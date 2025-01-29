"use client";

import { useRouter, useParams } from 'next/navigation';
import { PortfolioProps, portfolio } from '@/data/portfolio';
import Header from '@/components/header';

const PortfolioPage = () => {
  const router = useRouter();
  const { slug } = useParams();

  const item = portfolio.find((item) => item.slug === slug);

  if (!item) {
    return <div>Item não encontrado</div>;
  }

  return (
    <div className='flex w-full flex-col items-center'>
      <Header />
      <div className='relative flex h-fit w-full max-w-[600px] flex-col items-center justify-center gap-32 border-l border-r border-stroke-soft-200 bg-bg-white-0 p-4 py-8 lg:p-8'>
        <h1 className='text-title-h1 text-text-strong-950'>{item.name}</h1>
        <p className='text-text-sub-600'>{item.description}</p>
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          {item.link}
        </a>
        {/* Adicione mais detalhes do item do portfólio conforme necessário */}
      </div>
    </div>
  );
};

export default PortfolioPage;