import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function About() {
  return (
    <main>
      <Navigation />
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Tentang Jurusan SIJA</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Jurusan Sistem Informasi, Jaringan dan Aplikasi (SIJA) adalah program studi yang dirancang untuk
            mempersiapkan siswa menjadi profesional di bidang teknologi informasi. Kami fokus pada pembelajaran praktis
            dengan kurikulum yang relevan dengan industri.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Visi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi program studi terkemuka dalam menghasilkan lulusan yang kompeten, inovatif, dan berdaya saing di
              bidang Sistem Informasi, Jaringan dan Aplikasi secara global.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Misi</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Menyelenggarakan pendidikan berbasis kompetensi dengan standar internasional</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Melaksanakan penelitian dan pengembangan teknologi informasi</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Memberikan kontribusi nyata kepada industri dan masyarakat</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>Mengembangkan karakter lulusan yang etis dan profesional</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Kompetensi Lulusan</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="font-bold mb-2 text-primary">Keahlian Teknis</h3>
                <p className="text-sm text-muted-foreground">
                  Menguasai teknologi jaringan, sistem administrasi, pemrograman, dan cloud computing
                </p>
              </div>
              <div className="bg-secondary/20 p-6 rounded-lg">
                <h3 className="font-bold mb-2 text-primary">Soft Skills</h3>
                <p className="text-sm text-muted-foreground">
                  Komunikasi efektif, problem-solving, kolaborasi tim, dan kepemimpinan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
