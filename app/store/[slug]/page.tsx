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
                <div className='flex h-fit shrink grow basis-0 items-start justify-start gap-10 border border-stroke-soft-200 px-8 py-[15px]'>
                  <div className='flex h-6 shrink grow basis-0 items-center justify-start gap-2'>
                    <div data-svg-wrapper className='relative'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M20.9996 19.2V21H2.99961V19.2H3.89961V13.1178C3.34554 12.748 2.89135 12.2471 2.57735 11.6596C2.26334 11.0721 2.09924 10.4161 2.09961 9.75C2.09961 9.0057 2.30121 8.2884 2.66931 7.6773L5.11011 3.45C5.1891 3.31319 5.30271 3.19957 5.43952 3.12058C5.57634 3.04159 5.73153 3 5.88951 3H18.1106C18.2686 3 18.4238 3.04159 18.5606 3.12058C18.6974 3.19957 18.811 3.31319 18.89 3.45L21.3218 7.6638C21.8587 8.55558 22.0313 9.61998 21.8037 10.6357C21.5761 11.6515 20.9657 12.5404 20.0996 13.1178V19.2H20.9996ZM6.40971 4.8L4.22001 8.5917C4.00723 9.11743 4.00084 9.70412 4.20213 10.2344C4.40341 10.7646 4.79752 11.1993 5.30557 11.4514C5.81363 11.7034 6.39814 11.7544 6.94213 11.5939C7.48613 11.4335 7.94946 11.0735 8.23941 10.5861C8.54091 9.8328 9.60741 9.8328 9.90981 10.5861C10.0766 11.0041 10.3649 11.3624 10.7374 11.6149C11.1099 11.8673 11.5496 12.0023 11.9996 12.0023C12.4496 12.0023 12.8893 11.8673 13.2618 11.6149C13.6344 11.3624 13.9226 11.0041 14.0894 10.5861C14.3909 9.8328 15.4574 9.8328 15.7598 10.5861C15.8766 10.8736 16.0516 11.1338 16.2738 11.3504C16.4961 11.5671 16.7607 11.7354 17.0511 11.8448C17.3415 11.9542 17.6514 12.0023 17.9613 11.9862C18.2712 11.9701 18.5744 11.89 18.8519 11.7511C19.1293 11.6121 19.3751 11.4173 19.5736 11.1788C19.7721 10.9403 19.9192 10.6633 20.0055 10.3652C20.0919 10.0671 20.1156 9.75444 20.0753 9.44675C20.0349 9.13906 19.9314 8.84304 19.7711 8.5773L17.5886 4.8H6.41061H6.40971Z'
                          fill='#0E121B'
                        />
                      </svg>
                    </div>
                    <div className='text-paragraph-sm text-text-strong-950'>
                      E-Commerce
                    </div>
                  </div>
                </div>
                <div className='flex h-fit shrink grow basis-0 items-start justify-start gap-10 border border-stroke-soft-200 px-8 py-[15px]'>
                  <div className='flex h-6 shrink grow basis-0 items-center justify-start gap-2'>
                    <div data-svg-wrapper className='relative'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.3 3.8999C9.3 4.61599 9.58446 5.30274 10.0908 5.80909C10.5972 6.31544 11.2839 6.5999 12 6.5999C12.7161 6.5999 13.4028 6.31544 13.9092 5.80909C14.4155 5.30274 14.7 4.61599 14.7 3.8999H20.1C20.3387 3.8999 20.5676 3.99472 20.7364 4.16351C20.9052 4.33229 21 4.56121 21 4.7999V11.0999C21 11.3386 20.9052 11.5675 20.7364 11.7363C20.5676 11.9051 20.3387 11.9999 20.1 11.9999H18.2991L18.3 19.1999C18.3 19.4386 18.2052 19.6675 18.0364 19.8363C17.8676 20.0051 17.6387 20.0999 17.4 20.0999H6.6C6.3613 20.0999 6.13239 20.0051 5.9636 19.8363C5.79482 19.6675 5.7 19.4386 5.7 19.1999L5.6991 11.999L3.9 11.9999C3.66131 11.9999 3.43239 11.9051 3.2636 11.7363C3.09482 11.5675 3 11.3386 3 11.0999V4.7999C3 4.56121 3.09482 4.33229 3.2636 4.16351C3.43239 3.99472 3.66131 3.8999 3.9 3.8999H9.3ZM19.2 5.699H16.1247L16.1094 5.7359C15.7681 6.49897 15.2211 7.15194 14.5296 7.62166C13.8381 8.09138 13.0295 8.3593 12.1944 8.3954L12 8.3999C11.131 8.39998 10.2805 8.14847 9.55126 7.67574C8.82204 7.20301 8.24527 6.52928 7.8906 5.7359L7.8744 5.6999H4.8V10.1999L7.4991 10.199V18.2999H16.5L16.4991 10.1999L19.2 10.199V5.699Z'
                          fill='#0E121B'
                        />
                      </svg>
                    </div>
                    <div className='text-paragraph-sm text-text-strong-950'>
                      Streetwear
                    </div>
                  </div>
                </div>
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
