"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  "Residential Real Estate",
  "Commercial Real Estate",
  "Real Estate Teams & Brokerages",
  "Property Management",
  "Single-Family Rentals",
  "Vacation Rentals",
  "Home Builders and Developers",
];

export default function WhoWeServe() {
  return (
    <section className="overflow-hidden bg-white py-8 lg:py-5 mt-3 w-full">
      <div className="grid w-full items-center gap-10 px-6 lg:grid-cols-2 lg:px-12 xl:px-20">
        {/* LEFT IMAGE COLLAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-[330px] sm:h-[380px]"
        >
          {/* Orange Block */}
          <div className="absolute left-0 top-0 h-10 w-28 rounded-r-md bg-[#ff6b55]" />

          {/* Green Block */}
          <div className="absolute bottom-0 right-0 h-20 w-48 rounded-md bg-[#35c3b5]" />

          {/* Image 1 */}
          <div className="absolute left-3 top-8 h-28 w-60 overflow-hidden sm:h-60 sm:w-72 bottom-6">
            <Image
              src="/images/serve_1.jpg"
              alt="Real Estate"
              fill
              className="object-cover"
            />
          </div>
          {/* Main Image */}
          <div className="absolute bottom-4 right-4 h-56 w-64 overflow-hidden sm:h-72 sm:w-80">
            <Image
              src="/images/serve_3.jpeg"
              alt="Client Meeting"
              fill
              className="object-cover h-[60px]"
              style={{ top: "86px", left: "59px" }}
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[4px] text-slate-900">
            Our Clients
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#181526] sm:text-5xl">
            Who we service
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            EliteEstates is dedicated to empowering real estate professionals
            across all industry verticals. Our clients include:
          </p>

          <ul className="mt-5 grid gap-3">
            {services.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base text-slate-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="
              mt-7
              inline-flex
              w-full
              items-center
              justify-center
              rounded-md
              bg-[#ff6b55]
              px-7
              py-4
              text-sm
              font-bold
              uppercase
              tracking-wider
              text-white
              transition
              hover:bg-[#ff5a43]
              sm:w-auto
            "
          >
            Learn More About EliteEstates
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
