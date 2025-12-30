import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Features() {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience and proven teaching methods.",
      icon: "👨‍🏫",
    },
    {
      title: "Flexible Learning Anytime",
      description: "Study at your own pace with lifetime access to course materials and resources.",
      icon: "⏰",
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects to strengthen your portfolio and practical skills.",
      icon: "🛠️",
    },
    {
      title: "Certificates of Completion",
      description: "Earn recognized certificates to showcase your achievements on your resume.",
      icon: "🏆",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose LearnHub?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="border border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
