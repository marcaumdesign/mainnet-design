"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Quote } from "lucide-react"
import * as Avatar from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { testimonials, type Testimonial } from "../data/testimonials"

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-full max-w-3xl mx-auto">
    <div className="">
      <div className="flex items-center mb-4">
        <Avatar.Root className="h-12 w-12 mr-4">
          <Avatar.Image src={testimonial.avatar} alt={testimonial.name} />
        </Avatar.Root>
        <div>
          <h3 className="text-lg font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-muted-foreground">{testimonial.project}</p>
        </div>
      </div>
      <div className="relative">
        
        <p className="text-paragraph-md">{testimonial.text}</p>
      </div>
      <p className="mt-4 text-paragraph-sm text-left text-text-soft-400">
        Published on {format(new Date(testimonial.date), "MMMM d, yyyy")}
      </p>
    </div>
  </div>
)

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id} className="flex items-center justify-center">
              <TestimonialCard testimonial={testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex  justify-left gap-4 mt-4">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  )
}

