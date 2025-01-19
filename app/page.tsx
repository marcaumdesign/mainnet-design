'use client';

import Link from 'next/link';
import * as Button from '@/components/ui/button';
import {
  RiBook2Line,
  RiBuilding4Line,
  RiCompassDiscoverLine,
  RiCursorLine,
  RiGift2Line,
  RiGithubFill,
  RiGroupLine,
  RiHammerLine,
  RiInstagramLine,
  RiPhoneFindLine,
  RiRocket2Line,
  RiRulerLine,
  RiSearch2Line,
  RiTv2Line,
  RiUserLine,
} from '@remixicon/react';
import * as FancyButton from '@/components/ui/fancy-button';
import Header from '@/components/header';
import FlickeringGrid from '@/components/ui/flickering-grid';
import { RainbowButton } from '@/components/ui/rainbow-button';
import HyperText from '@/components/ui/hyper-text';
import { AuroraText } from '@/components/ui/aurora-text';
import TextReveal from '@/components/ui/text-reveal';

export default function Home() {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='flex h-fit w-full max-w-[600px] flex-col items-center justify-center gap-32 border-l border-r border-stroke-soft-200 p-8'>
        <Header />
        <div className='flex h-fit flex-col items-start justify-start gap-2.5 self-stretch'>
          
            <HyperText className='text-text-sub-600'> 16:20:23 (AMERICA/SAO PAULO) </HyperText>
          
          <div className='text-title-h0 text-text-strong-950'>
            Design made to last.
          </div>
        </div>
      </div>
      <div className='inline-flex items-start justify-start self-stretch'>
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
          <div className='inline-flex items-center justify-start self-stretch'>
            <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-8 border border-stroke-soft-200 px-8 py-2'>
              <div className='text-subheading-md text-text-sub-600'>
                DEVELOPMENT
              </div>
            </div>
            <div className='inline-flex shrink grow basis-0 flex-col items-start justify-center gap-8 border border-stroke-soft-200 px-8 py-2'>
              <div className='text-subheading-md text-text-sub-600'>DESIGN</div>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiTv2Line />
              <div className='text-paragraph-lg text-text-strong-950'>
                Web Apps
              </div>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiPhoneFindLine />
              <div className='text-paragraph-lg text-text-strong-950'>
                Mobile Apps
              </div>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiRocket2Line />
              <div className='text-paragraph-lg text-text-strong-950'>
                Landing Pages
              </div>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiCursorLine />
              <div className='text-paragraph-lg text-text-strong-950'>
                Websites
              </div>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiCompassDiscoverLine />
              <div className='text-paragraph-lg text-text-strong-950'>
                Design Systems
              </div>
            </div>
          </div>
          <div className='inline-flex items-start justify-start self-stretch'>
            <div className='flex h-64 items-center justify-center overflow-hidden border border-stroke-soft-200'>
              <div className='bg-background relative w-full overflow-hidden rounded-lg border'>
                
              </div>
            </div>
            <div className='flex h-fit shrink grow basis-0 items-start justify-start gap-10 border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
                <RiBook2Line/>
                <div className='text-paragraph-lg text-text-strong-950'>
                  Branding
                </div>
              </div>
            </div>
          </div>
          <div className='inline-flex items-start justify-start self-stretch'>
            <div className='flex h-64 items-center justify-center overflow-hidden border border-stroke-soft-200'>
            
            </div>
            <div className='flex shrink grow basis-0 items-start justify-start gap-10 self-stretch border border-stroke-soft-200 px-8 py-[15px]'>
              <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
                <RiInstagramLine/>
                <div className='text-paragraph-lg text-text-strong-950'>
                  Social Media
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex h-[848px] flex-col items-start justify-start self-stretch'>
          <div className='flex h-[400px] flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>How? </span>
              <span className='text-title-h3 text-text-soft-400'>
                Mainnet simplifies the design process and breaks down into 4
                steps to develop even faster
              </span>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiSearch2Line/>
              <div className='text-paragraph-lg text-text-strong-950'>
                Research
              </div>
            </div>
            <div className='text-paragraph-md text-text-strong-950'>
              Starts broad, narrows focus for problem definition, then expands
              and iterates for solutions.
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiRulerLine/>
              <div className='text-paragraph-lg text-text-strong-950'>
                Definition
              </div>
            </div>
            <div className='text-paragraph-md text-text-strong-950'>
              Involves understanding user needs and defining the problem,
              followed by ideation and prototyping solutions.
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiHammerLine/>
              <div className='text-paragraph-lg text-text-strong-950'>
                Building
              </div>
            </div>
            <div className='text-paragraph-md text-text-strong-950'>
              Refining concepts into detailed solutions, testing and iterating
              for final implementation.
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiGift2Line/>
              <div className='text-paragraph-lg text-text-strong-950'>
                Delivery
              </div>
            </div>
            <div className='text-paragraph-md text-text-strong-950'>
              Finalizing and implementing the solutions, and evaluating success
              for further improvement and iteration.
            </div>
          </div>
        </div>
        <div className='flex h-fit flex-col items-start justify-start self-stretch'>
          <div className='flex h-fit flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
            <div className='self-stretch'>
              <span className='text-title-h3 text-text-strong-950'>Who? </span>
              <span className='text-title-h3 text-text-soft-400'>W</span>
              <span className='text-title-h3 text-text-soft-400'>
                ho believe on a better world by design.
              </span>
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiUserLine/>
              <div className='text-paragraph-lg text-text-strong-950'>
                Solopreneurs
              </div>
            </div>
            <div className='text-paragraph-md text-text-strong-950'>
              Refining concepts into detailed solutions, testing and iterating
              for final implementation.
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiGroupLine/>
              <div className='text-paragraph-lg text-text-strong-950'>
                Startups
              </div>
            </div>
            <div className='text-paragraph-md text-text-strong-950'>
              Involves understanding user needs and defining the problem,
              followed by ideation and prototyping solutions.
            </div>
          </div>
          <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
            <div className='w-[264px] flex h-8 items-center justify-start gap-4'>
              <RiBuilding4Line/>
              <div className='text-paragraph-lg text-text-strong-950'>
                Companies
              </div>
            </div>
            <div className='text-paragraph-md text-text-strong-950'>
              Refining concepts into detailed solutions, testing and iterating
              for final implementation.
            </div>
          </div>
        </div>
        <div className='flex h-[824px] flex-col items-start justify-start self-stretch'>
          <div className='flex h-[352px] flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
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
              className='h-[154px] w-[154px] rounded-full object-cover sticky top-[150px]'
              src='images/marcaum.jpg'
            />
          </div>
        </div>
        <div className='flex h-[784px] flex-col items-start justify-start self-stretch'>
          <div className='flex h-[304px] flex-col items-start justify-start gap-2 self-stretch border border-stroke-soft-200 px-8 py-32'>
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
          <div className='flex h-[480px] flex-col items-start justify-start self-stretch'>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
              <div className='text-paragraph-md text-text-strong-950'>
                What question should I ask you?
              </div>
              <div className='relative h-6 w-6 overflow-hidden' />
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
              <div className='text-paragraph-md text-text-strong-950'>
                What question should I ask you?
              </div>
              <div className='relative h-6 w-6 overflow-hidden' />
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
              <div className='text-paragraph-md text-text-strong-950'>
                What question should I ask you?
              </div>
              <div className='relative h-6 w-6 overflow-hidden' />
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
              <div className='text-paragraph-md text-text-strong-950'>
                What question should I ask you?
              </div>
              <div className='relative h-6 w-6 overflow-hidden' />
            </div>
            <div className='inline-flex items-start justify-start gap-10 self-stretch border border-stroke-soft-200 p-8'>
              <div className='text-paragraph-md text-text-strong-950'>
                What question should I ask you?
              </div>
              <div className='relative h-6 w-6 overflow-hidden' />
            </div>
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
            <div className='text-paragraph-md text-text-strong-950'>
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
