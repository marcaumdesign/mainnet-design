'use client';

import { useRouter, useParams } from 'next/navigation';

import Header from '@/components/header';
import { RiArrowLeftSLine } from '@remixicon/react';
import Footer from '@/components/footer';
import VerticalRuler from '@/components/vertical-ruler';
import StoreCard from '@/components/store/store-card';
import { store, ProductProps } from '@/data/store';

const Page = () => {
  const items: ProductProps[] = store;
  const router = useRouter();

  return (
    <div className='relative flex w-full flex-col items-center'>
      <Header size='full' />
      <div className='relative inline-flex h-fit w-full max-w-[1100px] flex-col items-start justify-start border-l border-r border-stroke-soft-200 bg-bg-white-0'>
        <div className='absolute left-[-50px] flex w-full items-start'>
          <VerticalRuler className='fixed top-0' />
        </div>
        <div className='flex h-fit flex-col items-start justify-center gap-4 self-stretch border-t border-stroke-soft-200 p-4 pt-[122px] md:p-8 md:pt-[122px]'>
          <div className='inline-flex items-center justify-center gap-1'>
            <div
              className='cursor-pointer text-subheading-sm uppercase text-text-soft-400 hover:text-text-strong-950'
              onClick={() => router.push('/')}
            >
              Home
            </div>
            <RiArrowLeftSLine />
            <div
              className='text-subheading-sm uppercase text-text-strong-950 hover:text-text-strong-950'
              onClick={() => router.push('/store')}
            >
              Store
            </div>
          </div>
          <div className='flex align-top'>
            <div className='text-title-h0 text-text-strong-950'>Store</div>
            <div className='text-title-h5'>[{items.length}]</div>
          </div>
        </div>

        <div className='w-full flex-col border-t border-stroke-soft-200 md:grid md:grid-cols-2'>
          {items.map((item) => (
            <StoreCard key={item.name} {...item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
