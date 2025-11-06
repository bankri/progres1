import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <main>
      <Navigation />

      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Hubungi Kami</h1>
          <p className="text-lg text-muted-foreground">Kami siap menjawab pertanyaan Anda tentang SMK TI BAZMA</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2 text-primary">Alamat</h3>
              <p className="text-muted-foreground">
                Jl. Raya Cikampak Cicadas, RT.1/RW.1, Cicadas
                <br />
                Kec. Ciampea, Kabupaten Bogor
                <br />
                Jawa Barat 16620
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-primary">Telepon</h3>
              <p className="text-muted-foreground">0811-1144-339</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-primary">Email</h3>
              <p className="text-muted-foreground">smktibazma@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2 text-primary">Jam Operasional</h3>
              <p className="text-muted-foreground">
                Senin - Sabtu: 08:00 - 16:00
                <br />
                Minggu: Tutup
              </p>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Nama Lengkap</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                placeholder="Masukkan nama Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                placeholder="Masukkan email Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Pertanyaan</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                placeholder="Tulis pertanyaan Anda"
              />
            </div>

            <button className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">
              Kirim Pesan
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
