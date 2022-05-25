# Mengubah gambar SVG jadi PNG

`svgkepng-filter` adalah filter pandoc yang mendukung format tag SVG dalam markdown.

Tulis gambar Anda dalam blok kode berpagar seperti biasa seperti ini:

    ~~~{.svgkepng}
        <svg width="400" height="110">
        <rect width="300" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>
    ~~~

dan hasilnya akan terlihat dalam file output.

## Install dan Penggunaan

1. Clone repo ini `git clone https://github.com/ananurdiana/svgkepng-filter.git`
2. Masuk ke directory `svgkepng-filter`
3. Install dependencies `npm install`
3. Install project ke npm global `npm install -g .`
3. Untuk mengubah file markdown kamu dari `test.md` ke `test.docx`, jalankan perintah `pandoc test.md -o test.docx -F svgkepng-filter.cmd  -F mermaid-filter.cmd`

**WINDOWS** - untuk pengguna windows harus menggunakan `svgkepng-filter.cmd` pada perindah `pandoc`
