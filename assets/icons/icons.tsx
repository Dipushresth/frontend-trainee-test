import { cn } from "@/lib/utils"

import ReactIcon from "./svgIcon/ReactIcon"
import SocialMediaIcon from "./svgIcon/SocialMediaIcon"
import VueIcon from "./svgIcon/VueIcon"
import DesignIcon from "./svgIcon/DesignIcon"

export const iconList = {
  reactIcon: ReactIcon,
  mediaIcon: SocialMediaIcon,
  vueIcon: VueIcon,
  designIcon: DesignIcon,
}

export type IconNameType = keyof typeof iconList

interface IconProps {
  name: IconNameType
  className?: string
  size?: string
}

export const Icon = ({ name, className, size }: IconProps) => {
  const Svg = iconList[name]
  if (!Svg) return null
  return <Svg className={cn("hover:cursor-pointer", className, size)} />
}
