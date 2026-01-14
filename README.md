# xegavnj (DapoerRasa Library)

Library komponen React untuk DapoerRasa yang menyediakan kumpulan komponen reusable yang dirancang untuk aplikasi web modern dengan dukungan tema.

## Instalasi

```bash
npm install xegavnj
```

## Penggunaan Dasar

Import komponen yang Anda butuhkan lalu gunakan dalam file React Anda. Pastikan untuk membungkus aplikasi Anda dengan `ThemeProvider` jika ingin menggunakan fitur tema otomatis.

```jsx
import { ThemeProvider, AppHeader, Button } from "xegavnj";

export default function App() {
  return (
    <ThemeProvider>
      <AppHeader variant="primary" logo="DapoerRasa" />
      <main style={{ padding: '2rem' }}>
        <h1>Selamat Datang</h1>
        <Button label="Klik Saya" onClick={() => alert('Halo!')} />
      </main>
    </ThemeProvider>
  );
}
```

## Komponen & Varian

### Button
Komponen tombol yang dapat disesuaikan sepenuhnya.

**Props:**
- `label`: Teks tombol.
- `bg`: Warna background.
- `icon`: Komponen icon (dari lucide-react).
- `variant`: (Custom melalui props style seperti bg, border).

### Card
Komponen kartu untuk menampilkan konten.

**Varian (`variant`):**
- `basic`: Kartu teks sederhana dengan border atas berwarna.
- `image`: Kartu dengan gambar di atas.
- `horizontal`: Kartu layout mendatar (gambar di kiri, konten di kanan).

**Props:**
- `title`, `description`, `image`, `buttonLabel`, `meta`.

### AppHeader
Header navigasi responsif.

**Varian (`variant`):**
- `primary`: Background solid (ungu), menu di kanan.
- `centered`: Logo besar di tengah, menu di bawahnya.
- `split`: Gradient background, menu dan tombol CTA terpisah.

**Props:**
- `logo`: Teks logo.
- `menuItems`: Array object `{ label, href }`.
- `showThemeToggle`: Boolean untuk menampilkan tombol ganti tema.

### AppSidebar
Sidebar navigasi untuk dashboard atau dokumentasi.

**Varian (`variant`):**
- `default`: List menu vertikal standar.
- `grouped`: Menu dikelompokkan berdasarkan kategori.
- `floating`: Sidebar melayang dengan sudut membulat.

**Props:**
- `title`: Judul sidebar.
- `items`: Array menu item.
- `groups`: Array group untuk varian grouped.

### AppFooter
Footer halaman.

**Varian (`variant`):**
- `primary`: Footer sederhana centered.
- `dark`: Background gelap dengan dukungan ikon sosmed.
- `split`: Layout terpisah untuk link tambahan.

**Props:**
- `copyright`: Teks hak cipta.
- `socials`: Boolean untuk ikon sosmed (hanya varian dark).
- `links`: Array link tambahan (hanya varian split).
