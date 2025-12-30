import Header from "@/components/header"
import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import Features from "@/components/features"
import Categories from "@/components/categories"
import HowItWorks from "@/components/how-it-works"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <Categories />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
