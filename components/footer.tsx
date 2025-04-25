import Link from "next/link"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-900 text-gray-300">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Waverly Partners</h3>
            <p className="text-sm">Now Ward Howell International</p>
            <p className="text-sm">Nonprofit Executive Search Practice</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Cleveland Office</h3>
            <p className="text-sm">1234 Main Street</p>
            <p className="text-sm">Cleveland, OH 44114</p>
            <p className="text-sm">(216) 555-5555</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Kansas City Office</h3>
            <p className="text-sm">5678 Oak Street</p>
            <p className="text-sm">Kansas City, MO 64105</p>
            <p className="text-sm">(816) 555-5555</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com/company/waverly-partners" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:info@waverly-partners.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+12165555555">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Waverly Partners | Ward Howell International. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

