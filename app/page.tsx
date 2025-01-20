'use client';

import * as Accordion from '@/components/ui/accordion2';
import {
  RiBook2Line,
  RiBuilding4Line,
  RiCompassDiscoverLine,
  RiCursorLine,
  RiGift2Line,
  RiGroupLine,
  RiHammerLine,
  RiInstagramLine,
  RiPhoneFindLine,
  RiRocket2Line,
  RiRulerLine,
  RiSearch2Line,
  RiTv2Line,
  RiUserLine,
  RiAccountCircleLine,
  RiMapPinTimeLine,
  RiQuestionLine,
  RiMovie2Line,
} from '@remixicon/react';

import React, { useRef } from 'react';
import Header from '@/components/header';
import { RainbowButton } from '@/components/ui/rainbow-button';
import HyperText from '@/components/ui/hyper-text';
import VerticalRuler from '@/components/vertical-ruler';

export default function Home() {

  const parentRef = useRef(null);

  return (
    <div className='flex w-full flex-col items-center'>
      <Header />
      <div className='relative flex h-fit w-full max-w-[600px] flex-col items-center justify-center gap-32 border-l border-r border-stroke-soft-200 p-8'>
        <VerticalRuler/>

        <div className='flex h-[500px] flex-col items-start justify-end gap-2.5 self-stretch'>
          <HyperText className='text-text-sub-600'>
            16:20:23 (AMERICA/SAO PAULO)
          </HyperText>

          <div className='text-title-h0 text-text-strong-950'>
            Design made to last.
          </div>
        </div>
      </div>
      {/* Portoflio */}
      <div className='z-50 inline-flex items-start justify-start self-stretch'>
        <div className='inline-flex w-[842px] flex-col items-start justify-start border border-stroke-soft-200'>
          <img
            className='h-[621px] self-stretch'
            src='https://picsum.photos/842/621'
          />
          <div className='inline-flex items-center justify-between self-stretch border-t border-stroke-soft-200 bg-bg-white-0 p-4'>
            <div className="font-['Inter Display'] text-[32px] font-medium leading-10 text-text-strong-950">
              Flora™
            </div>
            <div className='text-paragraph-md text-text-sub-600'>
              From premium visual design services to open-source tools for
              builders.
            </div>
          </div>
        </div>
        <div className='inline-flex w-[842px] flex-col items-start justify-start border border-stroke-soft-200'>
          <img
            className='h-[621px] w-[894px]'
            src='https://picsum.photos/842/621'
          />
          <div className='inline-flex items-center justify-between self-stretch border-t border-stroke-soft-200 bg-bg-white-0 p-4'>
            <div className="font-['Inter Display'] text-[32px] font-medium leading-10 text-text-strong-950">
              Whoop®
            </div>
            <div className='text-paragraph-md text-text-sub-600'>
              From premium visual design services to open-source tools for
              builders.
            </div>
          </div>
        </div>
      </div>
      <div className='flex h-fit w-full max-w-[600px] flex-col items-start justify-start'>
       
        {/* What? */}

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>What? </span>
              <span className='text-title-h3 text-text-soft-400'>
                We are an studio in love with building thing, these are what we
                can do together
              </span>
            </div>
          </div>
            <div className='grid grid-cols-2 self-stretch'>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiTv2Line className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Web Apps
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiPhoneFindLine className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Mobile Apps
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiRocket2Line className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Landing Pages
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiCursorLine className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Websites
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiCompassDiscoverLine className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Design Systems
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start self-stretch'>
              <div className='flex h-fit shrink grow basis-0 items-start justify-start gap-10 border border-stroke-soft-200 px-8 py-[15px]'>
                <div className='flex h-fit w-full items-center justify-start gap-4'>
                  <RiBook2Line className='text-text-sub-600' />
                  <div className='text-paragraph-lg text-text-strong-950'>
                    Branding
                  </div>
                </div>
              </div>
            </div>
            <div className='flex shrink grow basis-0 items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiInstagramLine className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Social Media
                </div>
              </div>
            </div>

            <div className='flex shrink grow basis-0 items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiMovie2Line className='text-text-sub-600'/>
                <div className='text-paragraph-lg text-text-strong-950'>
                  Motion Design
                </div>
              </div>
            </div>
          </div>

          
            

        </div>
        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>How? </span>
              <span className='text-title-h3 text-text-soft-400'>
                Mainnet simplifies the design process and breaks down into 4
                steps to develop even faster
              </span>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='flex h-fit w-[264px] items-center justify-start gap-4'>
              <RiSearch2Line className='text-text-sub-600' />
              <div className='text-paragraph-lg text-text-strong-950'>
                Research
              </div>
            </div>
            <div className='text-paragraph-md text-text-sub-600'>
              Starts broad, narrows focus for problem definition, then expands
              and iterates for solutions.
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='flex h-fit w-[264px] items-center justify-start gap-4'>
              <RiRulerLine className='text-text-sub-600' />
              <div className='text-paragraph-lg text-text-strong-950'>
                Definition
              </div>
            </div>
            <div className='text-paragraph-md text-text-sub-600'>
              Involves understanding user needs and defining the problem,
              followed by ideation and prototyping solutions.
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='flex h-fit w-[264px] items-center justify-start gap-4'>
              <RiHammerLine className='text-text-sub-600' />
              <div className='text-paragraph-lg text-text-strong-950'>
                Building
              </div>
            </div>
            <div className='text-paragraph-md text-text-sub-600'>
              Refining concepts into detailed solutions, testing and iterating
              for final implementation.
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='flex h-fit w-[264px] items-center justify-start gap-4'>
              <RiGift2Line className='text-text-sub-600' />
              <div className='text-paragraph-lg text-text-strong-950'>
                Delivery
              </div>
            </div>
            <div className='text-paragraph-md text-text-sub-600'>
              Finalizing and implementing the solutions, and evaluating success
              for further improvement and iteration.
            </div>
          </div>
        </div>

        {/* Who */}

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>Who? </span>
              <span className='text-title-h3 text-text-soft-400'>
                Who believe on a better world by design.
              </span>
            </div>
          </div>

          <Accordion.Root type='single' collapsible className='w-full'>
              <Accordion.Item value='a'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiUserLine} />
                  Solopreneurs
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  Have the best experience with a designer ever on your entire life
                  while you upgrade your design to scale your business.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value='b'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiGroupLine} />
                  Startups
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  Let's kick-off even futher your business with a Brand Book, Product Design
                  and an awesome landing page.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value='c'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiBuilding4Line} />
                  Companies
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  If you feel a little bit oudated or with #FOMO, we should have talked yesterday. 
                  We really need to update your deisgn
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
        </div>
        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>
                Who's behind Mainnet?{' '}
              </span>
              <span className='text-title-h3 text-text-soft-400'>
                What makes us different from others agencies and studios
              </span>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-4 self-stretch border border-stroke-soft-200 p-8'>
            <div className='shrink grow basis-0'>
              <span className='text-paragraph-md text-text-strong-950'>
                Hey there, I'm Marcus (also known as Marcaum), a 22-year-old
                carioca designer who is passionate about the color green and
                creating regenerative solutions.
                <br />
                <br />
                With over 8 years of experience, I’ve worked with innovative
                companies like V
              </span>
              <span className='text-paragraph-md text-text-strong-950'>
                elvet, Lemon Capital (BTG), Eternal Games, GreenPill
              </span>
              <span className='text-paragraph-md text-text-strong-950'>
                , and others, crafting solutions that make a meaningful impact
                on businesses and their users.
                <br />
                <br />
                In 2023, I had the privilege of working at{' '}
              </span>
              <span className='text-paragraph-md text-text-strong-950'>
                Framer as a Product Specialist
              </span>
              <span className='text-paragraph-md text-text-strong-950'>
                , an experience that deepened my expertise and strengthened my
                role as an Expert and Partner in the design industry.
                <br />
                <br />
                Now, with Mainnet Design, I’m channeling all of this experience
                into helping businesses thrive while{' '}
              </span>
              <span className='text-paragraph-md text-text-strong-950'>
                focusing on sustainability and innovation
              </span>
              <span className='text-paragraph-md text-text-strong-950'>
                . If you're looking for a partner to bring your ideas to life
                and make a positive impact, let’s make it happen.
              </span>
            </div>
            <img
              className='sticky top-[150px] h-[154px] w-[154px] rounded-full object-cover'
              src='images/marcaum.jpg'
            />
          </div>
        </div>

        {/* FAQ */}

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>
                Questions?
              </span>
              <span className='text-title-h3 text-text-soft-400'>
                {' '}
                Please, d
              </span>
              <span className='text-title-h3 text-text-soft-400'>
                on't leave any doubts
              </span>
            </div>
          </div>

          <div className='w-full'>
            <Accordion.Root type='single' collapsible className='w-full'>
              <Accordion.Item value='a'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiAccountCircleLine} />
                  How do I update my account information?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  Insert the accordion description here. It would look better as
                  two lines of text.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value='b'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiQuestionLine} />
                  What payment methods are accepted?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  Major credit and debit cards like Visa, MasterCard, and
                  American Express, as well as digital payment options like
                  PayPal and Apple Pay.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value='c'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiMapPinTimeLine} />
                  How can I track my order?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  Insert the accordion description here. It would look better as
                  two lines of text.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
        <div className='flex h-[512px] flex-col items-start justify-start self-stretch'>
          <div className='flex h-[352px] flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>
                Refer and earn.
              </span>
              <span className='text-title-h3 text-text-soft-400'>
                {' '}
                Send us clients and get free money!
              </span>
            </div>
          </div>
          <div className='inline-flex items-center justify-start gap-4 self-stretch border border-stroke-soft-200 p-8'>
            <div className='text-paragraph-md text-text-sub-600'>
              Too busy to work? Send some clients on our way and receive $250
              for each project closed doing absolutely nothing, free money!
            </div>

            <RainbowButton>Refer Client</RainbowButton>
          </div>
        </div>
        <div className='inline-flex items-center justify-between self-stretch border border-stroke-soft-200 px-8 py-2.5'>
          <div>
            <span className='text-paragraph-sm text-text-strong-950'>
              Mainnet Design © 2025.{' '}
            </span>
            <span className='text-paragraph-sm text-text-soft-400'>
              All Rights Reserved{' '}
            </span>
          </div>
          <div>
            <span className='text-paragraph-sm text-text-strong-950'>22°</span>
            <span className='text-paragraph-sm text-text-soft-400'>
              48’49.65”{' '}
            </span>
            <span className='text-paragraph-sm text-text-strong-950'>
              S 43°
            </span>
            <span className='text-paragraph-sm text-text-soft-400'>
              02’22.61”
            </span>
            <span className='text-paragraph-sm text-text-strong-950'> W</span>
          </div>
        </div>
      </div>
    </div>
  );
}
