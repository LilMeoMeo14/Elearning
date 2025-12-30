import { Card } from "@/components/ui/card"

export default function Categories() {
  const categories = [
    { name: "Programming", color: "from-blue-400 to-blue-600" },
    { name: "Design", color: "from-purple-400 to-purple-600" },
    { name: "Business", color: "from-indigo-400 to-indigo-600" },
    { name: "Data & AI", color: "from-cyan-400 to-cyan-600" },
  ]

  return (
    <section className="py-20 sm:py-32 bg-gradient-soft-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Popular Categories</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore courses across diverse fields and skill levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <Card
              key={idx}
              className="border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <div className={`h-40 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                <p className="text-sm text-foreground/60 mt-2">Explore courses →</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
