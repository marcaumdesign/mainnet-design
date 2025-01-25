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
  RiDashboard2Line,
  RiStore2Line,
  RiGlobalLine,
} from '@remixicon/react';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/header';
import { RainbowButton } from '@/components/ui/rainbow-button';
import HyperText from '@/components/ui/hyper-text';
import { Particles } from '@/components/ui/particles';

import VerticalRuler from '@/components/vertical-ruler';
import { PortfolioTicker } from '@/components/portoflio-ticker';
import PortfolioCard from '@/components/portfolio-card';
import { StripedBackground } from '@/components/striped-background';
import FlickeringGrid from '@/components/ui/flickering-grid';
import Footer from '@/components/footer';

export default function Home() {
  const parentRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(undefined, { timeZoneName: 'short' }),
  );

  useEffect(() => {
    // Atualiza a hora a cada segundo
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString(undefined, { timeZoneName: 'short' }),
      );
    }, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  function cn(arg0: string) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className='flex w-full flex-col items-center'>
      <Header />
      <div className='relative flex h-fit w-full max-w-[600px] flex-col items-center justify-center gap-32 border-l border-r border-stroke-soft-200 bg-bg-white-0 p-4 py-8 lg:p-8'>
        <div className='absolute left-[-50px] flex w-full items-start'>
          <VerticalRuler />
        </div>

        <div className='flex h-[500px] flex-col items-start justify-end gap-2.5 self-stretch'>
          <HyperText onlyOnce className='text-text-sub-600'>
            {currentTime}
          </HyperText>

          <div className='text-title-h0 text-text-strong-950'>
            Works designed to last.
          </div>
        </div>
      </div>
      {/* Portoflio */}

      <PortfolioTicker />

      {/* <div className="z-50 w-full flex shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.10)]"><PortfolioCard work={'landing-page'} title={'Studio™ 222'} link={'https://s222.framer.ai/'} imageUrl={'images/portoflio/studio222/website.png'}/><PortfolioCard variant={'mobile'} title={'Travla'} link={'https://travla.ai'} imageUrl={'images/portoflio/travla/mobile-app.png'}/></div> */}

      <div className='flex h-fit w-full max-w-[600px] flex-col items-start justify-start bg-bg-white-0 border-[0px] border-r border-l border-stroke-soft-200'>
        {/* What? */}

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border-stroke-soft-200 px-4 py-32 lg:px-8'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>What? </span>
              <span className='text-title-h3 text-text-soft-400'>
                We are an studio in love with building thing, these are what we
                can do together
              </span>
            </div>
          </div>

          <div className='flex flex-col self-stretch lg:grid lg:grid-cols-2'>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-r border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiTv2Line className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Web Apps
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-r border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiPhoneFindLine className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Mobile Apps
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-r border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiRocket2Line className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Landing Pages
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t  border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiGlobalLine className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Websites
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-r  border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiCompassDiscoverLine className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Design Systems
                </div>
              </div>
            </div>

            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiBook2Line className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Branding
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-r border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiInstagramLine className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Social Media
                </div>
              </div>
            </div>

            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiMovie2Line className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Motion Design
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-r border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiStore2Line className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  E-Commerces
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiDashboard2Line className='text-text-sub-600' />
                <div className='text-paragraph-lg text-text-strong-950'>
                  Dashboards
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How? */}

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 py-32 lg:px-8'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>How? </span>
              <span className='text-title-h3 text-text-soft-400'>
                Mainnet simplifies the design process and breaks down into 4
                steps to develop even faster
              </span>
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

        {/* Who */}

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 py-32 lg:px-8'>
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
                Have the best experience with a designer ever on your entire
                life while you upgrade your design to scale your business.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='b'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiGroupLine} />
                Startups
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                Let's kick-off even futher your business with a Brand Book,
                Product Design and an awesome landing page.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='c'>
              <Accordion.Trigger>
                <Accordion.Icon as={RiBuilding4Line} />
                Companies
                <Accordion.Arrow />
              </Accordion.Trigger>
              <Accordion.Content className='px-[30px]'>
                If you feel a little bit oudated or with #FOMO, we should have
                talked yesterday. We really need to update your deisgn
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 py-32 lg:px-8'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>
                Who's behind Mainnet?{' '}
              </span>
              <span className='text-title-h3 text-text-soft-400'>
                What makes us different from others agencies and studios
              </span>
            </div>
          </div>
            <div className='flex flex-col lg:flex-row items-center lg:items-start justify-start gap-4 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
            <img
              className='lg:sticky top-[150px] h-[154px] w-[154px] rounded-full object-cover'
              src='images/marcaum.jpg'
            />
             
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
            
            </div>
        </div>

        {/* FAQ */}

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 lg:px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>
                Questions?
              </span>
              <span className='text-title-h3 text-text-soft-400'>
                {' '}
                We have answers
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
        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 lg: px-8 py-32'>
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
          <div className='flex flex-col lg:inline-flex items-start justify-start gap-4 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
            <div className='text-paragraph-md text-text-sub-600'>
              Too busy to work? Send some clients on our way and receive $250
              for each project closed doing absolutely nothing, free money! 
            </div>

            <RainbowButton onClick={() => window.open("https://t.me/marcaumdesign", "_blank")}>Refer Client</RainbowButton>
          </div>
        </div>
        
        <footer className='inline-flex items-center justify-between self-stretch border-[0px] border-t border-stroke-soft-200 px-4 lg:px-8 py-2 '>
          <div>
            <span className='text-paragraph-sm text-text-strong-950'>
              Mainnet Design © {new Date().getFullYear()}.{' '}
            </span>
            <span className='text-paragraph-sm text-text-soft-400'>
              All Rights Reserved{' '}
            </span>
          </div>
          <div className='text-right'>
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
        </footer>
      </div>
    </div>
  );
}
