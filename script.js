/*
Nama: Ahmad Yazid
Tanggal: 10 Oktober 2026
Tujuan: Menyimpan data Kedai Senja, menghitung transaksi, dan menyusun laporan harian.
*/

const kedai = {
  nama: "Kedai Senja",
  pemilik: "Ahmad Yazid",
  kota: "Kota Jambi",
  tahunBerdiri: 2024,
  sedangBuka: true,
  nomorWhatsApp: "6281234567890",
  website: "https://kedaisenja.com", 
  jamOperasional: {
    buka: "08.00",
    tutup: "22.00"
  }
};

const menu = [
  { nama: "Kopi Susu Senja", kategori: "Kopi", harga: 18000, stok: 20, tersedia: true },
  { nama: "Americano", kategori: "Kopi", harga: 16000, stok: 15, tersedia: true },
  { nama: "Teh Lemon", kategori: "Non-kopi", harga: 12000, stok: 12, tersedia: true },
  { nama: "Roti Bakar", kategori: "Makanan", harga: 15000, stok: 10, tersedia: true },
  { nama: "Pisang Goreng", kategori: "Makanan", harga: 14000, stok: 8, tersedia: true },
  { nama: "Kue Cokelat", kategori: "Makanan", harga: 9000, stok: 0, tersedia: false }
];

const transaksi = [
  {
    kode: "TRX-001",
    pelanggan: "Bima",
    sudahMember: false,
    uangBayar: 50000,
    catatan: "Kurangi gula",
    pesanan: [
      { indeksMenu: 0, jumlah: 2 },
      { indeksMenu: 3, jumlah: 1 }
    ]
  },
  {
    kode: "TRX-002",
    pelanggan: "Citra",
    sudahMember: true,
    uangBayar: 70000,
    catatan: null,
    pesanan: [
      { indeksMenu: 0, jumlah: 2 },
      { indeksMenu: 1, jumlah: 2 }
    ]
  },
  {
    kode: "TRX-003",
    pelanggan: "Deni",
    sudahMember: false,
    uangBayar: 100000,
    catatan: null,
    pesanan: [
      { indeksMenu: 2, jumlah: 3 },
      { indeksMenu: 3, jumlah: 2 },
      { indeksMenu: 5, jumlah: 1 }
    ]
  }
];

