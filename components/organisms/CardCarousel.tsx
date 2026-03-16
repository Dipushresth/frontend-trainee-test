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
          className="relative h-full w-full"
        >
          <Image src={images[index]} alt="" fill className="object-cover" />

          <div className="absolute top-8 right-8 left-8">
            <h3 className="text-2xl leading-tight font-bold text-white drop-shadow-md">
              {index === 0
                ? "Focused faces—learning mode: ON!"
                : index === 1
                  ? "Laptop lesson and a whole lot of growth!"
                  : "Mastering new skills"}
            </h3>
          </div>
        </motion.div>
      </AnimatePresence>
      <Button
        onClick={prev}
        className="absolute top-1/2 left-4 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </Button>
      <Button
        onClick={next}
        className="absolute top-1/2 right-4 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-100"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </Button>
    </div>
  )
}
