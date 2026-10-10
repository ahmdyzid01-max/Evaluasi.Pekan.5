/*
Nama: Ahmad Yazid
Tanggal: 10 Oktober 2026
Tujuan: Menyimpan data Kedai Senja, menghitung transaksi, dan menyusun laporan harian.
*/

const kedai = {
  nama: "Kedai Senja",
  pemilik: "Ayu",
  kota: "Bandung",
  tahunBerdiri: 2020,
  sedangBuka: true,
  nomorWhatsApp: "6281234567890",
  website: null,
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

console.log("Nama kedai:", kedai.nama);
console.log("Kota:", kedai["kota"]);
console.log("Jam tutup:", kedai.jamOperasional.tutup);
console.log("Menu pertama:", menu[0]);
console.log("Menu terakhir:", menu[menu.length - 1]);
console.log("menu[6]:", menu[6]);
console.log("Pelanggan transaksi kedua:", transaksi[1].pelanggan);
console.log(
  "Menu pada item kedua transaksi ketiga:",
  menu[transaksi[2].pesanan[1].indeksMenu].nama
);
console.log("typeof kedai.tahunBerdiri:", typeof kedai.tahunBerdiri);
console.log("typeof kedai.sedangBuka:", typeof kedai.sedangBuka);
console.log("typeof kedai.website:", typeof kedai.website);
console.log("typeof kedai.jamOperasional:", typeof kedai.jamOperasional);
console.log("typeof menu:", typeof menu);
console.log("typeof transaksi[0].catatan:", typeof transaksi[0].catatan);

let catatanKasir;
console.log("Catatan kasir:", catatanKasir);

/*
Jawaban Bagian 2:
1. nomorWhatsApp berupa string karena nomor telepon adalah identitas, bukan nilai untuk dihitung.
   String menjaga angka 0 di depan dan tanda + bila ada.
2. website bernilai null untuk menandai bahwa datanya sengaja belum tersedia. catatanKasir
   dibiarkan undefined karena nilainya belum pernah diisi atau ditetapkan.
3. menu[6] menghasilkan undefined karena indeks array 6 item adalah 0 sampai 5.
4. typeof menu menghasilkan "object"; JavaScript menggolongkan array sebagai object.
5. menu berupa array karena berisi daftar berurutan dan perlu diakses dengan indeks. kedai
   berupa object karena menyimpan satu entitas dengan properti bernama.
*/

function hitungTransaksi(dataTransaksi) {
  const subtotal = dataTransaksi.pesanan.reduce((jumlah, pesanan) => {
    return jumlah + menu[pesanan.indeksMenu].harga * pesanan.jumlah;
  }, 0);
  const jumlahSeluruhItem = dataTransaksi.pesanan.reduce((jumlah, pesanan) => {
    return jumlah + pesanan.jumlah;
  }, 0);
  const potongan = dataTransaksi.sudahMember ? subtotal * 0.1 : 0;
  const pajak = (subtotal - potongan) * 0.11;
  const totalBayar = subtotal - potongan + pajak;
  const kembalian = dataTransaksi.uangBayar - totalBayar;
  const uangCukup = dataTransaksi.uangBayar >= totalBayar;
  const gratisAntar = subtotal >= 100000 || jumlahSeluruhItem >= 5;
  const semuaMenuTersedia = dataTransaksi.pesanan.every((pesanan) => {
    return menu[pesanan.indeksMenu].tersedia;
  });

  return {
    subtotal,
    potongan,
    pajak,
    totalBayar,
    kembalian,
    uangCukup,
    gratisAntar,
    semuaMenuTersedia,
    jumlahSeluruhItem
  };
}

const hasilTransaksiPertama = hitungTransaksi(transaksi[0]);
const subtotalTransaksiPertama = hasilTransaksiPertama.subtotal;
const potonganTransaksiPertama = hasilTransaksiPertama.potongan;
const pajakTransaksiPertama = hasilTransaksiPertama.pajak;
const totalBayarTransaksiPertama = hasilTransaksiPertama.totalBayar;
const kembalianTransaksiPertama = hasilTransaksiPertama.kembalian;
const uangCukupTransaksiPertama = hasilTransaksiPertama.uangCukup;
const gratisAntarTransaksiPertama = hasilTransaksiPertama.gratisAntar;
const semuaMenuTersediaTransaksiPertama = hasilTransaksiPertama.semuaMenuTersedia;

const hasilTransaksiKedua = hitungTransaksi(transaksi[1]);
const subtotalTransaksiKedua = hasilTransaksiKedua.subtotal;
const potonganTransaksiKedua = hasilTransaksiKedua.potongan;
const pajakTransaksiKedua = hasilTransaksiKedua.pajak;
const totalBayarTransaksiKedua = hasilTransaksiKedua.totalBayar;
const kembalianTransaksiKedua = hasilTransaksiKedua.kembalian;
const uangCukupTransaksiKedua = hasilTransaksiKedua.uangCukup;
const gratisAntarTransaksiKedua = hasilTransaksiKedua.gratisAntar;
const semuaMenuTersediaTransaksiKedua = hasilTransaksiKedua.semuaMenuTersedia;

const hasilTransaksiKetiga = hitungTransaksi(transaksi[2]);
const subtotalTransaksiKetiga = hasilTransaksiKetiga.subtotal;
const potonganTransaksiKetiga = hasilTransaksiKetiga.potongan;
const pajakTransaksiKetiga = hasilTransaksiKetiga.pajak;
const totalBayarTransaksiKetiga = hasilTransaksiKetiga.totalBayar;
const kembalianTransaksiKetiga = hasilTransaksiKetiga.kembalian;
const uangCukupTransaksiKetiga = hasilTransaksiKetiga.uangCukup;
const gratisAntarTransaksiKetiga = hasilTransaksiKetiga.gratisAntar;
const semuaMenuTersediaTransaksiKetiga = hasilTransaksiKetiga.semuaMenuTersedia;
const gratisAntarDenganAndTransaksiKetiga =
  subtotalTransaksiKetiga >= 100000 && hasilTransaksiKetiga.jumlahSeluruhItem >= 5;
console.log(
  "Gratis antar TRX-003 (OR, lalu AND):",
  gratisAntarTransaksiKetiga,
  gratisAntarDenganAndTransaksiKetiga
);

if (uangCukupTransaksiPertama) {
  const sisaPecahan50000TransaksiPertama = kembalianTransaksiPertama % 50000;
  const sisaPecahan20000TransaksiPertama = kembalianTransaksiPertama % 20000;
  console.log("Sisa pecahan transaksi pertama:", sisaPecahan50000TransaksiPertama, sisaPecahan20000TransaksiPertama);
}
if (uangCukupTransaksiKedua) {
  const sisaPecahan50000TransaksiKedua = kembalianTransaksiKedua % 50000;
  const sisaPecahan20000TransaksiKedua = kembalianTransaksiKedua % 20000;
  console.log("Sisa pecahan transaksi kedua:", sisaPecahan50000TransaksiKedua, sisaPecahan20000TransaksiKedua);
}
if (uangCukupTransaksiKetiga) {
  const sisaPecahan50000TransaksiKetiga = kembalianTransaksiKetiga % 50000;
  const sisaPecahan20000TransaksiKetiga = kembalianTransaksiKetiga % 20000;
  console.log("Sisa pecahan transaksi ketiga:", sisaPecahan50000TransaksiKetiga, sisaPecahan20000TransaksiKetiga);
}

const ringkasanTransaksi = [
  {
    data: transaksi[0],
    subtotal: subtotalTransaksiPertama,
    potongan: potonganTransaksiPertama,
    pajak: pajakTransaksiPertama,
    totalBayar: totalBayarTransaksiPertama,
    kembalian: kembalianTransaksiPertama,
    uangCukup: uangCukupTransaksiPertama,
    gratisAntar: gratisAntarTransaksiPertama,
    semuaMenuTersedia: semuaMenuTersediaTransaksiPertama
  },
  {
    data: transaksi[1],
    subtotal: subtotalTransaksiKedua,
    potongan: potonganTransaksiKedua,
    pajak: pajakTransaksiKedua,
    totalBayar: totalBayarTransaksiKedua,
    kembalian: kembalianTransaksiKedua,
    uangCukup: uangCukupTransaksiKedua,
    gratisAntar: gratisAntarTransaksiKedua,
    semuaMenuTersedia: semuaMenuTersediaTransaksiKedua
  },
  {
    data: transaksi[2],
    subtotal: subtotalTransaksiKetiga,
    potongan: potonganTransaksiKetiga,
    pajak: pajakTransaksiKetiga,
    totalBayar: totalBayarTransaksiKetiga,
    kembalian: kembalianTransaksiKetiga,
    uangCukup: uangCukupTransaksiKetiga,
    gratisAntar: gratisAntarTransaksiKetiga,
    semuaMenuTersedia: semuaMenuTersediaTransaksiKetiga
  }
];

let pendapatanHarian = 0;
let jumlahTransaksi = 0;

for (const ringkasan of ringkasanTransaksi) {
  pendapatanHarian += ringkasan.totalBayar;
  jumlahTransaksi++;
  console.log(`
${ringkasan.data.kode} - ${ringkasan.data.pelanggan}
Subtotal: Rp${ringkasan.subtotal}
Potongan: Rp${ringkasan.potongan}
Pajak: Rp${ringkasan.pajak}
Total bayar: Rp${ringkasan.totalBayar}
Uang bayar: Rp${ringkasan.data.uangBayar}
Kembalian: Rp${ringkasan.kembalian}
Uang cukup: ${ringkasan.uangCukup}
Gratis antar: ${ringkasan.gratisAntar}
Semua menu tersedia: ${ringkasan.semuaMenuTersedia}`);
}

const rataRataPendapatan = pendapatanHarian / jumlahTransaksi;
const totalBayarSemuaTransaksi = ringkasanTransaksi.map((ringkasan) => ringkasan.totalBayar);
const selisihTerbesar = Math.max(...totalBayarSemuaTransaksi) - Math.min(...totalBayarSemuaTransaksi);
const persentaseTransaksiPertama = (totalBayarTransaksiPertama / pendapatanHarian) * 100;
const hargaKopiTigaBulan = menu[0].harga * (1.05 ** 3);

console.log(`
LAPORAN HARIAN ${kedai.nama.toUpperCase()}
Jumlah transaksi: ${jumlahTransaksi}
Pendapatan harian: Rp${pendapatanHarian}
Rata-rata pendapatan: Rp${rataRataPendapatan}
Selisih total tertinggi dan terendah: Rp${selisihTerbesar}
Porsi transaksi pertama: ${persentaseTransaksiPertama.toFixed(2)}%
Harga kopi setelah kenaikan 5% selama 3 bulan: Rp${hargaKopiTigaBulan.toFixed(2)}`);

/*
Jawaban Bagian 3:
1. Contoh manual TRX-002: subtotal = (2 x 18.000) + (2 x 16.000) = 68.000.
   Potongan member = 10% x 68.000 = 6.800. Pajak = 11% x (68.000 - 6.800)
   = 6.732. Total = 68.000 - 6.800 + 6.732 = 67.932. Kembalian = 70.000 -
   67.932 = 2.068. Hasilnya sama dengan program.
2. Pada TRX-003, kondisi OR menghasilkan true (subtotal 75.000 atau jumlah item 6).
   Jika OR diganti AND, hasilnya false karena subtotal belum 100.000, walau item >= 5.
   OR cukup jika salah satu syarat terpenuhi; AND mengharuskan keduanya.
3. persentaseTransaksiPertama = (totalBayarTransaksiPertama / pendapatanHarian) * 100.
   Dengan kurung pada pembilang: (56.610 / 207.792) * 100 = sekitar 27,24%.
   Tanpa kurung: 56.610 / 207.792 * 100, hasilnya sama karena pembagian dan
   perkalian berprioritas sama dan dikerjakan dari kiri ke kanan. Contoh yang benar-benar
   berubah: (2 + 3) * 4 = 20, sedangkan 2 + 3 * 4 = 14.
4. const: menu (referensi array tidak diganti), transaksi (referensi tidak diganti),
   dan hasilTransaksiPertama (hasil hitung tidak ditugaskan ulang). let: pendapatanHarian
   dan jumlahTransaksi berubah selama loop; catatanKasir belum diberi nilai dan bisa diisi
   kemudian.
5. Kenaikan 5% berulang bersifat majemuk: 1.05 ** 3 = 1.157625. 1.05 * 3 = 3.15
   bukan faktor kenaikan tiga bulan; perkalian itu mengalikan faktor, bukan menerapkan
   kenaikan tiap bulan.
6. Tidak. Nilai total yang sudah tersimpan dan dicetak tidak berubah otomatis. Bukti:
   simpan total saat ini, ubah harga menu[0], hitung ulang, bandingkan hasilnya, lalu
   pulihkan harga. Nilai sebelum tetap, sedangkan hitung ulang memakai harga baru.
*/

const hargaKopiAsli = menu[0].harga;
const totalTersimpanSebelumHargaBerubah = totalBayarTransaksiPertama;
menu[0].harga = hargaKopiAsli + 1000;
const subtotalBaruSetelahHargaBerubah = hitungTransaksi(transaksi[0]).subtotal;
menu[0].harga = hargaKopiAsli;
console.log(
  "Bukti perubahan harga:",
  `total tersimpan tetap Rp${totalTersimpanSebelumHargaBerubah}; subtotal hitung ulang sementara Rp${subtotalBaruSetelahHargaBerubah}`
);