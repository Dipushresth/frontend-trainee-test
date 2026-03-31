"use client"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { cn } from "@/lib/utils"
import FolatingContent from "../molecules/FloatingContent"
import { AnimatePresence, motion } from "framer-motion"
import CardCarousel from "./CardCarousel"
import { CardData } from "@/shared/interface"

interface CardLayoutInterface {
  card: CardData
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}
export default function CardLayout({
  card,
  isHovered,
  onHover,
  onLeave,
}: CardLayoutInterface) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      layout
      initial={false}
      animate={{
        scale: isHovered ? 1.02 : 1,
        zIndex: isHovered ? 50 : 10,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
      }}
    >
      <Card
        className={cn(
          "relative h-95 items-center justify-center overflow-visible rounded-2xl border-0 text-white ring-0 outline-0 hover:outline-0 lg:rounded-[32px] lg:px-9"
        )}
      >
        <div className="inset-0 overflow-hidden rounded-2xl border border-white duration-500 lg:absolute lg:rounded-[32px]">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0"
              >
                <CardCarousel images={card.carouselImages} />
                <div
                  className="absolute top-0.5 left-0.5 z-[-1] h-[99.5%] w-[99.5%] rounded-[32px]"
                  style={{ backgroundColor: card.color }}
                ></div>
              </motion.div>
            )}
            <motion.div key="default" className="absolute inset-0 z-0">
              <CardCarousel images={card.carouselImages} />
              <div
                className="absolute top-0.5 left-0.5 z-[-1] h-[99.5%] w-[99.5%] rounded-[32px]"
                style={{ backgroundColor: card.color }}
              ></div>
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div
          animate={{
            x: isHovered ? card.hover : 0,
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.9 : 1,
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={cn(
            "pointer-events-none top-0 left-0 z-30 h-full rounded-2xl px-3 py-8 lg:absolute lg:rounded-[32px] lg:px-8 lg:py-12",
            card.position === "left" ? "left-0" : "right-[-15]"
          )}
          style={{ backgroundColor: card.color }}
        >
          <div className="flex flex-col gap-6">
            <CardHeader>
              <CardTitle className="text-base-white font-nohemi text-[26px] leading-[120%] font-bold xl:text-[32px]">
                {card.title}
              </CardTitle>
              <CardDescription className="text-base-white text-lg leading-normal font-semibold xl:text-[24px]">
                {card.subTitle}
              </CardDescription>
            </CardHeader>
            <CardContent
              className={cn(
                "text-base-white max-w-[80%] text-[15px] leading-normal lg:max-w-[60%] xl:text-lg",
                card?.position === "right" ? "" : "ml-auto"
              )}
            >
              {card.description}
            </CardContent>
          </div>
          {card.image && (
            <CardFooter
              className={cn(
                "absolute bottom-0 z-10 border-0 bg-transparent lg:top-30",
                card.position === "left"
                  ? "lg:left-[-80]"
                  : "right-[-25%] lg:right-0",
                card.id === 3 && "top-auto bottom-[-50]",
                card.id === 4 && "right-[-35%] lg:right-0"
              )}
            >
              <FolatingContent>
                <Image
                  src={card.image}
                  alt=""
                  className="pointer-events-none w-[60%] object-contain md:w-2xs"
                />
              </FolatingContent>
            </CardFooter>
          )}
        </motion.div>
      </Card>
    </motion.div>
  )
}
