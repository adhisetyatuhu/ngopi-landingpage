/**
 * SUMBER TUNGGAL data paket subscription.
 *
 * ⚠️ TODO (brosur): seluruh angka & fitur di file ini masih PLACEHOLDER.
 * Begitu brosur resmi diterima, cukup ubah file ini — komponen Pricing,
 * tabel perbandingan, dan JSON-LD di halaman ikut ter-update otomatis.
 *
 * Harga dalam rupiah penuh (bukan sen), mengikuti konvensi @ngopi/shared.
 */

export type PlanId = 'regular' | 'medium' | 'diamond';

export interface PlanFeature {
  /** Teks fitur, ditampilkan apa adanya. */
  text: string;
  /** false = fitur ditampilkan dicoret / abu-abu sebagai pembeda antar paket. */
  included?: boolean;
}

export interface Plan {
  id: PlanId;
  name: string;
  /** Satu kalimat: paket ini cocok untuk siapa. */
  tagline: string;
  /** Harga per bulan bila ditagih bulanan. */
  priceMonthly: number;
  /** Harga per bulan bila ditagih tahunan (dibayar 12 bulan di muka). */
  priceMonthlyYearly: number;
  /** Kuota penjemputan, ditampilkan besar di bawah harga. */
  quota: string;
  /** Batas volume per penjemputan. Satuan kg / m³ mengikuti @ngopi/shared. */
  volume: string;
  /** Kartu paket yang ditonjolkan (hanya satu). */
  featured?: boolean;
  /** Label kecil di atas kartu, mis. "Paling populer". */
  badge?: string;
  features: PlanFeature[];
}

/** Diskon efektif bila memilih penagihan tahunan — dipakai di toggle. */
export const YEARLY_DISCOUNT_LABEL = 'Lebih hemat';

export const plans: Plan[] = [
  {
    id: 'regular',
    name: 'Regular',
    tagline: 'Untuk perorangan, di lingkungan perkantoran dengan kuantitas sampah sedikit.',
    priceMonthly: 45_000,
    priceMonthlyYearly: 44_000,
    quota: '3x pengambilan / minggu',
    volume: 'sampai 1 kg atau 0,2 m³ per pengambilan',
    features: [
      { text: 'Layanan pengambilan sampah terjadwal' },
      { text: 'Untuk kebutuhan internal' },
      { text: 'Mudah praktis dan tepat waktu' },
      { text: 'Pengambilan setiap selasa, rabu, dan kamis. Setiap pukul 16.00 - 16.30 WIB' },
      { text: 'Pengambilan tambahan on-call', included: false },
    ],
  },
  {
    id: 'medium',
    name: 'Medium',
    tagline: 'Untuk perorangan, di lingkungan kantor dengan kuantitas sampah yang lebih banyak.',
    priceMonthly: 75_000,
    priceMonthlyYearly: 72_500,
    quota: '6x pengambilan / minggu',
    volume: 'sampai 2 kg atau 0,5 m³ per pengambilan',
    featured: true,
    badge: 'Paling populer',
    features: [
      { text: 'Jadwal pengambilan sampah terjadwal' },
      { text: 'Untuk kebutuhan internal' },
      { text: 'Pengambilan sampah 2x/hari' },
      { text: 'Mudah praktis dan tepat waktu' },
      { text: 'Prioritas pengambilan' },
      { text: 'Pengambilan setiap selasa, rabu, dan kamis. Pukul 11.00-13.00 dan 16.00-16.30 WIB.' },
      { text: 'Pengambilan tambahan on-call', included: false },
    ],
  },
  {
    id: 'diamond',
    name: 'Diamond',
    tagline: 'Untuk perorangan, di lingkungan kantor dengan kuantitas sampah yang lebih banyak dan sering.',
    priceMonthly: 100_000,
    priceMonthlyYearly: 96_500,
    quota: '6x pengambilan per minggu + on-call',
    volume: 'sampai 3 kg atau 0,75 m³ per penjemputan',
    features: [
      { text: 'Jadwal pengambilan sampah terjadwal' },
      { text: 'Untuk kebutuhan internal' },
      { text: 'Pengambilan sampah 2x/hari' },
      { text: 'Pengambilan setiap selasa, rabu, dan kamis. Pukul 11.00-13.00 dan 16.00-16.30 WIB.' },
      { text: 'Mudah praktis dan tepat waktu' },
      { text: 'On-call 1x per hari (08.00-16.30)' },
      { text: 'Prioritas Utama' },
    ],
  },
];

const IDR = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatIDR(amount: number): string {
  return IDR.format(amount);
}
