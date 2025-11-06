import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">SMK TI BAZMA</h4>
            <p className="text-sm opacity-80">Energi Masa Depan Indonesia</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="opacity-80 hover:opacity-100">
                  Fasilitas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>0811-1144-339</li>
              <li>smktibazma@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Lokasi</h4>
            <p className="text-sm opacity-80">
              Jl. Raya Cikampak Cicadas
              <br />
              Bogor, Jawa Barat
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 SMK TI BAZMA. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
