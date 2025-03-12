'use client';

import { useRouter, useParams } from 'next/navigation';
import { ProductProps, store } from '@/data/store';
import Header from '@/components/header';
import {
  RiArrowGoBackLine,
  RiArrowLeftSLine,
  RiCheckboxCircleFill,
  RiCheckDoubleFill,
  RiCheckFill,
  RiCheckLine,
  RiGift2Line,
  RiHammerLine,
  RiQuestionLine,
  RiRulerLine,
  RiSearch2Line,
  RiShieldCheckLine,
  RiShieldLine,
  RiShoppingCart2Fill,
  RiTruckLine,
  RiVerifiedBadgeLine,
} from '@remixicon/react';
import Footer from '@/components/footer';
import VerticalRuler from '@/components/vertical-ruler';
import { ProductTypeIcon } from '@/components/product-type-icon';
import { ProductImages } from '@/components/product-images';
import Image from 'next/image';
import * as Label from '@/components/ui/label';
import * as Radio from '@/components/ui/radio';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { version } from 'os';
import { useState, useEffect } from 'react';
import * as Accordion from '@/components/ui/accordion2';
import { SoftwareTag } from '@/components/ui/software-tag';
import { CategoryTag } from '@/components/ui/category-tag';
import * as Button from '@/components/ui/button';
import { Banner } from '@/components/ui/banner';
import { cookies } from 'next/headers';
import { StoreTicker } from '@/components/store/store-ticker';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = useParams() as { slug: string };
  const product = store.find((item) => item.slug === slug);
  const [selectedVersion, setSelectedVersion] = useState(
    product?.versions?.[0],
  );
  const [userCountry, setUserCountry] = useState<string>('US');

  useEffect(() => {
    const userCountry = document.cookie
      .split('; ')
      .find(row => row.startsWith('user-country='))
      ?.split('=')[1];
    if (userCountry) {
      setUserCountry(userCountry);
    }
  }, []);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className='relative flex w-full flex-col items-center'>
      <Header size='full' />
      <div className='relative inline-flex h-fit w-full max-w-[1100px] flex-col items-start justify-start border-l border-r border-stroke-soft-200 bg-bg-white-0'>
        <div className='absolute left-[-50px] flex w-full items-start'>
          <VerticalRuler className='fixed top-0' />
        </div>

        {/* Hero Section */}
        <div className='flex h-fit flex-col items-start justify-center gap-4 self-stretch border-t border-stroke-soft-200 p-4 md:p-8 md:pt-[122px]'>
          <div className='inline-flex items-center justify-center gap-1'>
            <div
              className='cursor-pointer text-subheading-sm uppercase text-text-soft-400 hover:text-text-strong-950'
              onClick={() => router.push('/')}
            >
              Home
            </div>
            <RiArrowLeftSLine />
            <div
              className='text-subheading-sm uppercase text-text-soft-400 hover:text-text-strong-950'
              onClick={() => router.push('/store')}
            >
              Store
            </div>
            <RiArrowLeftSLine />
            <div className='text-nowrap text-subheading-sm uppercase text-text-strong-950'>
              {product.slug}
            </div>
          </div>
          <div className='text-title-h0 text-text-strong-950'>
            {product.name}
          </div>
        </div>

        {/* Main Content */}
        <div className='flex items-start justify-center self-stretch border-t border-stroke-soft-200'>
          {/* Images */}
          <div className='flex w-full items-start justify-center gap-4 self-stretch'>
            <ProductImages imagesFolder={product.imagesFolder} />
          </div>
          {/* Product Details */}
          <div className='inline-flex h-fit w-[600px] min-w-[300px] flex-col items-start justify-start border-l border-stroke-soft-200'>
            <div className='flex h-fit flex-col items-start justify-start self-stretch'>
              <div className='inline-flex items-center justify-start self-stretch'>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-8 border border-stroke-soft-200 px-8 py-2'>
                  <div className='text-subheading-xs uppercase text-text-sub-600'>
                    description
                  </div>
                </div>
              </div>
              <div className='gap-10˜self-stretch inline-flex items-start justify-start border-t border-stroke-soft-200 p-8'>
                <div className='shrink grow basis-0'>
                  <span className='text-paragraph-sm text-text-strong-950'>
                    {product.description}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex h-fit flex-col items-start justify-start self-stretch'>
              <div className='flex h-fit flex-col items-start justify-start self-stretch'>
                <div className='inline-flex items-center justify-start self-stretch'>
                  <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-8 border border-stroke-soft-200 px-8 py-2'>
                    <div className='text-subheading-xs uppercase text-text-sub-600'>
                      SOFTWARES
                    </div>
                  </div>
                </div>
                <div className='inline-flex items-start justify-start self-stretch'>
                  <SoftwareTag
                    variant='figma'
                    className='shrink grow basis-0'
                  />
                  <SoftwareTag
                    variant='framer'
                    className='shrink grow basis-0'
                  />
                </div>
              </div>
            </div>
            <div className='flex h-fit flex-col items-start justify-start self-stretch'>
              <div className='inline-flex items-center justify-start self-stretch'>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-8 border border-stroke-soft-200 px-8 py-2'>
                  <div className='text-subheading-xs uppercase text-text-sub-600'>
                    categories
                  </div>
                </div>
              </div>
              <div className='inline-flex items-start justify-start self-stretch'>
                <CategoryTag
                  variant='e-commerce'
                  className='shrink grow basis-0'
                />
                <CategoryTag
                  variant='streetwear'
                  className='shrink grow basis-0'
                />
              </div>
            </div>
            <div className='flex h-fit flex-col items-start justify-start self-stretch'>
              <div className='inline-flex items-center justify-start self-stretch'>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-8 border border-stroke-soft-200 px-8 py-2'>
                  <div className='text-subheading-xs uppercase text-text-sub-600'>
                    versions
                  </div>
                </div>
              </div>
              <div className='flex h-fit flex-col items-start justify-start self-stretch'>
                <div className='flex flex-col'>
                  <Radio.Group
                    defaultValue={product.versions?.[0]?.name}
                    onValueChange={(value) => {
                      const version = product.versions?.find(
                        (v) => v.name === value,
                      );
                      setSelectedVersion(version);
                    }}
                  >
                    {product.versions?.map((version) => (
                      <Radio.Item key={version.name} value={version.name}>
                        <div className='flex flex-col'>
                          <div className='flex items-center justify-between'>
                            <Label.Root>{version.name}</Label.Root>
                            <span className='text-paragraph-md text-text-strong-950'>
                              ${version.price}
                            </span>
                          </div>
                          <Label.Sub>{version.description}</Label.Sub>
                        </div>
                      </Radio.Item>
                    ))}
                  </Radio.Group>
                  <div className='flex flex-col gap-2 p-4'>
                    <RainbowButton
                      onClick={() =>
                        window.open(
                          selectedVersion?.paymentLink,
                          '_blank',
                        )
                      }
                      className='w-full px-4 py-4 gap-1 md:px-8'
                    >
                      <RiShoppingCart2Fill className='w-5 h-5' />
                      Get Template (${selectedVersion?.price})
                    </RainbowButton>
                    <Button.Root
                      variant='neutral'
                      mode='stroke'
                      className='w-full px-4 text-label-md md:px-8 py-6'
                    >
                      <Button.Icon as={RiVerifiedBadgeLine} />
                      Get all templates for $7.77/mo
                    </Button.Root>
                    <Banner 
                      icon={RiCheckboxCircleFill}
                      backgroundColor="#e0faec"
                      iconColor="text-green-500"
                      userCountry={userCountry}
                    >
                      <span className='text-[#0d111b]'>Use </span>
                      <span className='font-bold leading-none text-[#0d111b]'>PPP40</span>
                      <span className='text-[#0d111b]'>
                        {' '}promo code to get a 40% discount for living in a
                        country choosen for power purchase parity program!
                      </span>
                    </Banner>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex h-fit flex-col items-start justify-start self-stretch'>
              <div className='inline-flex items-center justify-start self-stretch'>
                <div className='border- inline-flex shrink grow basis-0 flex-col items-start justify-center gap-8 border-t border-stroke-soft-200 px-8 py-2'>
                  <div className='text-subheading-xs uppercase text-text-sub-600'>
                    Details
                  </div>
                </div>
              </div>
              <Accordion.Root type='single' collapsible className='w-full'>
                <Accordion.Item value='d'>
                  <Accordion.Trigger className='text-paragraph-md'>
                    <Accordion.Icon as={RiTruckLine} />
                    Shipping
                    <Accordion.Arrow />
                  </Accordion.Trigger>
                  <Accordion.Content className='px-[30px]'>
                    The product will be{' '}
                    <span className='text-text-strong-950'>
                      delivered via email
                    </span>{' '}
                    after purchase.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value='a'>
                  <Accordion.Trigger className='text-paragraph-md'>
                    <Accordion.Icon as={RiQuestionLine} />
                    Help
                    <Accordion.Arrow />
                  </Accordion.Trigger>
                  <Accordion.Content className='px-[30px]'>
                    For any questions, please contact me at{' '}
                    <a
                      href='mailto:marcus@mainnet.design'
                      className='text-text-strong-950'
                    >
                      {' '}
                      marcus@mainnet.design
                    </a>{' '}
                    or{' '}
                    <a
                      href='https://wa.me/14075092169'
                      target='_blank'
                      className='text-text-strong-950'
                    >
                      +1 (407) 509-2169
                    </a>{' '}
                    on WhatsApp.
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value='b'>
                  <Accordion.Trigger className='text-paragraph-md'>
                    <Accordion.Icon as={RiShieldCheckLine} />
                    License
                    <Accordion.Arrow />
                  </Accordion.Trigger>
                  <Accordion.Content className='px-[30px]'>
                    You can use the product for{' '}
                    <span className='text-text-strong-950'>
                      personal and commercial projects
                    </span>
                    , but you cannot resell the product at any way. For more
                    information, please check our{' '}
                    <a
                      href='https://mainnet.design/terms'
                      target='_blank'
                      className='text-text-strong-950'
                    >
                      terms of service
                    </a>
                    .
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value='c'>
                  <Accordion.Trigger className='text-paragraph-md'>
                    <Accordion.Icon as={RiArrowGoBackLine} />
                    Refunds
                    <Accordion.Arrow />
                  </Accordion.Trigger>
                  <Accordion.Content className='px-[30px]'>
                    Due to the digital nature of the product,{' '}
                    <span className='text-text-strong-950'>
                      refunds are not available.
                    </span>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </div>
          
        </div>

        <div className='flex w-full flex-col items-start justify-start gap-2 border-t border-stroke-soft-200 p-4 md:p-8'>
          <div className='self-stretch text-subheading-sm uppercase text-text-sub-600'>
            Store
          </div>
          <div className='w-full text-title-h4 text-text-strong-950'>
            More Products
          </div>
        </div>
        <StoreTicker hideSecondMarquee category={product.category} />
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
