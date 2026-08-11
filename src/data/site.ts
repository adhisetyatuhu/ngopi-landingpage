/**
 * Copy & konfigurasi non-harga untuk landing page.
 * Data paket subscription ada terpisah di `./plans.ts`.
 */

export const site = {
  name: 'Ngopi',
  /** Dipakai di <title> dan JSON-LD. */
  legalName: 'Ngopi — Jasa Pengangkutan Sampah',
  tagline: 'Angkut sampah, tinggal ngopi.',
  description:
    'Ngopi adalah aplikasi jasa pengangkutan sampah untuk rumah, usaha, dan instansi. Pilih paket langganan, atur jadwal penjemputan, dan pantau petugas langsung dari ponsel.',
  // TODO: ganti dengan tautan store yang sebenarnya setelah aplikasi terbit.
  appStoreUrl: '#',
  playStoreUrl: '#',
  whatsapp: 'https://wa.me/628123333333',
  email: 'halo@ngopi.id',
  phone: '0812-3333-333',
  address: 'Jl. Mayjen Sutoyo No. 12, Cililitan, Jakarta Timur',
  instagram: 'https://instagram.com/ngopi.id',
} as const;

export const nav = [
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Paket', href: '#paket' },
  { label: 'Area Layanan', href: '#area' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const stats = [
  { value: 'Terjadwal', label: 'Selasa, Rabu, Kamis' },
  { value: 'Mudah', label: 'Cukup berlangganan melalui aplikasi' },
  { value: 'Praktis', label: 'Bisa On Call (Paket Diamond)' },
  { value: '< 24 jam', label: 'rata-rata respons' },
] as const;

export const steps = [
  {
    icon: 'package',
    title: 'Pilih paket',
    body: 'Tentukan Regular, Medium, atau Diamond sesuai volume sampah Anda. Bisa ganti paket kapan saja.',
  },
  {
    icon: 'calendar',
    title: 'Atur jadwal',
    body: 'Pilih hari dan slot pengambilan — pagi (07.00–11.00), siang (11.00–15.00), atau sore (15.00–18.00).',
  },
  {
    icon: 'truck',
    title: 'Petugas datang',
    body: 'Anda dapat notifikasi saat petugas berangkat. Sampah ditimbang di tempat dan difoto sebagai bukti.',
  },
  {
    icon: 'receipt',
    title: 'Laporan & tagihan',
    body: 'Berat, volume, dan biaya tercatat rapi. Tagihan otomatis tersusun, bisa diunduh per unit kerja.',
  },
] as const;

export const features = [
  {
    icon: 'scale',
    title: 'Ditimbang, bukan dikira-kira',
    body: 'Setiap penjemputan dicatat dalam kg atau m³ dengan tarif yang berlaku saat itu. Tidak ada biaya siluman di akhir bulan.',
  },
  {
    icon: 'bell',
    title: 'Pantau petugas real-time',
    body: 'Tahu persis kapan petugas berangkat, tiba, dan selesai. Tidak perlu menunggu seharian di depan rumah.',
  },
  {
    icon: 'recycle',
    title: 'Sampah terpilah, bukan dibuang',
    body: 'Sampah organik, anorganik, dan residu dipisah sejak penjemputan. Yang bisa didaur ulang kami salurkan ke mitra pengolah.',
  },
  {
    icon: 'building',
    title: 'Rapi untuk instansi',
    body: 'Banyak titik penjemputan dalam satu akun, dikelompokkan per unit kerja, dengan laporan bulanan siap arsip.',
  },
  {
    icon: 'shield',
    title: 'Petugas terverifikasi',
    body: 'Semua petugas terdaftar, berseragam, dan dilengkapi APD. Identitasnya tampil di aplikasi sebelum mereka datang.',
  },
  {
    icon: 'card',
    title: 'Bayar tanpa repot',
    body: 'Transfer bank, e-wallet, atau QRIS. Untuk instansi tersedia penagihan bulanan dengan invoice resmi.',
  },
] as const;

export const wasteTypes = [
  { title: 'Sampah rumah tangga', body: 'Sisa dapur, kemasan, dan sampah harian.' },
  { title: 'Sampah usaha & kantor', body: 'Kardus, kertas, kemasan, sisa produksi ringan.' },
  { title: 'Sampah organik', body: 'Sisa makanan dari kafe, restoran, dan katering.' },
  { title: 'Sampah daur ulang', body: 'Plastik, logam, dan kaca yang masih bernilai.' },
  { title: 'Puing & bongkaran ringan', body: 'Sisa renovasi skala kecil, dihitung per m³.' },
  { title: 'Barang besar', body: 'Kasur, perabot, dan elektronik bekas.' },
] as const;

// TODO: sesuaikan dengan area operasional yang sebenarnya.
export const coverage = [
  'Jln. SMA 14',
  'Area Primajasa',
  'ASABRI',
  'BPHN',
  'BKN',
  'PGC',
] as const;

// TODO: ganti dengan testimoni asli (lengkap dengan izin publikasi).
export const testimonials = [
  {
    quote:
      'Dulu saya harus menunggu tukang sampah lewat dan sering terlewat. Sekarang tinggal pilih slot sore, petugasnya datang tepat waktu.',
    name: 'Rina H.',
    role: 'Pengguna paket Regular, Cililitan',
  },
  {
    quote:
      'Kafe kami menghasilkan sampah organik banyak setiap hari. Paket Medium pas, dan laporannya membantu kami menghitung susut bahan.',
    name: 'Bagas P.',
    role: 'Pemilik kafe, Cililitan',
  },
  {
    quote:
      'Yang paling membantu itu laporan per unit kerja. Bagian umum tidak perlu lagi rekap manual tiap akhir bulan.',
    name: 'Dwi S.',
    role: 'Ibu rumah tangga, Cililitan',
  },
] as const;

export const faqs = [
  {
    q: 'Apa bedanya paket Regular, Medium, dan Diamond?',
    a: 'Perbedaannya pada jumlah penjemputan per bulan dan batas volume tiap penjemputan. Regular untuk rumah tangga, Medium untuk kantor kecil dan usaha kuliner, Diamond untuk instansi atau gedung dengan banyak titik penjemputan.',
  },
  {
    q: 'Bagaimana kalau sampah saya melebihi batas volume paket?',
    a: 'Kelebihannya tetap kami angkut dan ditagih terpisah sesuai tarif per kg atau per m³ yang berlaku. Perhitungannya tampil di aplikasi sebelum penjemputan ditutup, jadi tidak ada kejutan di tagihan.',
  },
  {
    q: 'Bisakah ganti atau berhenti berlangganan?',
    a: 'Bisa, kapan saja lewat aplikasi. Perubahan paket berlaku pada periode penagihan berikutnya, dan sisa kuota periode berjalan tetap dapat digunakan.',
  },
  {
    q: 'Apakah bisa minta penjemputan di luar jadwal?',
    a: 'Bisa. Ajukan penjemputan on-demand dari aplikasi. Paket Medium mendapat jatah tambahan tiap bulan, Diamond tanpa batas, dan pengguna Regular dikenakan biaya per penjemputan.',
  },
  {
    q: 'Bagaimana kalau petugas tidak datang?',
    a: 'Status penjemputan yang tidak terlaksana tidak akan pernah masuk tagihan — hanya penjemputan berstatus selesai yang ditagihkan. Kuota Anda juga otomatis dikembalikan.',
  },
  {
    q: 'Apakah tersedia untuk instansi dan perusahaan?',
    a: 'Ya. Satu akun bisa menaungi banyak titik penjemputan yang dikelompokkan per unit kerja, dengan invoice resmi dan laporan bulanan. Hubungi kami untuk penawaran khusus di atas paket Diamond.',
  },
  {
    q: 'Aplikasinya tersedia di mana saja?',
    a: 'Ngopi tersedia untuk Android dan iOS. Anda juga bisa mengelola langganan lewat versi web menggunakan akun yang sama.',
  },
] as const;
