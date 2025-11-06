export default function Programs() {
  const programs = [
    {
      title: "Sistem Keamanan Jaringan",
      description:
        "Pelajari infrastruktur keamanan jaringan, proteksi data, dan administrasi sistem keamanan dengan teknologi terkini.",
      icon: "🔐",
    },
    {
      title: "Software as a Service",
      description: "Kuasai pengembangan SaaS dan deployement aplikasi berbasis cloud computing.",
      icon: "☁️",
    },
    {
      title: "Platform as a Service",
      description: "Pelajari platform cloud untuk membangun dan mengelola aplikasi dengan efisien.",
      icon: "🏗️",
    },
    {
      title: "Infrastructure as a Service",
      description: "Pahami manajemen infrastruktur cloud dan sumber daya komputasi virtual.",
      icon: "⚙️",
    },
  ]

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">Program Pembelajaran</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {programs.map((program, i) => (
          <div
            key={i}
            className="p-8 bg-secondary/30 border border-border rounded-lg hover:border-primary transition-colors"
          >
            <div className="text-4xl mb-4">{program.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-primary">{program.title}</h3>
            <p className="text-muted-foreground">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
