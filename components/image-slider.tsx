'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import image1 from '@/public/image1.jpg';
import image2 from '@/public/image2.jpg';
import image3 from '@/public/image3.jpg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Interface for image data

interface ImageSliderProps {
  images: { src: string }[];
}

export default function ImageSlider({ images }: ImageSliderProps): JSX.Element {
  // Add validation check
  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  console.log(images, 'images');
  console.log(images[currentIndex], 'images[currentIndex].src');

  return (
    <>
      <div className='flex w-fit flex-col items-start justify-center'></div>
      <div className='h-[460px] w-full'>
        <div className='flex h-[460px] items-start justify-between'>
          <div className='z-50 flex h-[460px] cursor-pointer items-center justify-center'>
            <button
              onClick={prevSlide}
              className='border-soft-200 group flex w-[42px] shrink-0 flex-col items-center justify-center self-stretch border-b border-r bg-bg-white-0 px-[9px] transition-colors duration-500 hover:bg-bg-weak-50 dark:border-neutral-700'
            >
              <ChevronRight className='h-6 w-6 -rotate-180 text-slate-600 transition-colors duration-500 group-hover:text-neutral-700 dark:group-hover:text-bg-soft-200' />
            </button>
          </div>
          <div
            className='group h-[460px] w-fit'
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {images[currentIndex]?.src ? (
              <Image
                src={images[currentIndex].src}
                alt={`Slider Image do produto ${currentIndex + 1}`}
                fill
                objectFit='cover'
                className='cursor-pointer rounded-xl transition-all duration-500 ease-in-out'
              />
            ) : (
              <div className='flex h-full w-full items-center justify-center bg-gray-200'>
                Image not available
              </div>
            )}
          </div>
          <div className='z-50 flex h-[460px] cursor-pointer items-center justify-center'>
            <button
              onClick={nextSlide}
              className='border-soft-200 group flex w-[42px] shrink-0 flex-col items-center justify-center self-stretch border-b border-l bg-bg-white-0 px-[9px] transition-colors duration-500 hover:border-bg-soft-200 dark:hover:bg-neutral-700'
            >
              <ChevronRight className='h-6 w-6 text-slate-600 transition-colors duration-500 group-hover:text-neutral-700 dark:group-hover:text-bg-soft-200' />
            </button>
          </div>
        </div>
      </div>
      <div className='border-soft-200 z-50 flex items-center justify-center gap-2.5 self-stretch border-b bg-bg-white-0 px-8 py-4 dark:border-neutral-700'>
        <div className='flex items-center gap-1'>
          {images.map((_, index) => (
            <div
              className={
                'h-1.5 w-1.5 bg-bg-soft-200 transition-colors duration-500 dark:bg-neutral-700 ' +
                (index === currentIndex ? 'dark:!bg-white' : 'bg-neutral-700')
              }
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
