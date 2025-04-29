import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full h-20 border-b bg-white">
      <div className="container h-full px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/waverly-ward-howell-logo.png"
            alt="Ward Howell International"
            width={180}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-navy">
            About
          </Link>
          <Link href="#team" className="text-sm font-medium text-gray-600 hover:text-navy">
            Our Team
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-navy">
            Contact 
          </Link>
          
        </nav>
        
      </div>
    </header>
  )
}
