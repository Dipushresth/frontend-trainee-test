"use client"
import CardLayout from "@/components/organisms/CardLayout"
import TitleHeader from "@/components/atoms/TitleHeader"
import JourmneyImg1 from "@/assets/images/journey-img-1.png"
import JourmneyImg2 from "@/assets/images/journey-img-2.png"
import JourmneyImg3 from "@/assets/images/journey-img-3.png"
import JourmneyImg4 from "@/assets/images/journey-img-4.png"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { CardData } from "@/shared/interface"

import slide1 from "@/assets/images/slide1.jpg"
import slide2 from "@/assets/images/slide2.jpg"

const cards: CardData[] = [
  {
    id: 1,
    title: "Start with Clarity",
    subTitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    image: JourmneyImg1,
    color: "#F45B5B",
    position: "left",
    carouselImages: [slide1, slide2],
    hover: -1000,
  },
  {
    id: 2,
    title: "Learn by Doing",
    subTitle: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    image: JourmneyImg2,
    color: "#5492A0",
    position: "right",
    carouselImages: [slide1, slide2],
    hover: 1000,
  },
  {
    id: 3,
    title: "Get Mentored & Supported",
    subTitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya’s community of mentors and learners has your back with live support, interactive discussions, and expert insights. You’re never on your own.",
    image: JourmneyImg3,
    color: "#6C64A8",
    position: "left",

    carouselImages: [slide1, slide2],
    hover: -1000,
  },
  {
    id: 4,
    title: "Achieve & Showcase",
    subTitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    image: JourmneyImg4,
    color: "#A88964",
    position: "right",

    carouselImages: [slide1, slide2],
    hover: 1000,
  },
]
export default function Journey() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  return (
    <div>
      <TitleHeader
        subtitle="Explore our classes and master trending skills!"
        emoji="🚀"
      >
        <span className="text-emerald-500">Step</span>
        <span>In.</span>
        <span className="text-emerald-500">Skill</span>Up.
        <span className="text-emerald-500">Stand</span>Out.
      </TitleHeader>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className={cn("relative", card.id % 2 === 0 ? "text-right" : "")}
          >
            <CardLayout
              card={card}
              isHovered={hoveredId === card.id}
              onHover={() => setHoveredId(card.id)}
              onLeave={() => setHoveredId(null)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
