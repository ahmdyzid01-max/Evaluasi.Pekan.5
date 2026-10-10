// Tebakan: string "55". Hasil asli: "55" (string)
console.log(5 + "5");
// Tebakan: number 6. Hasil asli: 6
console.log("10" - 4);
// Tebakan: number 20. Hasil asli: 20
console.log("10" * "2");
// Tebakan: string. Hasil asli: string
console.log(typeof ("5" + 5));
// Tebakan: number 1. Hasil asli: 1
console.log(9 % 4);
// Tebakan: number 25. Hasil asli: 25
console.log((2 + 3) ** 2);
// Tebakan: number 2.5. Hasil asli: 2.5
console.log(10 / 4);
// Tebakan: Infinity. Hasil asli: Infinity
console.log(1 / 0);
// Tebakan: NaN. Hasil asli: NaN
console.log("abc" * 2);
// Tebakan: string "number". Hasil asli: "number"
console.log(typeof NaN);
// Tebakan: true. Hasil asli: true
console.log((5 > 3 && 2 > 4) || 1 === 1);
// Tebakan: true. Hasil asli: true
console.log(!true || !false);
// Tebakan: true. Hasil asli: true
console.log("5" == 5 && "5" !== 5);
// Tebakan: true. Hasil asli: true
console.log(typeof [] === typeof {});
// Tebakan: number 50. Hasil asli: 50
console.log([10, 20, 30][1] + [10, 20, 30][2]);

console.log("\nEksperimen var dan let:");
if (true) {
  var variabelVarDalamBlok = "var bisa dibaca di luar blok";
  let variabelLetDalamBlok = "let hanya bisa dibaca di dalam blok";
  console.log(variabelLetDalamBlok);
}
console.log(variabelVarDalamBlok);
// Jika diaktifkan, baris berikut menghasilkan ReferenceError:
// console.log(variabelLetDalamBlok);

var namaDenganVar = "nilai pertama";
var namaDenganVar = "nilai kedua";
console.log("var dideklarasikan ulang:", namaDenganVar);

let namaDenganLet = "nilai pertama";
// Jika diaktifkan bersama deklarasi di atas, terjadi SyntaxError:
// let namaDenganLet = "nilai kedua";

/*
Jawaban Bagian 5:
1. + dengan string melakukan penggabungan sehingga 5 + "5" menjadi string "55".
   Operator - memaksa "10" menjadi number, sehingga "10" - 4 menjadi number 6.
2. NaN berarti Not-a-Number: hasil operasi numerik yang tidak menghasilkan angka valid.
   NaN tetap bertipe number karena merupakan nilai khusus dalam tipe numerik JavaScript.
3. > dan === dievaluasi lebih dahulu: 5 > 3 adalah true, 2 > 4 adalah false,
   dan 1 === 1 adalah true. Lalu true && false menjadi false; false || true menjadi true.
4. Gunakan Array.isArray(nilai): hasilnya true untuk array dan false untuk object biasa.
5. let hasil = 5 + 10; adalah lexical declaration statement; expression 5 + 10 bernilai
   15 dan menjadi initializer hasil. console.log(hasil * 2); adalah expression statement
   yang memanggil console.log. Expression hasil * 2 bernilai 30 dan menjadi argumen
   pemanggilan; hasil sendiri dievaluasi menjadi 15.
6. eksperimen.js berjalan di browser ketika eksperimen.html dibuka; browser memuat dan
   mengeksekusi file melalui elemen script. Node.js menjalankan JavaScript di runtime
   server/command line, tanpa DOM browser secara default. let dan const dipakai karena
   cakupan bloknya jelas dan mencegah deklarasi ulang yang tidak sengaja seperti var.
7. var di dalam blok dapat dibaca di luar karena cakupannya function/global, sedangkan
   let hanya berlaku di blok dan akses dari luar melempar ReferenceError. var boleh
   dideklarasikan ulang dalam scope sama; let dengan nama sama menghasilkan SyntaxError.
8. Contoh bug: fungsi yang memakai var total di dalam blok if dapat menimpa var total
   milik scope fungsi yang sama. Perhitungan lain setelah blok lalu memakai total pajak
   sementara, bukan total penjualan yang seharusnya.
*/