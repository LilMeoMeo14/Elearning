export default function Footer() {
  const sections = {
    About: ["Our Story", "Careers", "Blog"],
    Resources: ["Courses", "Instructors", "Learning Hub"],
    Support: ["Help Center", "Contact", "FAQ"],
  }

  const socials = [
    { name: "Twitter", icon: "𝕏" },
    { name: "LinkedIn", icon: "in" },
    { name: "Facebook", icon: "f" },
  ]

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
                <span className="font-bold text-foreground">LearnHub</span>
              </div>
              <p className="text-sm text-foreground/60">Empowering learners worldwide with quality education.</p>
            </div>

            {/* Links */}
            {Object.entries(sections).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-foreground mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow</h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-border hover:bg-primary/20 transition-colors text-sm font-semibold text-foreground/70"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-border py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">&copy; 2025 LearnHub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
