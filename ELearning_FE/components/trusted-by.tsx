export default function TrustedBy() {
  const logos = [
    { name: "Tech Corp" },
    { name: "Innovation Inc" },
    { name: "Future Labs" },
    { name: "Education Plus" },
    { name: "Global Learn" },
  ]

  return (
    <section className="py-16 sm:py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary mb-2">TRUSTED BY LEADERS</p>
          <h2 className="text-2xl font-bold text-foreground">Trusted by learners from top organizations</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-20 bg-muted rounded-lg border border-border hover:bg-muted/80 transition-colors"
            >
              <span className="text-sm font-semibold text-muted-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
