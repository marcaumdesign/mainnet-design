'use client';

import * as Accordion from '@/components/ui/accordion2';
import {
  RiBankCard2Line,
  RiBook2Line,
  RiBuilding4Line,
  RiCompassDiscoverLine,
  RiDashboard2Line,
  RiGift2Line,
  RiGlobalLine,
  RiGroupLine,
  RiHammerLine,
  RiInstagramLine,
  RiMoneyDollarBoxLine,
  RiMovie2Line,
  RiPhoneFindLine,
  RiPlayLine,
  RiRocket2Line,
  RiRulerLine,
  RiSearch2Line,
  RiSearchEyeLine,
  RiShareLine,
  RiStore2Line,
  RiTrophyLine,
  RiTv2Line,
  RiUserLine,
  RiVerifiedBadgeFill,
} from '@remixicon/react';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { PortfolioTicker } from '@/components/portfolio/portoflio-ticker';
import HyperText from '@/components/ui/hyper-text';
import { RainbowButton } from '@/components/ui/rainbow-button';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import TestimonialCarousel from '@/components/testemonial-cards';
import VerticalRuler from '@/components/vertical-ruler';
import { TeamMember } from '@/components/ui/team-member';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const parentRef = useRef(null);

  const [isClient, setIsClient] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(undefined, { timeZoneName: 'short' }),
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Atualiza a hora a cada segundo
    const interval = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString(undefined, { timeZoneName: 'short' }),
      );
    }, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, [isClient]);

  if (!isClient) {
    return null; // Ou um placeholder enquanto o componente não é montado no cliente
  }

  return (
    <div className='flex w-full flex-col items-center' data-scroll-container>
      {/* <Loader /> */}

      <Header slug={''} />
      <div
        data-scroll
        data-scroll-speed='2'
        className='relative flex h-fit w-full max-w-[600px] flex-col items-center justify-center gap-32 border-l border-r border-stroke-soft-200 bg-bg-white-0 p-4 py-8 lg:p-8'
      >
        <div className='absolute left-[-50px] flex w-full items-start'>
          <VerticalRuler className='fixed top-0' />
        </div>

        <div className='flex h-[500px] flex-col items-start justify-end gap-2.5 self-stretch'>
          <HyperText onlyOnce className='text-text-sub-600'>
            {currentTime}
          </HyperText>

          <div className='text-title-h1 text-text-strong-950 md:text-title-h0'>
            Softwares Designed to Last.
          </div>
        </div>
      </div>
      {/* Portoflio */}

      <PortfolioTicker />

      {/* <div className="z-50 w-full flex shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.10)]"><PortfolioCard work={'landing-page'} title={'Studio™ 222'} link={'https://s222.framer.ai/'} imageUrl={'images/portoflio/studio222/website.png'}/><PortfolioCard variant={'mobile'} title={'Travla'} link={'https://travla.ai'} imageUrl={'images/portoflio/travla/mobile-app.png'}/></div> */}

      <div
        data-scroll
        data-scroll-speed='4'
        className='flex h-fit w-full max-w-[600px] flex-col items-start justify-start border-[0px] border-l border-r border-stroke-soft-200 bg-bg-white-0'
      >
        {/* What? */}

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border-stroke-soft-200 px-4 py-32 lg:px-8'>
            <div className='self-stretch'>
              {/* <span className='text-title-h3 text-text-strong-950'>What? </span> */}
              <TextRevealByWord
                prefix={'What?'}
                text=' We are a studio in love with building things. These are what we can do together.'
                velocity={2.5}
                offset={['75px end', 'end start']}
              />
            </div>
          </div>

          <div className='flex flex-col self-stretch lg:grid lg:grid-cols-2'>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-r border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiTv2Line className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  Web Apps
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-r border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiPhoneFindLine className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  Mobile Apps
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-r border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiRocket2Line className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  Landing Pages
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiGlobalLine className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  Websites
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-r border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiCompassDiscoverLine className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  Design Systems
                </div>
              </div>
            </div>

            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiBook2Line className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  Branding
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-r border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiInstagramLine className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  Social Media
                </div>
              </div>
            </div>

            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiMovie2Line className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  Motion Design
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-r border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiStore2Line className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
                  E-Commerces
                </div>
              </div>
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:p-8'>
              <div className='flex h-fit w-full items-center justify-start gap-4'>
                <RiDashboard2Line className='text-text-sub-600' />
                <div className='text-paragraph-smgraph-lg text-text-strong-950'>
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
              {/* <span className='text-title-h3 text-text-strong-950'>How? </span>
              <span className='text-title-h3 text-text-soft-400'>
                Mainnet simplifies the design process and breaks down into 4
                steps to develop even faster
              </span> */}
              <TextRevealByWord
                prefix={'How?'}
                text='Mainnet simplifies the design process and breaks it down into 4 steps to develop even faster.'
                velocity={2.5}
                offset={['75px end', 'end start']}
              />
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
                references are betext-paragraph-smr for your business growth. Then create a
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
              {/* <span className='text-title-h3 text-text-strong-950'>Who? </span>
              <span className='text-title-h3 text-text-soft-400'>
                Who believe on a betext-paragraph-smr world by design.
              </span> */}
              <TextRevealByWord
                prefix={'Who?'}
                text='Who believe in a better world by design.'
                velocity={2.5}
                offset={['75px end', 'end start']}
              />
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
              {/* <span className='text-title-h3 text-text-strong-950'>
                Who's behind Mainnet?{' '}
              </span>
              <span className='text-title-h3 text-text-soft-400'>
                What makes us different from others agencies and studios
              </span> */}
              <TextRevealByWord
                prefix={`Who's behind Mainnet?`}
                text='What makes us different from other agencies and studios'
                velocity={2.5}
                offset={['175px end', 'end start']}
              />
            </div>
          </div>
          <div className='flex flex-col items-center justify-start gap-4 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:flex-row lg:items-start lg:p-8'>
            <img
              className='top-[150px] h-[154px] w-[154px] rounded-full object-cover lg:sticky'
              src='images/marcaum.jpg'
            />

            <div className='shrink grow basis-0'>
              <span className='text-paragraph-smgraph-md text-text-strong-950'>
                Hey there, I'm Marcus (also known as Marcaum), a 22-year-old
                carioca designer who is passionate about the color green and
                creating regenerative solutions.
                <br />
                <br />
                With over 8 years of experience, I've worked with innovative
                companies like V
              </span>
              <span className='text-paragraph-smgraph-md text-text-strong-950'>
                elvet, Lemon Capital (BTG), Eternal Games, GreenPill
              </span>
              <span className='text-paragraph-smgraph-md text-text-strong-950'>
                , and others, crafting solutions that make a meaningful impact
                on businesses and their users.
                <br />
                <br />
                In 2023, I had the privilege of working at{' '}
              </span>
              <span className='text-paragraph-smgraph-md text-text-strong-950'>
                Framer as a Product Specialist
              </span>
              <span className='text-paragraph-smgraph-md text-text-strong-950'>
                , an experience that deepened my expertise and strengthened my
                role as an Expert and Partner in the design industry.
                <br />
                <br />
                Now, with Mainnet Design, I'm channeling all of this experience
                into helping businesses thrive while{' '}
              </span>
              <span className='text-paragraph-smgraph-md text-text-strong-950'>
                focusing on sustainability and innovation
              </span>
              <span className='text-paragraph-smgraph-md text-text-strong-950'>
                . If you're looking for a partner to bring your ideas to life
                and make a positive impact, let's make it happen.
              </span>
            </div>

            

          </div>
                <div className="flex flex-col items-center justify-start gap-4 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:flex-row lg:items-start lg:p-8">
                  <h4 className="text-title-h4 text-text-strong-950">The full crew</h4>
                </div>
          <div className="grid grid-cols-2 border-t border-stroke-soft-200  md:grid-cols-2 lg:grid-cols-3">
              <TeamMember
                name="Marcus Dutra"
                role="Founder & CEO"
                description="Designer and developer focused on creating regenerative solutions."
                imageUrl="/team/marcus-dutra.png"
              />
              <TeamMember
                name="João Dutra"
                role="COO"
                description="Optimizes internal processes and coordinates teams to deliver the best results."
                imageUrl="/team/joão-dutra.png"
              />
              <TeamMember
                name="Arthur Dutra"
                role="Motion Designer"
                description="Creates animations and visual effects that bring digital projects to life."
                imageUrl="/team/arthur-dutra.png"
              />
              <TeamMember
                name="Manu Alentejo"
                role="UI/UX Designer"
                description="Experience designer focused on research and usability."
                imageUrl="/team/emanuelly-alentejo.png"
              />
              <TeamMember
                name="Victoria Santos"
                role="Graphic Designer"
                description="Develops visual identities and graphic materials that communicate brands' essence."
                imageUrl="/team/victoria-santos.png"
              /> 
              <TeamMember
                name="Benito Xavier"
                role="Tech Lead"
                description="Leads technical development and ensures quality implementation of projects."
                imageUrl="/team/benito-xavier.png"
              />
            </div>

        </div>

        {/* FAQ */}

        

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='lg: flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 py-32 lg:px-8'>
            <div className='self-stretch'>
              <TextRevealByWord
                prefix={`How much it costs?`}
                text='Half the price of an employee, with twice the delivery speed.'
                velocity={2.5}
                offset={['75px end', 'end start']}
              />
            </div>
          </div>
          <div className='md:flex w-full'>
            <div className='w-full flex flex-col items-start justify-start gap-4 self-stretch border-t border-r border-stroke-soft-200 p-4 lg:inline-flex lg:p-8'>
              <div className='flex flex-col items-start justify-center self-stretch'>
                <div className='text-title-h4 text-text-strong-950'>
                  Basic Plan
                </div>
                <div className='text-title-h6 text-text-sub-600'>
                  One request at a time
                </div>
              </div>
              <div className='flex flex-col items-start justify-center self-stretch'>
                <div className='inline-flex items-center justify-start gap-1 self-stretch'>
                  <div className='text-title-h5 text-text-strong-950'>
                    $1399/m
                  </div>
                  <div className='text-paragraph-smgraph-lg text-text-soft-400 line-through'>
                    $1999/m
                  </div>
                </div>
                <div className='text-label-sm text-text-sub-600'>
                  Pause or cancel anytime
                </div>
              </div>
              <RainbowButton className='w-full'
              onClick={() =>
                window.open('https://calendly.com/marcaum/design', '_blank')
              }
            >
              Get Started
            </RainbowButton>
              <div className='flex flex-col items-start justify-start gap-1 self-stretch'>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    One request at a time
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    Priority Support. Weekly Check-in Meetings
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    Average 48 to 72 hours to delivery
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Unlimited users
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Unlimited stock photos and assets
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Easy credit-card payments
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Pause or cancel anytime
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Plan */}

            <div className='w-full flex flex-col items-start justify-start gap-4 self-stretch border-t border-r border-stroke-soft-200 p-4 lg:inline-flex lg:p-8'>
              <div className='flex flex-col items-start justify-center self-stretch'>
                <div className='text-title-h4 text-text-strong-950'>
                  Pro Plan
                </div>
                <div className='text-title-h6 text-text-sub-600'>
                  Double requests!
                </div>
              </div>
              <div className='flex flex-col items-start justify-center self-stretch'>
                <div className='inline-flex items-center justify-start gap-1 self-stretch'>
                  <div className='text-title-h5 text-text-strong-950'>
                    $2798/m
                  </div>
                  <div className='text-paragraph-smgraph-lg text-text-soft-400 line-through'>
                    $3499/m
                  </div>
                </div>
                <div className='text-label-sm text-text-sub-600'>
                  Pause or cancel anytime
                </div>
              </div>
              <RainbowButton className='w-full'
              onClick={() =>
                window.open('https://calendly.com/marcaum/design', '_blank')
              }
            >
              Get Started
            </RainbowButton>
              <div className='flex flex-col items-start justify-start gap-1 self-stretch'>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    Double requests at a time
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    Priority Support. Weekly Check-in Meetings
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Average 48 to 72 hours to delivery
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Unlimited users
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Unlimited stock photos and assets
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Easy credit-card payments
                  </div>
                </div>
                <div className='inline-flex items-center justify-start gap-2 self-stretch'>
                  <RiVerifiedBadgeFill className='text-text-sub-600 min-w-[24px]' />
                  <div className="text-paragraph-sm text-text-sub-600">
                    ﻿﻿Pause or cancel anytime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='lg: flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 py-32 lg:px-8'>
            <div className='self-stretch'>
              <TextRevealByWord
                prefix={`Don't just hear from us.`}
                text='Listen to what our clients have to say.'
                velocity={2.5}
                offset={['75px end', 'end start']}
              />
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-4 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:inline-flex lg:p-8'>
            <TestimonialCarousel />
          </div>
        </div>

        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 py-32 lg:px-8'>
            <div className='self-stretch'>
              {/* <span className='text-title-h3 text-text-strong-950'>
                Questions?
              </span>
              <span className='text-title-h3 text-text-soft-400'>
                {' '}
                We have answers
              </span> */}
              <TextRevealByWord
                prefix={`Questions?`}
                text='We have answers'
                velocity={2.5}
                offset={['75px end', 'end start']}
              />
            </div>
          </div>

          <div className='w-full'>
            <Accordion.Root type='single' collapsible className='w-full'>
              <Accordion.Item value='a'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiMoneyDollarBoxLine} />
                  What is your pricing structure?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  For design, prices starts at $1999 fixed rate. And for
                  development, prices starts at $30/h.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value='b'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiBankCard2Line} />
                  What payment methods are accepted?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  We proccess our payments through{' '}
                  <a
                    className='underline hover:text-stroke-strong-950'
                    href='https://contra.com'
                  >
                    Contra
                  </a>{' '}
                  platform, where they accept Credit Cards, ACH (Automated
                  Clearing House) and SEPA (Single Euro Payments Area).
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value='c'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiShareLine} />
                  Do you outsource services?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  No, we don't. We only work 1:1 with clients, the closer to C
                  Level, the more smooth will be the project experience and the
                  betext-paragraph-smr the end result.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value='d'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiSearchEyeLine} />
                  Do you offer SEO services too?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  Yes, it's included with every web project (App, Website,
                  Landing Page).
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value='e'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiTrophyLine} />
                  What sets Mainnet Design apart from other design agencies?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  Beyond visuals, we design your software and brand to create
                  positive impact not just for your company, but for the society
                  and enviroment.
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value='f'>
                <Accordion.Trigger>
                  <Accordion.Icon as={RiPlayLine} />
                  How do I get started?
                  <Accordion.Arrow />
                </Accordion.Trigger>
                <Accordion.Content className='px-[30px]'>
                  Would love to know more about your business idea,{' '}
                  <a
                    className='underline hover:text-stroke-strong-950'
                    href='https://calendly.com/marcaum/design'
                  >
                    click here
                  </a>{' '}
                  to book a quick call or send me email at:
                  marcus@mainnet.design
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </div>
              
        {/* Refer and earn */}
        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='lg: flex h-fit flex-col items-start justify-start gap-2 self-stretch border-[0px] border-t border-stroke-soft-200 px-4 py-32 lg:px-8'>
            <div className='self-stretch'>
              <TextRevealByWord
                prefix={`Refer and earn.`}
                text='Send us clients and get $250 for free!'
                velocity={2.5}
                offset={['75px end', 'end start']}
              />
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-4 self-stretch border-[0px] border-t border-stroke-soft-200 p-4 lg:inline-flex lg:p-8'>
            <div className='text-paragraph-smgraph-md text-text-sub-600'>
              Too busy to work? Send some clients on our way and receive $250
              for each project closed doing absolutely nothing, free money!
            </div>

            <RainbowButton
              onClick={() =>
                window.open('https://t.me/marcaumdesign', '_blank')
              }
            >
              Refer Client
            </RainbowButton>
          </div>
        </div>

        <Footer className='md:flex-col' />
      </div>
    </div>
  );
}
