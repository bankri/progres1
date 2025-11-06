import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Facilities() {
  const labs = [
    {
      name: "Lab Jaringan Komputer",
      desc: "Dilengkapi dengan perangkat cisco, mikrotik, dan infrastruktur jaringan lengkap untuk praktik instalasi dan konfigurasi jaringan.",
      equipment: ["Router Cisco", "Switch Managed", "Mikrotik", "Access Point", "Kabel Tools"],
      color: "bg-blue-50",
    },
    {
      name: "Lab Pemrograman",
      desc: "Ruang komputer dengan spesifikasi tinggi dan software development tools terkini untuk pembelajaran programming.",
      equipment: ["PC Core i7", "Dual Monitor", "IDE & Tools", "Version Control", "Testing Tools"],
      color: "bg-purple-50",
    },
    
  ]

  return (
    <main>
      <Navigation />

      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Fasilitas Laboratorium</h1>
          <p className="text-lg text-muted-foreground">
            Belajar dengan peralatan dan infrastruktur berstandar industri
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {labs.map((lab, i) => (
            <div key={i} className={`${lab.color} p-8 rounded-lg border border-border`}>
              <h3 className="text-xl font-bold mb-3 text-primary">{lab.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{lab.desc}</p>
              <div>
                <p className="text-xs font-semibold text-primary mb-2">Peralatan:</p>
                <ul className="flex flex-wrap gap-2">
                  {lab.equipment.map((item, j) => (
                    <li key={j} className="bg-white px-3 py-1 rounded text-xs font-medium text-primary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-8">Akses Laboratorium</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm font-semibold opacity-80">Jadwal Peminjaman Lab</p>
              <p className="text-xl font-bold">Senin - Jumat</p>
              <p className="text-sm opacity-80">07:00 - 22:00</p>
            </div>
            <div>
              <p className="text-sm font-semibold opacity-80">Praktik Mandiri</p>
              <p className="text-xl font-bold">Tersedia</p>
              <p className="text-sm opacity-80">dengan pengawasan instruktur</p>
            </div>
            <div>
              <p className="text-sm font-semibold opacity-80">Kapasitas</p>
              <p className="text-xl font-bold">10-20 siswa</p>
              <p className="text-sm opacity-80">per lab</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
