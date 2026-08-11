# Ngopi — Landing Page

Landing page untuk aplikasi Ngopi, jasa pengangkutan sampah berbasis Android & iOS.
Dibangun dengan **Astro 5** + **Tailwind CSS 4**, output statis (tanpa server).

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil build ke ./dist
npm run preview  # pratinjau hasil build
```

## Mengganti isi paket setelah brosur diterima

Semua angka dan fitur paket **Regular / Medium / Diamond** ada di satu berkas:

```
src/data/plans.ts
```

Ubah `priceMonthly`, `priceMonthlyYearly`, `quota`, `volume`, dan daftar `features`
di sana. Kartu harga, toggle bulanan/tahunan, dan data terstruktur JSON-LD di
halaman ikut menyesuaikan otomatis — tidak ada angka yang ditulis ulang di tempat lain.

Untuk menandai fitur yang **tidak** termasuk dalam sebuah paket, beri
`included: false` pada item fitur; item itu akan tampil redup dengan ikon strip.

## Mengganti teks lain

`src/data/site.ts` memuat seluruh copy non-harga: nama & kontak, menu navigasi,
statistik, langkah cara kerja, daftar fitur, jenis sampah, area layanan,
testimoni, dan FAQ.

## Yang masih perlu diisi (cari `TODO` di kode)

| Berkas | Yang perlu diganti |
| --- | --- |
| `src/data/plans.ts` | Seluruh harga & fitur paket — masih placeholder |
| `src/data/site.ts` | Tautan App Store & Play Store, nomor WhatsApp, email, alamat, area layanan, testimoni |
| `astro.config.mjs` | `site:` → domain produksi (dipakai sitemap & canonical) |
| `src/layouts/Layout.astro` | Berkas `public/og-image.png` ukuran 1200×630 |
| `src/components/Footer.astro` | Halaman Kebijakan Privasi & Syarat Layanan |

## Struktur

```
src/
├── components/     # Satu berkas per section halaman
├── data/           # plans.ts (harga) + site.ts (copy lainnya)
├── layouts/        # Layout.astro — <head>, meta/OG, animasi reveal
├── pages/          # index.astro — urutan section + JSON-LD
└── styles/         # global.css — token warna & font Tailwind
```

## Deploy

Hasil `npm run build` adalah HTML statis di `dist/`, bisa langsung diunggah ke
Vercel, Netlify, Cloudflare Pages, atau hosting statis mana pun.

## Catatan istilah

Istilah pada halaman ini sengaja disamakan dengan `@ngopi/shared` di repo
`ngopi-be`: satuan penimbangan **kg / m³**, slot waktu **pagi / siang / sore**,
dan pengelompokan pelanggan instansi per **unit kerja**. Hanya penjemputan
berstatus *selesai* yang ditagihkan — klaim ini dipakai di bagian FAQ.
