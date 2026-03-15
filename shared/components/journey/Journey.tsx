import TitleHeader from "@/components/common/TitleHeader"
import { div } from "framer-motion/client"

export default function Journey() {
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
    </div>
  )
}
