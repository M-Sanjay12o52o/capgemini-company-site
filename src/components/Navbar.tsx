import Link from "next/link";
import Logo from "./ui/Logo";
import { SearchIcon } from "lucide-react";

export default function Navbar() {
    return (
        <>
            {/* Top section for Contact, Investors, and Language switcher */}
            <div className="bg-gray-200 py-2 text-center">
                <div className="flex items-center justify-end space-x-4 mr-8">
                    <Link href="/jobboard" className="text-blue-500">Job board</Link>
                    <Link href="/contact-us" className="text-blue-500">Contact us</Link>
                    <Link href="/investors" className="text-blue-500">Investors</Link>
                    <span className="text-blue-500">Global | EN</span>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="sticky top-0 z-50 h-24 ml-10 mr-10 flex justify-between items-center px-4 py-2">
                <div className="flex items-center space-x-4 ">
                    <Link href="./" className="text-blue-500 pr-8">
                        <Logo />
                    </Link>
                    <Link href="./insights" className="text-blue-500 p-4 hover:underline">Insights</Link>
                    <Link href="./industries" className="text-blue-500 p-4 hover:underline">Industries</Link>
                    <Link href="./services" className="text-blue-500 p-4 hover:underline">Services</Link>
                    <Link href="./careers" className="text-blue-500 p-4 hover:underline">Careers</Link>
                    <Link href="./news" className="text-blue-500 p-4 hover:underline">News</Link>
                    <Link href="./aboutus" className="text-blue-500 p-4 hover:underline">About us</Link>
                    <Link href="./login" className="text-blue-500 p-4 hover:underline">LogIn</Link>
                </div>
                <div className="flex items-center">
                    <Link href="" className="text-blue-500 flex items-center">
                        <SearchIcon className="mr-2" />
                        Search
                    </Link>
                </div>
            </nav>
        </>
    );
}
