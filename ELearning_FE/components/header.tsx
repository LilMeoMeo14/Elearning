"use client"

import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary" />
          <span className="text-xl font-bold text-foreground">LearnHub</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Explore
          </a>
          <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Courses
          </a>
          <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            About
          </a>
        </div>

        <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
          Become an Instructor
        </Button>
      </nav>
    </header>
  )
}
