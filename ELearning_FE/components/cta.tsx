import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Start learning today and unlock your potential
        </h2>
        <p className="text-lg text-white/90 mb-8">Join thousands of learners who are transforming their careers.</p>
        <Button className="rounded-full px-10 py-7 text-lg bg-white text-primary hover:bg-white/90 font-semibold">
          Get Started for Free
        </Button>
      </div>
    </section>
  )
}
