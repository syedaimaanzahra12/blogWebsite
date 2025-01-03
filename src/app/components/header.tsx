import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-gradient-to-r  from-orange-300 to-pink-300  shadow-md flex justify-between p-3 w-full">
      <h1 className="font-serif italic md:text-2xl text-lg font-bold text-gray-700 ">Blog Website</h1>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <GiHamburgerMenu />
        </SheetTrigger>
        <SheetContent className="md:hidden">
          <nav className="my-4 flex flex-col">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact"> Contact</Link>
          </nav>
        </SheetContent>
      </Sheet>

      <nav className="hidden md:flex mx-4 text-lg md:text-xl md:font-semibold italic font-serif text-gray-700">
        <ul>
          <Link href="/" >Home</Link>
          <Link className="m-4" href="/about">
            About
          </Link>
          <Link href="/contact"> Contact</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
