// FIX: Gunakan komentar satu baris agar kode program tidak ikut menjadi komentar.
// FIX: Nama akan berubah nanti, jadi gunakan let agar dapat ditetapkan ulang.
let namaKedai = "Kedai Senja";
const HARGA_KOPI = 18000;
const HARGA_ROTI = 15000;
const TARIF_PAJAK = 0.11;
let jumlahKopi = 3;
let jumlahRoti = "2";
let transaksiSelesai = 0;

// Jumlah seluruh item. Seharusnya: 5
// FIX: Ubah jumlahRoti menjadi number agar operator + melakukan penjumlahan.
let jumlahItem = jumlahKopi + Number(jumlahRoti);

// Subtotal. Seharusnya: 84000
// FIX: Samakan kapitalisasi nama variabel jumlahKopi.
let subtotal = HARGA_KOPI * jumlahKopi + HARGA_ROTI * jumlahRoti;

// Pajak 11% dari subtotal setelah dipotong diskon 10000. Seharusnya: 8140
// FIX: Hitung pajak dari subtotal setelah diskon dengan tanda kurung.
let pajak = (subtotal - 10000) * TARIF_PAJAK;

// Total bayar. Seharusnya: 82140
// FIX: Tambahkan titik koma sebagai terminator statement.
let totalBayar = subtotal - 10000 + pajak;

// Pelanggan membayar 100000. Cukup? Seharusnya: true
let uangBayar = 100000;
// FIX: Bandingkan uang bayar dengan total, jangan menimpa nilai uang bayar.
let uangCukup = uangBayar >= totalBayar;

// Kembalian. Seharusnya: 17860
// FIX: Kembalian adalah uang bayar dikurangi total transaksi.
let kembalian = uangBayar - totalBayar;

// Jumlah item genap? Seharusnya: false
// FIX: Bilangan genap memiliki sisa bagi 0.
let itemGenap = jumlahItem % 2 === 0;

// Transaksi selesai bertambah 1. Seharusnya: 1
// FIX: Simpan hasil penambahan kembali ke variabel.
transaksiSelesai += 1;

// Kedai berganti nama. Seharusnya "Kedai Senja Baru"
namaKedai = "Kedai Senja Baru";

// Tarif pajak tidak boleh berubah. Seharusnya tetap 0.11
// FIX: Hapus assignment yang mencoba mengubah konstanta.

// FIX: JavaScript membedakan huruf besar dan kecil; gunakan console.
console.log(namaKedai, jumlahItem, subtotal, pajak, totalBayar, uangCukup, kembalian, itemGenap, transaksiSelesai);

/*
Catatan Bug (12 perbaikan):
1. Error sintaks/perilaku: pembuka komentar blok tidak ditutup sehingga seluruh program
   menjadi komentar dan tidak berjalan.
2. Tidak error, hasil salah: number + string menggabungkan teks ("32"), bukan menjumlahkan.
3. Error saat runtime: jumlahkopi tidak didefinisikan karena kapitalisasi berbeda.
4. Tidak error, hasil salah: prioritas perkalian membuat diskon dikalikan tarif pajak dahulu.
5. Tidak error, tetapi kurang rapi: statement totalBayar tidak diakhiri titik koma.
6. Tidak error, hasil salah: operator = melakukan assignment, bukan membandingkan kecukupan.
7. Tidak error, hasil salah: pengurangan dibalik sehingga hasil kembalian negatif.
8. Tidak error, hasil salah: sisa bagi 1 menandai bilangan ganjil, bukan genap.
9. Tidak error, hasil salah: ekspresi transaksiSelesai + 1 tidak menyimpan nilai baru.
10. Error sintaks: namaKedai dideklarasikan ulang dalam scope yang sama dengan let.
11. Error saat runtime: assignment mencoba mengubah konstanta TARIF_PAJAK.
12. Error saat runtime: Console tidak dikenal karena nama global JavaScript adalah console.
*/
