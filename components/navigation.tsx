"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="SMK TI BAZMA Logo" width={40} height={40} />
          <span className="text-lg font-bold text-primary hidden sm:inline">SMK TI BAZMA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Beranda
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            Tentang
          </Link>
          <Link href="/facilities" className="text-foreground hover:text-primary transition-colors">
            Fasilitas
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
            Kontak
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-4">
            <Link href="/" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              Beranda
            </Link>
            <Link href="/about" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              Tentang
            </Link>
            <Link
              href="/facilities"
              className="block text-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Fasilitas
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary" onClick={() => setIsOpen(false)}>
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
