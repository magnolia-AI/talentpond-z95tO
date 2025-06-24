import Link from 'next/link'
import { DesktopNav } from '@/components/desktop-nav'
import { MobileNav } from '@/components/mobile-nav'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* Placeholder for a logo, you can replace this with an <Image /> component or SVG */}
          <span className="font-bold sm:inline-block">
            WorkfareSaaS
          </span>
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}
