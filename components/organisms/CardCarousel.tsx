"use client"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import Image, { StaticImageData } from "next/image"

interface CardCarouselInterface {
  images: (StaticImageData | string)[]
  title?: string
}
export default function CardCarousel({ images }: CardCarouselInterface) {
  const [index, setIndex] = useState(0)
  const next = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  return (
    <div className="group/carousel relative h-full w-full overflow-hidden rounded-[32px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative h-full w-full border-2 border-white"
        >
          <div className="carousel-img-wrapper border-white">
            <Image src={images[index]} alt="" fill className="object-cover" />
            <div className="absolute top-8 right-8 left-8 z-10">
              <h3 className="text-2xl leading-tight font-bold text-white drop-shadow-md">
                {index === 0
                  ? "Focused faces—learning mode: ON!"
                  : index === 1
                    ? "Laptop lesson and a whole lot of growth!"
                    : "Mastering new skills"}
              </h3>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <Button
        onClick={prev}
        className="absolute top-[35%] left-[-50] z-30 flex h-30 w-30 cursor-pointer items-center justify-center rounded-full bg-white"
      >
        <span className="relative left-3 flex h-10 w-10 items-center justify-center rounded-[50%] bg-slate-100 shadow">
          <ChevronLeft className="h-6 w-6 text-gray-800" />
        </span>
      </Button>
      <Button
        onClick={next}
        className="absolute top-[35%] right-[-50] z-30 flex h-30 w-30 cursor-pointer items-center justify-center rounded-full bg-white transition-colors"
      >
        <span className="relative right-3 flex h-10 w-10 items-center justify-center rounded-[50%] bg-slate-100 shadow">
          <ChevronRight className="h-6 w-6 text-gray-800" />
        </span>
      </Button>
    </div>
  )
}
