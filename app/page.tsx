"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building, Globe, Users, CheckCircle, Mail, Phone, Linkedin, ArrowDown, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Get the target element
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      // If the element exists, scroll to it
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }

    // Handle responsive detection
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-body">
      {/* Header */}
      <motion.header
        className="sticky top-0 z-40 w-full border-b bg-navy"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <div
              className="relative h-10 w-[220px] md:h-12 md:w-[280px] cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              <Image
                src="/waverly-ward-howell-logo.png"
                alt="Waverly Partners | Ward Howell International"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#announcement"
              className="text-sm font-heading font-medium text-white hover:text-gray-200 transition-colors cursor-pointer relative group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("announcement")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Announcement
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#what-stays"
              className="text-sm font-heading font-medium text-white hover:text-gray-200 transition-colors cursor-pointer relative group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("what-stays")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              What Stays the Same
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#whats-new"
              className="text-sm font-heading font-medium text-white hover:text-gray-200 transition-colors cursor-pointer relative group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("whats-new")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              What's New
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#partners"
              className="text-sm font-heading font-medium text-white hover:text-gray-200 transition-colors cursor-pointer relative group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Meet the Partners
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </a>
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-white text-black border-white hover:bg-[rgba(7,17,64,0.4)] hover:text-white transition-colors"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
              size={isMobile ? "sm" : "default"}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </motion.header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-8 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-r from-blue-50 to-gray-50 overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.1,
              background: [
                "radial-gradient(circle at 20% 30%, rgba(7, 17, 64, 0.5) 0%, transparent 70%)",
                "radial-gradient(circle at 80% 70%, rgba(7, 17, 64, 0.5) 0%, transparent 70%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4 text-center"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-2">
                  <motion.h1
                    className="text-2xl font-heading font-medium tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-navy"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Waverly Partners
                    <br />
                    Has Joined
                    <br />
                    Ward Howell International
                  </motion.h1>
                  <motion.p
                    className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-2xl/relaxed mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Same team. Same commitment.
                    <br />
                    Now with a global reach.
                  </motion.p>
                </div>
                <motion.div
                  className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size={isMobile ? "default" : "lg"}
                      className="bg-navy hover:bg-navy/90 text-white"
                      onClick={() => {
                        document.getElementById("announcement")?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Learn About the Transition
                      <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowDown className="ml-2 h-4 w-4" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="relative h-[200px] sm:h-[250px] md:h-[300px] w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="/hero-image.jpg"
                    alt="Professional team image"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About the Announcement */}
        <section id="announcement" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="mx-auto max-w-3xl space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-semibold tracking-tighter sm:text-4xl text-navy text-center">
                A Message From Our Team
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed text-justify">
                  Waverly Partners, founded in 2001, and recognized for leading retained executive searches across the
                  nonprofit sector and Fortune 500s, has officially joined Ward Howell International, one of the world's
                  oldest and most respected global leadership consulting firms. Ward Howell International was founded in 1951 and today has
                  30+ offices in 22 countries.
                </p>
                <p className="leading-relaxed font-medium text-center text-xl text-navy">
                  As of early 2025, we are now:
                  <br />
                  <span className="text-2xl font-bold uppercase">WAVERLY PARTNERS</span>
                  <span className="text-lg"> | </span>
                  <span className="text-lg">a  <strong className="font-bold">Ward Howell</strong> company

                </p>
                <p className="leading-relaxed text-justify">
                  Waverly Partners functions as Ward Howell's nonprofit search practice with clients that include
                  chambers of commerce, economic development organizations, trade associations, cultural arts, and health
                  and human service agencies. We are engaged by client Boards of Directors on search assignments for
                  President, CEO and Executive Director roles. Waverly Partners is also an active member firm of the
                  Network of Nonprofit Search Consultants, a trade association focused on best practices within the
                  nonprofit search sector.
                </p>
              </div>
              <div className="pt-4 flex justify-center">
                <div className="w-[320px] h-[100px] md:w-[400px] md:h-[120px] relative bg-white p-4 rounded shadow-sm">
                  <Image
                    src="/waverly-ward-howell-logo.png"
                    alt="Waverly Partners | Ward Howell International Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What Stays the Same */}
        <section id="what-stays" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="mx-auto max-w-3xl space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-semibold tracking-tighter sm:text-4xl text-navy">
                What You Can Continue to Expect
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed">Our commitment to excellence remains unchanged.</p>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Users className="h-6 w-6 text-navy" />,
                  title: "Same Consulting Team",
                  description:
                    "The same highly qualified search consultants, each of whom has over 25 years of experience.",
                },
                {
                  icon: <Phone className="h-6 w-6 text-navy" />,
                  title: "Same Contact Information",
                  description: "The same phone numbers and personal relationships you've come to rely on.",
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-navy" />,
                  title: "Same Service Commitment",
                  description: "Our dedication to service, confidentiality, and results remains unwavering.",
                },
                {
                  icon: <Building className="h-6 w-6 text-navy" />,
                  title: (
                    <>
                      Same Sector<br />
                      Focus
                    </>
                  ),
                  description: "We continue to specialize in nonprofit, chamber, and economic development clients.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-blue-100"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(219, 234, 254, 1)", // blue-100 with higher intensity
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-heading font-light">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's New */}
        <section id="whats-new" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <motion.div
              className="mx-auto max-w-3xl space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-semibold tracking-tighter sm:text-4xl text-navy">
                What This Means for You
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed">
                Expanded capabilities to better support your goals and leadership priorities.
              </p>
            </motion.div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              {[
                {
                  icon: <Globe className="h-6 w-6 text-navy flex-shrink-0 mt-0.5" />,
                  title: "Global Talent Network",
                  description: "Access to Ward Howell’s global network of 30+ offices in 22 countries, helping organizations connect with top talent worldwide.",
                },
                {
                  icon: <CheckCircle className="h-6 w-6 text-navy flex-shrink-0 mt-0.5" />,
                  title: "Expanded Services",
                  description: "Additional offerings such as board advisory, succession planning, and leadership appraisals to help organizations thrive.",
                },
                {
                  icon: <Building className="h-6 w-6 text-navy flex-shrink-0 mt-0.5" />,
                  title: "International Footprint",
                  description: "A broader national and international presence across regions to support your strategic and long-term organizational goals.",
                },
                {
                  icon: <Users className="h-6 w-6 text-navy flex-shrink-0 mt-0.5" />,
                  title: "Increased Capacity",
                  description: "Enhanced resources, tools, and leadership solutions to meet your evolving challenges and operational needs effectively.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col space-y-2 p-6 bg-blue-50 rounded-lg hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(239, 246, 255, 1)" }} // blue-50 with higher intensity
                >
                  <div className="flex items-start gap-2">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-heading font-light">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Partners */}
        <section id="partners" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <motion.div
              className="mx-auto max-w-3xl space-y-4 text-center mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-heading font-semibold tracking-tighter sm:text-4xl text-navy">
                Meet the Partners
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed">Our consulting team is here to serve you.</p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  name: "Heidi G. Milosovic",
                  title: "Managing Partner",
                  location: "Cleveland, OH",
                  image: "/heidi-profile.jpeg",
                  email: "HMilosovic@Waverly-Partners.com",
                  office: "440.355.6629",
                  mobile: "216.387.0832",
                  linkedin: "https://www.linkedin.com/in/heidimilosovic/",
                },
                {
                  name: "Sara B. Cikalo",
                  title: "Partner",
                  location: "Cleveland, OH",
                  image: "/sara-profile.jpeg",
                  email: "SCikalo@Waverly-Partners.com",
                  office: "440.933.0096",
                  mobile: "440.821.4437",
                  linkedin: "https://www.linkedin.com/in/sara-cikalo-2ab1271/",
                },
                {
                  name: "Eric N. Peterson",
                  title: "Partner",
                  location: "Cleveland, OH",
                  image: "/eric-profile.jpg",
                  email: "EPeterson@Waverly-Partners.com",
                  office: "440.892.5961",
                  mobile: "440.463.0988",
                  linkedin: "https://www.linkedin.com/in/ericnpeterson/",
                },
                {
                  name: "Deborah M. Galbraith",
                  title: "Partner",
                  location: "Kansas City, KS",
                  image: "/galbraith-profile.jpeg",
                  email: "DGalbraith@Waverly-Partners.com",
                  office: "785.856.9273",
                  mobile: "785.764.2920",
                  linkedin: "https://www.linkedin.com/in/deborahmgalbraith/",
                },
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <motion.div
                    className="relative h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 rounded-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image src={partner.image || "/placeholder.svg"} alt={partner.name} fill className="object-cover" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-heading font-light leading-tight">
                      {partner.name.split(" ").slice(0, -1).join(" ")}<br />
                      {partner.name.split(" ").slice(-1)}
                    </h3>

                    <div className="text-gray-600 mb-2">
                      <p>{partner.title}</p>
                      <p>{partner.location}</p>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <motion.a
                        href={`mailto:${partner.email}`}
                        className="flex items-center justify-center gap-1 text-navy hover:underline text-sm md:text-base"
                        whileHover={{ scale: 1.05, color: "rgba(5, 14, 51, 1)" }} // navy darker
                      >
                        <Mail className="h-4 w-4" />
                        {partner.email}
                      </motion.a>
                      <motion.div className="flex items-center justify-center gap-1 text-navy text-sm md:text-base">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${partner.office.replace(/\./g, "")}`} className="hover:underline">
                          O: {partner.office}
                        </a>
                      </motion.div>
                      <motion.div className="flex items-center justify-center gap-1 text-navy text-sm md:text-base">
                        <Smartphone className="h-4 w-4" />
                        <a href={`tel:${partner.mobile.replace(/\./g, "")}`} className="hover:underline">
                          C: {partner.mobile}
                        </a>
                      </motion.div>
                    </div>
                    <motion.div className="mt-4 flex justify-center gap-2">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="rounded-full" asChild>
                          <a href={partner.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4 mr-1" />
                            LinkedIn
                          </a>
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <motion.div
                className="mx-auto max-w-2xl p-6 bg-blue-50 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-heading font-semibold mb-2">For general information:</h3>
                <p className="text-gray-700 mb-4">
                  For information on our firm, our services, or to request a proposal, please contact:
                </p>
                <motion.a
                  href="mailto:Info@Waverly-Partners.com"
                  className="flex items-center justify-center gap-2 text-navy font-medium text-lg hover:underline"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="h-5 w-5" />
                  Info@Waverly-Partners.com
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white relative overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.1,
              background: [
                "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                "radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-3xl font-heading font-semibold tracking-tighter sm:text-4xl">
                  We're Here to Help
                </h2>
                <p className="text-base md:text-xl/relaxed">
                  If you have questions or would like to speak with our team directly, we'd love to connect.
                </p>

                <div className="space-y-4 mt-8">
                  <motion.div
                    className="flex flex-col space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-heading font-light">Heidi G. Milosovic</h3>
                    <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                      <Mail className="h-5 w-5 text-blue-200" />
                      <a
                        href="mailto:HMilosovic@Waverly-Partners.com"
                        className="hover:underline text-sm md:text-base break-all"
                      >
                        HMilosovic@Waverly-Partners.com
                      </a>
                    </motion.div>
                    <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                      <Phone className="h-5 w-5 text-blue-200" />
                      <a href="tel:4403556629" className="hover:underline text-sm md:text-base">
                        O: 440.355.6629
                      </a>
                    </motion.div>
                    <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }}>
                      <Smartphone className="h-5 w-5 text-blue-200" />
                      <a href="tel:2163870832" className="hover:underline text-sm md:text-base">
                        C: 216.387.0832
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-navy text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/waverly-ward-howell-logo.png"
                alt="Waverly Partners | Ward Howell International"
                width={220}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400 cursor-not-allowed">
                Privacy Policy
              </div>
              <div className="text-sm text-gray-400 cursor-not-allowed">
                Terms of Service
              </div>
              <div className="hover:text-white transition-colors">
                <a
                  href="https://www.linkedin.com/company/waverly-partners-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
