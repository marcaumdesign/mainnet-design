'use client';

import { store } from '@/data/store';
import Header from '@/components/header';
import Footer from '@/components/footer';
import StoreCard from '@/components/store/store-card';
import VerticalRuler from '@/components/vertical-ruler';

export default function StorePage() {
  return (
    <div className='relative flex w-full flex-col items-center'>
      <Header size='full' />
      <div className='relative inline-flex h-fit w-full max-w-[1100px] flex-col items-start justify-start border-l border-r border-stroke-soft-200 bg-bg-white-0'>
        <div className='absolute left-[-50px] flex w-full items-start'>
          <VerticalRuler className='fixed top-0' />
        </div>

        <div className='flex h-fit flex-col items-start justify-center gap-4 self-stretch border-t border-stroke-soft-200 p-4 md:p-8 md:pt-[122px]'>
          <div className='text-title-h0 text-text-strong-950'>
            Store
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2'>
          {store.map((item) => (
            <StoreCard key={item.name} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
