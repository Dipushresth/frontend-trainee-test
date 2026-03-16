import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"

const Navbar = () => {
  return (
    <div className="mb-10 flex justify-between bg-slate-100 p-4 px-10">
      <Link href="/" className="text-2xl font-black focus:outline-0">
        Web<span className="text-primary-main">Logo</span>
      </Link>
      <NavigationMenu className="hidden xl:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Login</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Sign Out</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

export default Navbar
