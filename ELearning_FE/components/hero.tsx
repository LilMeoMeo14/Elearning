import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-balance">Learn Smarter. Grow Faster.</span>
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70">
                High-quality online courses designed to help you upgrade your skills and build your future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button className="rounded-full px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Courses
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-base border-2 border-border bg-transparent"
              >
                Become an Instructor
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center h-96 bg-gradient-soft-blue rounded-2xl shadow-lg">
            <img
              src="/student-learning-online-illustration.jpg"
              alt="Student studying online"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
