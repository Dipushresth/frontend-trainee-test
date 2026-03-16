import { motion } from "framer-motion"

interface FolatingContentInterface {
  children: React.ReactNode
}

export default function FolatingContent({
  children,
}: FolatingContentInterface) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}
