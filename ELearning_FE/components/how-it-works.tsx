import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your free account in seconds and start exploring our courses.",
      icon: "📝",
    },
    {
      number: "2",
      title: "Choose a Course",
      description: "Browse and select from hundreds of courses tailored to your goals.",
      icon: "🎯",
    },
    {
      number: "3",
      title: "Learn & Practice",
      description: "Complete lessons, projects, and quizzes at your own pace.",
      icon: "📚",
    },
    {
      number: "4",
      title: "Get Certified",
      description: "Earn certificates and showcase your new skills to employers.",
      icon: "✨",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Follow these simple steps to start your learning journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 to-secondary/20" />

          {steps.map((step, idx) => (
            <Card key={idx} className="border border-border relative">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>
                <CardTitle className="text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
