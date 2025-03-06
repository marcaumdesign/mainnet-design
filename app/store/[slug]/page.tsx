'use client';

import { useRouter, useParams } from 'next/navigation';
import { ProductProps, store } from '@/data/store';
import Header from '@/components/header';
import { RiArrowLeftSLine, RiGift2Line, RiHammerLine, RiRulerLine, RiSearch2Line } from '@remixicon/react';
import Footer from '@/components/footer';
import VerticalRuler from '@/components/vertical-ruler';
import { ProductTypeIcon } from '@/components/product-type-icon';
import { ProductImages } from '@/components/product-images';
import Image from 'next/image';
import * as Label from '@/components/ui/label';
import * as Radio from '@/components/ui/radio';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { version } from 'os';
import { useState } from 'react';
import * as Accordion from '@/components/ui/accordion2';
import { SoftwareTag } from '@/components/ui/software-tag';
import { CategoryTag } from '@/components/ui/category-tag';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = useParams() as { slug: string };
  const product = store.find((item) => item.slug === slug);
  const [selectedVersion, setSelectedVersion] = useState(product?.versions?.[0]);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className='relative flex w-full flex-col items-center'>
      <Header size='full' />
      <div className='bg-bg-white-0 relative inline-flex h-fit w-full max-w-[1100px] flex-col items-start justify-start border-l border-r border-stroke-soft-200'>
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
          <div className='inline-flex h-fit w-[600px] min-w-[300px] border-l border-stroke-soft-200 flex-col items-start justify-start'>
            <div className='flex h-fit flex-col items-start justify-start self-stretch'>
              <div className='inline-flex items-center justify-start self-stretch'>
                <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-8 border border-stroke-soft-200 px-8 py-2'>
                  <div className='text-subheading-xs uppercase text-text-sub-600'>
                    description
                  </div>
                </div>
              </div>
              <div className='inline-flex items-start justify-start gap-10˜self-stretch border-t border-stroke-soft-200 p-8'>
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
                  <SoftwareTag variant="figma" className="shrink grow basis-0" />
                  <SoftwareTag variant="framer" className="shrink grow basis-0" />
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
                <CategoryTag variant="e-commerce" className="shrink grow basis-0" />
                <CategoryTag variant="streetwear" className="shrink grow basis-0" />
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
                      const version = product.versions?.find(v => v.name === value);
                      setSelectedVersion(version);
                    }}
                  >
                    {product.versions?.map((version) => (
                      <Radio.Item key={version.name} value={version.name}>
                        <div className='flex flex-col'>
                          <div className='flex items-center justify-between'>
                            <Label.Root>{version.name}</Label.Root>
                            <span className='text-label-sm text-text-strong-950'>
                              ${version.price}
                            </span>
                          </div>
                          <Label.Sub>{version.description}</Label.Sub>
                        </div>
                      </Radio.Item>
                    ))}
                  </Radio.Group>
                  <div className='p-8'>
                    <RainbowButton
                      onClick={() =>
                        window.open(
                          'https://calendly.com/marcaum/design',
                          '_blank',
                        )
                      }
                      className='w-full px-4 md:px-8'
                    >
                      Get Template (${selectedVersion?.price})
                    </RainbowButton>
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
            <Accordion.Item value='a'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiSearch2Line} />
                Research
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                We are going to search together with all the best references and
                analyze them to check what's going on in this specific world we
                are diving into.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='b'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiRulerLine} />
                Definition
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                After that, we are going to analyze which properties of our
                references are better for your business growth. Then create a
                mixed draft of all those properties to define our prefered way
                to build.{' '}
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='c'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiHammerLine} />
                Building
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                After we decided together which is the best way to build you
                dreams, we are going build it! This part is more introspective
                with our studio.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value='d'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiGift2Line} />
                Delivery
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                After your feedbacks, we are going to reiterate and polish the
                whole project to leave your and your client experience seamless.
                After that we launch your project online!
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;
