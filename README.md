# Hapi.js: Membuat Web Server

Hapi.js adalah framework JavaScript yang dapat digunakan untuk membangun aplikasi web server. Berikut adalah tahapan-tahapan dasar untuk membuat web server dengan Hapi.js:

## Persiapan

* Pastikan Anda sudah memasang Node.js di komputer Anda.
* Buatlah sebuah folder untuk proyek Anda.
* Buka terminal/command prompt dan arahkan ke folder proyek tersebut.
* Ketik perintah npm init dan ikuti langkah-langkah yang ditampilkan untuk membuat file package.json yang mencatat semua dependensi yang dibutuhkan oleh proyek Anda.
* Install Hapi.js dengan mengetikkan perintah `npm install --save hapi` di terminal/command prompt.

## Membuat Server
Buatlah sebuah file JavaScript baru di folder proyek Anda, misalnya dengan nama server.js.
Import Hapi.js ke dalam file tersebut dengan menambahkan baris ini di awal file:

    const Hapi = require('hapi');

Buatlah sebuah server dengan Hapi.js dengan menambahkan baris ini di dalam file:

    const server = Hapi.server({
      host: 'localhost',
      port: 3000
    });

Buat sebuah rute yang akan ditangani oleh server dengan menambahkan baris ini di bawah baris sebelumnya:

    server.route({
      method: 'GET',
      path: '/',
      handler: (request, h) => {
        return 'Hello, World!';
      }
    });

Jalankan server dengan menambahkan baris ini di akhir file:

    server.start();
    console.log('Server running at:', server.info.uri);

Jalankan file server.js dengan mengetikkan perintah node server.js di terminal/command prompt.
Buka browser dan akses alamat http://localhost:3000 untuk mengecek apakah server sudah berjalan dengan baik.

## Penutup

Demikian tahapan-tahapan dasar untuk membuat web server dengan Hapi.js. Selamat mencoba!