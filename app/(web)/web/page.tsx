import { Courses } from "@/shared/components/courses"
import { Journey } from "@/shared/components/journey"

const page = () => {
  return (
    <div className="container mx-auto">
      <Journey />
      <Courses />
    </div>
  )
}

export default page
