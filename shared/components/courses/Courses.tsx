"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Icon } from "@/assets/icons/icons"
import TitleHeader from "@/components/atoms/TitleHeader"

const coursesData = [
  {
    id: "all",
    title: "All Courses",
    subtitle: "courses you're powering through right now.",
    count: "23+",
    color: "bg-[#C13333]",
    lightColor: "bg-[#FDF2F2]",
    textColor: "text-[#C13333]",
  },
  {
    id: "upcoming",
    title: "Upcoming Courses",
    subtitle: "exciting new courses waiting to boost your skills.",
    count: "05+",
    color: "bg-[#C13333]",
    lightColor: "bg-[#FDF2F2]",
    textColor: "text-[#C13333]",
  },
  {
    id: "ongoing",
    title: "Ongoing Courses",
    subtitle: "currently happening—don't miss out on the action!",
    count: "10+",
    color: "bg-[#C13333]",
    lightColor: "bg-[#FDF2F2]",
    textColor: "text-[#C13333]",
  },
]

export default function Courses() {
  const [activeId, setActiveId] = useState("ongoing")

  return (
    <section className="bg-white py-24">
      <TitleHeader
        subtitle="Explore our classes and master trending skills!"
        emoji="🔥"
      >
        Dive Into
        <span className="pl-2 text-emerald-500">What's Hot Right Now!</span>
      </TitleHeader>
      <div className="flex-wrap gap-6 xl:flex xl:h-100">
        {coursesData.map((item) => {
          const isActive = activeId === item.id
          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveId(item.id)}
              className={cn(
                "relative mb-3 min-h-115 cursor-pointer overflow-hidden rounded-[2.5rem] transition-all duration-500",
                isActive
                  ? "flex-2 bg-secondary text-white"
                  : "flex-1 bg-secondary-light text-secondary"
              )}
            >
              <div className="relative z-10 h-full w-full flex-col p-8 xl:flex">
                <div className="xl:-full flex justify-end xl:w-auto">
                  <AnimatePresence>
                    {isActive && (
                      <motion.button className="flex items-center gap-2 text-sm font-bold hover:underline">
                        View {item.title} <ArrowRight className="h-4 w-4" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-1 items-center justify-center">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div className="flex items-center gap-8">
                        <Icon name="reactIcon" />
                        <Icon name="mediaIcon" />
                        <Icon name="vueIcon" />
                        <Icon name="designIcon" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className={cn(
                    "relative top-40 mt-auto flex w-full items-center xl:top-auto",
                    isActive ? "" : "justify-center"
                  )}
                >
                  <motion.span
                    className={cn(
                      "font-nohemi relative leading-none font-semibold",
                      "text-[7rem] xl:text-[9.5rem]",
                      isActive
                        ? "bottom-[90] xl:top-11"
                        : "bottom-[-50] lg:top-1/5"
                    )}
                  >
                    {item.count}
                  </motion.span>
                  <motion.div
                    className={cn(
                      "absolute flex flex-col",
                      isActive
                        ? "top-[-90] left-1/3 w-75 xl:top-1/4"
                        : "top-[10%] left-2/3 xl:top-1/5 xl:left-1/2"
                    )}
                    initial={false}
                    animate={{
                      rotate: isActive ? 0 : -90,
                      paddingLeft: isActive ? "90px" : "80px",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    }}
                    style={{
                      transformOrigin: "left center",
                    }}
                  >
                    <motion.h3
                      layoutId={`title-${item.id}`}
                      className="text-4xl leading-[0.9] font-bold tracking-tight"
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`subtitle-${item.id}`}
                      className="mt-4 max-w-45 text-lg"
                    >
                      {item.subtitle}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className={cn(
                  "absolute inset-0 top-0 z-0 h-full w-full",
                  isActive ? "bg-secondary" : "bg-secondary-light"
                )}
                animate={{
                  clipPath: isActive
                    ? "circle(200% at 0% 100%)"
                    : "circle(0% at 0% 100%)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 10,
                }}
              ></motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
