import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // BAGIAN I: PILIHAN GANDA (25 SOAL)
  // ==========================================

  // --- SOAL 1 ---
  {
    id: 1,
    type: 'pg',
    topic: 'Faktor Bilangan',
    difficulty: 'Mudah',
    text: 'Perhatikan bagan perkalian faktor bilangan 18 pada gambar di atas!\nSemua faktor dari bilangan 18 adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="150" y="12" width="100" height="32" rx="8" fill="#1E40AF"/>
      <text x="200" y="33" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">BILANGAN 18</text>
      <!-- Row 1 -->
      <rect x="40" y="60" width="90" height="28" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
      <text x="85" y="78" fill="#1E3A8A" font-size="12" font-weight="bold" text-anchor="middle">1 × 18 = 18</text>
      <!-- Row 2 -->
      <rect x="155" y="60" width="90" height="28" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
      <text x="200" y="78" fill="#1E3A8A" font-size="12" font-weight="bold" text-anchor="middle">2 × 9 = 18</text>
      <!-- Row 3 -->
      <rect x="270" y="60" width="90" height="28" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
      <text x="315" y="78" fill="#1E3A8A" font-size="12" font-weight="bold" text-anchor="middle">3 × 6 = 18</text>
      <text x="200" y="112" fill="#64748B" font-size="11" text-anchor="middle">Faktor pembagi habis bilangan 18</text>
    </svg>`,
    options: [
      { id: 'A', text: '1, 2, 3, 4, 6, 18' },
      { id: 'B', text: '1, 2, 3, 6, 9, 18' },
      { id: 'C', text: '1, 3, 6, 9, 18' },
      { id: 'D', text: '2, 3, 6, 9, 18' },
    ],
    correctAnswer: 'B',
    explanation:
      'Faktor dari suatu bilangan adalah bilangan-bilangan yang dapat membagi habis bilangan tersebut tanpa sisa.\n18 ÷ 1 = 18\n18 ÷ 2 = 9\n18 ÷ 3 = 6\nJadi faktor dari 18 adalah 1, 2, 3, 6, 9, dan 18.',
  },

  // --- SOAL 2 ---
  {
    id: 2,
    type: 'pg',
    topic: 'Faktor Bilangan',
    difficulty: 'Mudah',
    text: 'Perhatikan tabel pasangan faktor dari bilangan 24 di atas.\nBerdasarkan tabel tersebut, banyaknya faktor dari bilangan 24 adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="150" y="10" width="100" height="28" rx="6" fill="#047857"/>
      <text x="200" y="29" fill="#FFFFFF" font-size="13" font-weight="bold" text-anchor="middle">FAKTOR DARI 24</text>
      <!-- Cards -->
      <g transform="translate(30, 50)">
        <rect x="0" y="0" width="75" height="30" rx="6" fill="#ECFDF5" stroke="#10B981"/>
        <text x="37" y="20" font-size="12" font-weight="bold" fill="#065F46" text-anchor="middle">1 × 24</text>
        <rect x="88" y="0" width="75" height="30" rx="6" fill="#ECFDF5" stroke="#10B981"/>
        <text x="125" y="20" font-size="12" font-weight="bold" fill="#065F46" text-anchor="middle">2 × 12</text>
        <rect x="176" y="0" width="75" height="30" rx="6" fill="#ECFDF5" stroke="#10B981"/>
        <text x="213" y="20" font-size="12" font-weight="bold" fill="#065F46" text-anchor="middle">3 × 8</text>
        <rect x="264" y="0" width="75" height="30" rx="6" fill="#ECFDF5" stroke="#10B981"/>
        <text x="301" y="20" font-size="12" font-weight="bold" fill="#065F46" text-anchor="middle">4 × 6</text>
      </g>
      <text x="200" y="110" fill="#475569" font-size="11" text-anchor="middle">Faktor: { 1, 2, 3, 4, 6, 8, 12, 24 }</text>
    </svg>`,
    options: [
      { id: 'A', text: '6 bilangan' },
      { id: 'B', text: '7 bilangan' },
      { id: 'C', text: '8 bilangan' },
      { id: 'D', text: '10 bilangan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pasangan perkalian yang menghasilkan 24:\n1 × 24, 2 × 12, 3 × 8, 4 × 6.\nFaktor-faktor dari 24 yaitu: 1, 2, 3, 4, 6, 8, 12, 24.\nJumlah faktor seluruhnya ada 8 bilangan.',
  },

  // --- SOAL 3 ---
  {
    id: 3,
    type: 'pg',
    topic: 'Bilangan Prima',
    difficulty: 'Mudah',
    text: 'Perhatikan bagan bilangan antara 10 sampai 30 pada gambar di atas!\nBilangan-bilangan yang diarsir lingkaran hijau adalah bilangan prima. Banyaknya bilangan prima antara 10 dan 30 adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="200" y="25" fill="#334155" font-size="12" font-weight="bold" text-anchor="middle">Bilangan Prima antara 10 dan 30</text>
      <g transform="translate(30, 45)">
        <!-- Circle 11 -->
        <circle cx="25" cy="25" r="22" fill="#10B981"/>
        <text x="25" y="31" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">11</text>
        <!-- Circle 13 -->
        <circle cx="85" cy="25" r="22" fill="#10B981"/>
        <text x="85" y="31" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">13</text>
        <!-- Circle 17 -->
        <circle cx="145" cy="25" r="22" fill="#10B981"/>
        <text x="145" y="31" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">17</text>
        <!-- Circle 19 -->
        <circle cx="205" cy="25" r="22" fill="#10B981"/>
        <text x="205" y="31" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">19</text>
        <!-- Circle 23 -->
        <circle cx="265" cy="25" r="22" fill="#10B981"/>
        <text x="265" y="31" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">23</text>
        <!-- Circle 29 -->
        <circle cx="325" cy="25" r="22" fill="#10B981"/>
        <text x="325" y="31" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">29</text>
      </g>
      <text x="200" y="112" fill="#047857" font-size="11" font-weight="medium" text-anchor="middle">Hanya memiliki 2 faktor: angka 1 dan bilangan itu sendiri</text>
    </svg>`,
    options: [
      { id: 'A', text: '5 bilangan' },
      { id: 'B', text: '6 bilangan' },
      { id: 'C', text: '7 bilangan' },
      { id: 'D', text: '8 bilangan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bilangan prima adalah bilangan yang hanya mempunyai dua faktor yaitu 1 dan bilangan itu sendiri.\nBilangan prima antara 10 dan 30 adalah: 11, 13, 17, 19, 23, dan 29.\nJumlahnya ada 6 bilangan.',
  },

  // --- SOAL 4 ---
  {
    id: 4,
    type: 'pg',
    topic: 'Faktorisasi Prima',
    difficulty: 'Sedang',
    text: 'Perhatikan diagram pohon faktor dari bilangan 36 pada gambar di atas!\nBentuk faktorisasi prima dari bilangan 36 yang tepat adalah...',
    image: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <!-- Top 36 -->
      <circle cx="200" cy="25" r="16" fill="#1E293B"/>
      <text x="200" y="30" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">36</text>
      <!-- Line to 2 and 18 -->
      <line x1="190" y1="38" x2="140" y2="60" stroke="#64748B" stroke-width="2"/>
      <line x1="210" y1="38" x2="260" y2="60" stroke="#64748B" stroke-width="2"/>
      <!-- Circle 2 (prime) -->
      <circle cx="140" cy="65" r="14" fill="#2563EB"/>
      <text x="140" y="70" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">2</text>
      <!-- Circle 18 -->
      <circle cx="260" cy="65" r="14" fill="#94A3B8"/>
      <text x="260" y="70" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">18</text>
      <!-- Line to 2 and 9 -->
      <line x1="250" y1="78" x2="220" y2="100" stroke="#64748B" stroke-width="2"/>
      <line x1="270" y1="78" x2="300" y2="100" stroke="#64748B" stroke-width="2"/>
      <!-- Circle 2 (prime) -->
      <circle cx="220" cy="105" r="14" fill="#2563EB"/>
      <text x="220" y="110" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">2</text>
      <!-- Circle 9 -->
      <circle cx="300" cy="105" r="14" fill="#94A3B8"/>
      <text x="300" y="110" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">9</text>
      <!-- Line to 3 and 3 -->
      <line x1="290" y1="117" x2="270" y2="132" stroke="#64748B" stroke-width="2"/>
      <line x1="310" y1="117" x2="330" y2="132" stroke="#64748B" stroke-width="2"/>
      <circle cx="270" cy="135" r="12" fill="#2563EB"/>
      <text x="270" y="139" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">3</text>
      <circle cx="330" cy="135" r="12" fill="#2563EB"/>
      <text x="330" y="139" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">3</text>
      <text x="70" y="135" fill="#2563EB" font-size="11" font-weight="bold">Faktor prima berarsir biru</text>
    </svg>`,
    options: [
      { id: 'A', text: '2 × 3²' },
      { id: 'B', text: '2² × 3²' },
      { id: 'C', text: '2² × 9' },
      { id: 'D', text: '4 × 3²' },
    ],
    correctAnswer: 'B',
    explanation:
      'Dari pohon faktor, bilangan prima pembagi 36 adalah 2, 2, 3, dan 3.\nMaka faktorisasi primanya ditulis dalam bentuk perpangkatan:\n36 = 2 × 2 × 3 × 3 = 2² × 3².',
  },

  // --- SOAL 5 ---
  {
    id: 5,
    type: 'pg',
    topic: 'Faktorisasi Prima',
    difficulty: 'Sedang',
    text: 'Perhatikan pohon faktor bilangan 60 di atas yang belum lengkap!\nAngka yang tepat untuk menggantikan tanda tanya (?) pada lingkaran kuning adalah...',
    image: `<svg viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="150" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <circle cx="200" cy="25" r="16" fill="#1E293B"/>
      <text x="200" y="30" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">60</text>
      <line x1="190" y1="38" x2="140" y2="60" stroke="#64748B" stroke-width="2"/>
      <line x1="210" y1="38" x2="260" y2="60" stroke="#64748B" stroke-width="2"/>
      <circle cx="140" cy="65" r="14" fill="#2563EB"/>
      <text x="140" y="70" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">2</text>
      <circle cx="260" cy="65" r="14" fill="#94A3B8"/>
      <text x="260" y="70" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">30</text>
      <line x1="250" y1="78" x2="220" y2="100" stroke="#64748B" stroke-width="2"/>
      <line x1="270" y1="78" x2="300" y2="100" stroke="#64748B" stroke-width="2"/>
      <circle cx="220" cy="105" r="14" fill="#2563EB"/>
      <text x="220" y="110" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">2</text>
      <circle cx="300" cy="105" r="14" fill="#94A3B8"/>
      <text x="300" y="110" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">15</text>
      <line x1="290" y1="117" x2="270" y2="132" stroke="#64748B" stroke-width="2"/>
      <line x1="310" y1="117" x2="330" y2="132" stroke="#64748B" stroke-width="2"/>
      <circle cx="270" cy="135" r="13" fill="#2563EB"/>
      <text x="270" y="140" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">3</text>
      <!-- Mystery circle ? -->
      <circle cx="330" cy="135" r="13" fill="#F59E0B" stroke="#D97706" stroke-width="2"/>
      <text x="330" y="140" fill="#FFFFFF" font-size="13" font-weight="bold" text-anchor="middle">?</text>
    </svg>`,
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada cabang terakhir: 15 dibagi 3 menghasilkan 5.\nKarena 5 adalah bilangan prima, maka angka untuk mengisi tanda (?) adalah 5.\nFaktorisasi prima dari 60 = 2² × 3 × 5.',
  },

  // --- SOAL 6 ---
  {
    id: 6,
    type: 'pg',
    topic: 'Faktor Persekutuan',
    difficulty: 'Sedang',
    text: 'Perhatikan diagram Venn persekutuan faktor bilangan 12 dan 18 di atas!\nFaktor persekutuan dari 12 dan 18 (bagian irisan tengah) adalah...',
    image: `<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="140" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <!-- Circle 12 -->
      <circle cx="160" cy="70" r="50" fill="#3B82F6" fill-opacity="0.15" stroke="#2563EB" stroke-width="2"/>
      <!-- Circle 18 -->
      <circle cx="240" cy="70" r="50" fill="#10B981" fill-opacity="0.15" stroke="#059669" stroke-width="2"/>
      <!-- Label Titles -->
      <text x="140" y="32" fill="#1D4ED8" font-size="11" font-weight="bold">Faktor 12</text>
      <text x="235" y="32" fill="#047857" font-size="11" font-weight="bold">Faktor 18</text>
      <!-- Left only: 4, 12 -->
      <text x="135" y="65" fill="#1E40AF" font-size="12" font-weight="bold">4</text>
      <text x="135" y="85" fill="#1E40AF" font-size="12" font-weight="bold">12</text>
      <!-- Intersection: 1, 2, 3, 6 -->
      <rect x="185" y="44" width="30" height="52" rx="6" fill="#FEF3C7" stroke="#F59E0B"/>
      <text x="200" y="58" fill="#B45309" font-size="10" font-weight="bold" text-anchor="middle">1, 2</text>
      <text x="200" y="82" fill="#B45309" font-size="10" font-weight="bold" text-anchor="middle">3, 6</text>
      <!-- Right only: 9, 18 -->
      <text x="260" y="65" fill="#065F46" font-size="12" font-weight="bold">9</text>
      <text x="260" y="85" fill="#065F46" font-size="12" font-weight="bold">18</text>
      <text x="200" y="126" fill="#64748B" font-size="10" text-anchor="middle">Irisan kuning = Faktor Persekutuan</text>
    </svg>`,
    options: [
      { id: 'A', text: '1, 2, 3, 6' },
      { id: 'B', text: '1, 2, 4, 6' },
      { id: 'C', text: '2, 3, 6, 9' },
      { id: 'D', text: '1, 3, 6, 12' },
    ],
    correctAnswer: 'A',
    explanation:
      'Faktor dari 12 = { 1, 2, 3, 4, 6, 12 }\nFaktor dari 18 = { 1, 2, 3, 6, 9, 18 }\nFaktor yang sama (bersekutu) pada kedua bilangan tersebut adalah 1, 2, 3, dan 6.',
  },

  // --- SOAL 7 ---
  {
    id: 7,
    type: 'pg',
    topic: 'Faktor Persekutuan',
    difficulty: 'Sedang',
    text: 'Perhatikan diagram irisan faktor dari bilangan 20 dan 30 di atas!\nFaktor persekutuan terbesar (angka paling besar di bagian irisan) dari 20 dan 30 adalah...',
    image: `<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="140" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <circle cx="160" cy="70" r="50" fill="#6366F1" fill-opacity="0.15" stroke="#4F46E5" stroke-width="2"/>
      <circle cx="240" cy="70" r="50" fill="#EC4899" fill-opacity="0.15" stroke="#DB2777" stroke-width="2"/>
      <text x="135" y="32" fill="#4338CA" font-size="11" font-weight="bold">Faktor 20</text>
      <text x="235" y="32" fill="#BE185D" font-size="11" font-weight="bold">Faktor 30</text>
      <text x="130" y="65" fill="#312E81" font-size="11" font-weight="bold">4, 20</text>
      <!-- Intersection -->
      <rect x="180" y="44" width="40" height="52" rx="6" fill="#FEF3C7" stroke="#F59E0B"/>
      <text x="200" y="60" fill="#92400E" font-size="11" font-weight="bold" text-anchor="middle">1, 2</text>
      <text x="200" y="82" fill="#92400E" font-size="12" font-weight="extrabold" text-anchor="middle">5, 10</text>
      <text x="260" y="65" fill="#831843" font-size="11" font-weight="bold">3, 6, 15, 30</text>
      <text x="200" y="126" fill="#64748B" font-size="10" text-anchor="middle">Faktor persekutuan: { 1, 2, 5, 10 }</text>
    </svg>`,
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '5' },
      { id: 'C', text: '10' },
      { id: 'D', text: '20' },
    ],
    correctAnswer: 'C',
    explanation:
      'Faktor dari 20 = {1, 2, 4, 5, 10, 20}\nFaktor dari 30 = {1, 2, 3, 5, 6, 10, 15, 30}\nFaktor persekutuan = {1, 2, 5, 10}.\nNilai yang terbesar adalah 10, sehingga FPB dari 20 dan 30 adalah 10.',
  },

  // --- SOAL 8 ---
  {
    id: 8,
    type: 'pg',
    topic: 'FPB (Faktor Persekutuan Terbesar)',
    difficulty: 'Sedang',
    text: 'Perhatikan faktorisasi prima bilangan 16 dan 24 pada gambar di atas!\n16 = 2⁴\n24 = 2³ × 3\nFaktor Persekutuan Terbesar (FPB) dari 16 dan 24 adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="80" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="80" y="24" fill="#1E40AF" font-size="12" font-weight="bold" text-anchor="middle">Bilangan 16</text>
        <text x="80" y="48" fill="#1E3A8A" font-size="13" font-weight="extrabold" text-anchor="middle">2 × 2 × 2 × 2</text>
        <text x="80" y="68" fill="#2563EB" font-size="11" font-weight="bold" text-anchor="middle">= 2⁴</text>
      </g>
      <g transform="translate(210, 20)">
        <rect x="0" y="0" width="160" height="80" rx="8" fill="#F0FDF4" stroke="#22C55E"/>
        <text x="80" y="24" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">Bilangan 24</text>
        <text x="80" y="48" fill="#14532D" font-size="13" font-weight="extrabold" text-anchor="middle">2 × 2 × 2 × 3</text>
        <text x="80" y="68" fill="#16A34A" font-size="11" font-weight="bold" text-anchor="middle">= 2³ × 3</text>
      </g>
      <text x="200" y="118" fill="#475569" font-size="11" text-anchor="middle">FPB = Ambil faktor sama berpangkat terkecil (2³)</text>
    </svg>`,
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '12' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk mencari FPB menggunakan faktorisasi prima, pilih faktor prima yang sama dengan pangkat terkecil.\nFaktor prima yang sama antara 16 (2⁴) dan 24 (2³ × 3) adalah 2.\nPangkat terkecil adalah 2³.\nFPB = 2³ = 2 × 2 × 2 = 8.',
  },

  // --- SOAL 9 ---
  {
    id: 9,
    type: 'pg',
    topic: 'FPB (Metode Tabel Sengkedan)',
    difficulty: 'Sedang',
    text: 'Perhatikan tabel pembagian prima bersama (metode sengkedan) di atas untuk bilangan 24 dan 36.\nFPB dari 24 dan 36 adalah hasil kali bilangan prima yang dapat membagi kedua bilangan secara bersamaan (bertanda bintang *), yaitu...',
    image: `<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="140" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <text x="200" y="22" fill="#1E293B" font-size="12" font-weight="bold" text-anchor="middle">Tabel Pembagian Prima Bersusun (Sengkedan)</text>
      <g transform="translate(60, 35)">
        <!-- Table Header -->
        <rect x="0" y="0" width="80" height="20" fill="#3B82F6"/>
        <text x="40" y="14" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Pembagi</text>
        <rect x="80" y="0" width="100" height="20" fill="#1E40AF"/>
        <text x="130" y="14" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">24</text>
        <rect x="180" y="0" width="100" height="20" fill="#1E40AF"/>
        <text x="230" y="14" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">36</text>
        <!-- Row 1 -->
        <rect x="0" y="20" width="80" height="18" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="40" y="33" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">2 *</text>
        <rect x="80" y="20" width="100" height="18" fill="#FFFFFF" stroke="#BFDBFE"/>
        <text x="130" y="33" fill="#1E293B" font-size="10" text-anchor="middle">12</text>
        <rect x="180" y="20" width="100" height="18" fill="#FFFFFF" stroke="#BFDBFE"/>
        <text x="230" y="33" fill="#1E293B" font-size="10" text-anchor="middle">18</text>
        <!-- Row 2 -->
        <rect x="0" y="38" width="80" height="18" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="40" y="51" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">2 *</text>
        <rect x="80" y="38" width="100" height="18" fill="#FFFFFF" stroke="#BFDBFE"/>
        <text x="130" y="51" fill="#1E293B" font-size="10" text-anchor="middle">6</text>
        <rect x="180" y="38" width="100" height="18" fill="#FFFFFF" stroke="#BFDBFE"/>
        <text x="230" y="51" fill="#1E293B" font-size="10" text-anchor="middle">9</text>
        <!-- Row 3 -->
        <rect x="0" y="56" width="80" height="18" fill="#EFF6FF" stroke="#BFDBFE"/>
        <text x="40" y="69" fill="#1D4ED8" font-size="10" font-weight="bold" text-anchor="middle">3 *</text>
        <rect x="80" y="56" width="100" height="18" fill="#FFFFFF" stroke="#BFDBFE"/>
        <text x="130" y="69" fill="#1E293B" font-size="10" text-anchor="middle">2</text>
        <rect x="180" y="56" width="100" height="18" fill="#FFFFFF" stroke="#BFDBFE"/>
        <text x="230" y="69" fill="#1E293B" font-size="10" text-anchor="middle">3</text>
      </g>
      <text x="200" y="128" fill="#047857" font-size="10" font-weight="bold" text-anchor="middle">Tanda (*) membagi habis kedua bilangan</text>
    </svg>`,
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '12' },
      { id: 'C', text: '18' },
      { id: 'D', text: '24' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bilangan prima yang dapat membagi 24 dan 36 secara bersamaan adalah 2, 2, dan 3.\nFPB = 2 × 2 × 3 = 12.',
  },

  // --- SOAL 10 ---
  {
    id: 10,
    type: 'pg',
    topic: 'FPB Tiga Bilangan',
    difficulty: 'Sukar',
    text: 'Perhatikan faktorisasi prima dari tiga bilangan di atas!\n18 = 2 × 3²\n27 = 3³\n36 = 2² × 3²\nFaktor Persekutuan Terbesar (FPB) dari 18, 27, dan 36 adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="110" height="75" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="55" y="24" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">18</text>
        <text x="55" y="48" fill="#1E3A8A" font-size="12" font-weight="bold" text-anchor="middle">2 × 3²</text>
      </g>
      <g transform="translate(145, 20)">
        <rect x="0" y="0" width="110" height="75" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="55" y="24" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">27</text>
        <text x="55" y="48" fill="#92400E" font-size="12" font-weight="bold" text-anchor="middle">3³</text>
      </g>
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="110" height="75" rx="8" fill="#F0FDF4" stroke="#22C55E"/>
        <text x="55" y="24" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">36</text>
        <text x="55" y="48" fill="#14532D" font-size="12" font-weight="bold" text-anchor="middle">2² × 3²</text>
      </g>
      <text x="200" y="115" fill="#475569" font-size="11" text-anchor="middle">Faktor prima yang ada di ketiga bilangan hanya angka 3</text>
    </svg>`,
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '6' },
      { id: 'C', text: '9' },
      { id: 'D', text: '18' },
    ],
    correctAnswer: 'C',
    explanation:
      'Faktor prima yang dimiliki oleh ketiga bilangan sekaligus adalah hanya angka 3.\nPangkat terkecil dari 3 adalah 3² (yaitu pada 18 dan 36).\nMaka FPB = 3² = 9.',
  },

  // --- SOAL 11 ---
  {
    id: 11,
    type: 'pg',
    topic: 'Kelipatan Bilangan',
    difficulty: 'Mudah',
    text: 'Perhatikan garis bilangan lompatan kelipatan 6 pada gambar di atas!\nBilangan kelipatan 6 yang nilainya kurang dari 40 adalah...',
    image: `<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <line x1="20" y1="70" x2="380" y2="70" stroke="#94A3B8" stroke-width="2"/>
      <!-- Jumps -->
      <path d="M 30 70 Q 55 35 80 70" fill="none" stroke="#2563EB" stroke-width="2"/>
      <path d="M 80 70 Q 105 35 130 70" fill="none" stroke="#2563EB" stroke-width="2"/>
      <path d="M 130 70 Q 155 35 180 70" fill="none" stroke="#2563EB" stroke-width="2"/>
      <path d="M 180 70 Q 205 35 230 70" fill="none" stroke="#2563EB" stroke-width="2"/>
      <path d="M 230 70 Q 255 35 280 70" fill="none" stroke="#2563EB" stroke-width="2"/>
      <path d="M 280 70 Q 305 35 330 70" fill="none" stroke="#2563EB" stroke-width="2"/>
      <!-- Dots & Labels -->
      <circle cx="30" cy="70" r="4" fill="#1E293B"/><text x="30" y="88" font-size="10" font-weight="bold" text-anchor="middle">0</text>
      <circle cx="80" cy="70" r="4" fill="#2563EB"/><text x="80" y="88" font-size="10" font-weight="bold" text-anchor="middle">6</text>
      <circle cx="130" cy="70" r="4" fill="#2563EB"/><text x="130" y="88" font-size="10" font-weight="bold" text-anchor="middle">12</text>
      <circle cx="180" cy="70" r="4" fill="#2563EB"/><text x="180" y="88" font-size="10" font-weight="bold" text-anchor="middle">18</text>
      <circle cx="230" cy="70" r="4" fill="#2563EB"/><text x="230" y="88" font-size="10" font-weight="bold" text-anchor="middle">24</text>
      <circle cx="280" cy="70" r="4" fill="#2563EB"/><text x="280" y="88" font-size="10" font-weight="bold" text-anchor="middle">30</text>
      <circle cx="330" cy="70" r="4" fill="#2563EB"/><text x="330" y="88" font-size="10" font-weight="bold" text-anchor="middle">36</text>
      <text x="200" y="24" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">Lompatan +6 setiap langkah</text>
    </svg>`,
    options: [
      { id: 'A', text: '6, 12, 18, 24, 30, 36' },
      { id: 'B', text: '6, 12, 18, 24, 32, 36' },
      { id: 'C', text: '1, 2, 3, 6, 12, 18' },
      { id: 'D', text: '6, 12, 18, 24, 30, 36, 42' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kelipatan 6 diperoleh dari perkalian 6 dengan bilangan bulat positif:\n6 × 1 = 6\n6 × 2 = 12\n6 × 3 = 18\n6 × 4 = 24\n6 × 5 = 30\n6 × 6 = 36\n(Kelipatan berikutnya 42 sudah melebihi 40).\nJadi kelipatan 6 yang kurang dari 40 adalah 6, 12, 18, 24, 30, dan 36.',
  },

  // --- SOAL 12 ---
  {
    id: 12,
    type: 'pg',
    topic: 'Kelipatan Persekutuan',
    difficulty: 'Sedang',
    text: 'Perhatikan bagan garis lompatan kelipatan bilangan 4 dan 6 pada gambar di atas!\nKelipatan persekutuan terkecil (titik temu pertama kali selain angka 0) dari bilangan 4 dan 6 adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <!-- Line 4 -->
      <text x="35" y="42" fill="#0284C7" font-size="11" font-weight="bold">Kelipatan 4:</text>
      <text x="120" y="42" fill="#0369A1" font-size="11">4,  8,  <tspan fill="#DC2626" font-weight="bold">12</tspan>,  16,  20,  <tspan fill="#DC2626" font-weight="bold">24</tspan>,  28...</text>
      <!-- Line 6 -->
      <text x="35" y="75" fill="#16A34A" font-size="11" font-weight="bold">Kelipatan 6:</text>
      <text x="120" y="75" fill="#15803D" font-size="11">6,  <tspan fill="#DC2626" font-weight="bold">12</tspan>,  18,  <tspan fill="#DC2626" font-weight="bold">24</tspan>,  30,  36...</text>
      <!-- Highlight box for 12 -->
      <rect x="145" y="24" width="26" height="64" rx="4" fill="#FEE2E2" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3 3"/>
      <text x="200" y="112" fill="#DC2626" font-size="11" font-weight="bold" text-anchor="middle">Titik Temu Pertama = Angka 12 (KPK)</text>
    </svg>`,
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '18' },
      { id: 'C', text: '24' },
      { id: 'D', text: '36' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kelipatan 4 = 4, 8, 12, 16, 20, 24, 28, ...\nKelipatan 6 = 6, 12, 18, 24, 30, 36, ...\nKelipatan persekutuannya adalah 12, 24, 36, ...\nKelipatan persekutuan yang paling kecil (KPK) adalah 12.',
  },

  // --- SOAL 13 ---
  {
    id: 13,
    type: 'pg',
    topic: 'KPK (Kelipatan Persekutuan Terkecil)',
    difficulty: 'Sedang',
    text: 'Perhatikan garis lompatan kelipatan 8 dan 12 pada gambar di atas!\nKelipatan Persekutuan Terkecil (KPK) dari 8 dan 12 adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="150" height="70" rx="8" fill="#F0FDF4" stroke="#22C55E"/>
        <text x="75" y="22" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">Kelipatan 8</text>
        <text x="75" y="46" fill="#14532D" font-size="11" text-anchor="middle">8, 16, <tspan fill="#DC2626" font-weight="bold">24</tspan>, 32, 40...</text>
      </g>
      <g transform="translate(210, 20)">
        <rect x="0" y="0" width="150" height="70" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="75" y="22" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">Kelipatan 12</text>
        <text x="75" y="46" fill="#1E3A8A" font-size="11" text-anchor="middle">12, <tspan fill="#DC2626" font-weight="bold">24</tspan>, 36, 48...</text>
      </g>
      <text x="200" y="112" fill="#DC2626" font-size="12" font-weight="bold" text-anchor="middle">Angka persekutuan pertama: 24</text>
    </svg>`,
    options: [
      { id: 'A', text: '16' },
      { id: 'B', text: '24' },
      { id: 'C', text: '36' },
      { id: 'D', text: '48' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kelipatan 8: 8, 16, 24, 32, 40, 48, ...\nKelipatan 12: 12, 24, 36, 48, ...\nKelipatan persekutuan pertama yang sama adalah 24.\nJadi KPK dari 8 dan 12 adalah 24.',
  },

  // --- SOAL 14 ---
  {
    id: 14,
    type: 'pg',
    topic: 'KPK (Faktorisasi Prima)',
    difficulty: 'Sedang',
    text: 'Perhatikan pohon faktor dari bilangan 15 dan 20 di atas!\n15 = 3 × 5\n20 = 2² × 5\nKelipatan Persekutuan Terkecil (KPK) dari 15 dan 20 adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="75" rx="8" fill="#FFFBEB" stroke="#F59E0B"/>
        <text x="80" y="24" fill="#B45309" font-size="12" font-weight="bold" text-anchor="middle">Bilangan 15</text>
        <text x="80" y="52" fill="#92400E" font-size="13" font-weight="bold" text-anchor="middle">3 × 5</text>
      </g>
      <g transform="translate(210, 20)">
        <rect x="0" y="0" width="160" height="75" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="80" y="24" fill="#1E40AF" font-size="12" font-weight="bold" text-anchor="middle">Bilangan 20</text>
        <text x="80" y="52" fill="#1E3A8A" font-size="13" font-weight="bold" text-anchor="middle">2² × 5</text>
      </g>
      <text x="200" y="115" fill="#475569" font-size="11" text-anchor="middle">KPK = Kalikan semua faktor dengan pangkat terbesar: 2² × 3 × 5</text>
    </svg>`,
    options: [
      { id: 'A', text: '30' },
      { id: 'B', text: '45' },
      { id: 'C', text: '60' },
      { id: 'D', text: '120' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk mencari KPK dari faktorisasi prima, kalikan semua faktor prima yang ada dengan pangkat terbesar.\nFaktor-faktor yang ada: 2², 3, dan 5.\nKPK = 2² × 3 × 5 = 4 × 3 × 5 = 60.',
  },

  // --- SOAL 15 ---
  {
    id: 15,
    type: 'pg',
    topic: 'KPK Tiga Bilangan',
    difficulty: 'Sukar',
    text: 'Perhatikan tabel sengkedan pembagian prima untuk tiga bilangan (6, 8, dan 12) di atas!\nNilai KPK dari 6, 8, dan 12 adalah...',
    image: `<svg viewBox="0 0 400 140" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="140" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(45, 20)">
        <rect x="0" y="0" width="70" height="22" fill="#0284C7"/>
        <text x="35" y="15" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">Bagi</text>
        <rect x="70" y="0" width="80" height="22" fill="#0369A1"/>
        <text x="110" y="15" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">6</text>
        <rect x="150" y="0" width="80" height="22" fill="#0369A1"/>
        <text x="190" y="15" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">8</text>
        <rect x="230" y="0" width="80" height="22" fill="#0369A1"/>
        <text x="270" y="15" fill="#FFFFFF" font-size="10" font-weight="bold" text-anchor="middle">12</text>
        <!-- Rows -->
        <rect x="0" y="22" width="310" height="18" fill="#F0F9FF" stroke="#E0F2FE"/>
        <text x="35" y="35" fill="#0369A1" font-size="10" font-weight="bold" text-anchor="middle">2</text>
        <text x="110" y="35" font-size="10" text-anchor="middle">3</text>
        <text x="190" y="35" font-size="10" text-anchor="middle">4</text>
        <text x="270" y="35" font-size="10" text-anchor="middle">6</text>
        <rect x="0" y="40" width="310" height="18" fill="#FFFFFF" stroke="#E0F2FE"/>
        <text x="35" y="53" fill="#0369A1" font-size="10" font-weight="bold" text-anchor="middle">2</text>
        <text x="110" y="53" font-size="10" text-anchor="middle">3</text>
        <text x="190" y="53" font-size="10" text-anchor="middle">2</text>
        <text x="270" y="53" font-size="10" text-anchor="middle">3</text>
        <rect x="0" y="58" width="310" height="18" fill="#F0F9FF" stroke="#E0F2FE"/>
        <text x="35" y="71" fill="#0369A1" font-size="10" font-weight="bold" text-anchor="middle">2</text>
        <text x="110" y="71" font-size="10" text-anchor="middle">3</text>
        <text x="190" y="71" font-size="10" text-anchor="middle">1</text>
        <text x="270" y="71" font-size="10" text-anchor="middle">3</text>
        <rect x="0" y="76" width="310" height="18" fill="#FFFFFF" stroke="#E0F2FE"/>
        <text x="35" y="89" fill="#0369A1" font-size="10" font-weight="bold" text-anchor="middle">3</text>
        <text x="110" y="89" font-size="10" text-anchor="middle">1</text>
        <text x="190" y="89" font-size="10" text-anchor="middle">1</text>
        <text x="270" y="89" font-size="10" text-anchor="middle">1</text>
      </g>
      <text x="200" y="128" fill="#0369A1" font-size="11" font-weight="bold" text-anchor="middle">KPK = 2 × 2 × 2 × 3 = 2³ × 3</text>
    </svg>`,
    options: [
      { id: 'A', text: '18' },
      { id: 'B', text: '24' },
      { id: 'C', text: '36' },
      { id: 'D', text: '48' },
    ],
    correctAnswer: 'B',
    explanation:
      'Faktorisasi prima ketiga bilangan:\n6 = 2 × 3\n8 = 2³\n12 = 2² × 3\nKPK = 2³ × 3 = 8 × 3 = 24.',
  },

  // --- SOAL 16 ---
  {
    id: 16,
    type: 'pg',
    topic: 'Penerapan FPB (Soal Cerita)',
    difficulty: 'Sedang',
    text: 'Ibu guru Komang Ayuni memiliki 30 buah jeruk dan 45 buah apel.\nSemua buah tersebut akan dimasukkan ke dalam beberapa kantong plastik dengan jumlah jeruk dan apel yang sama banyak pada setiap kantong.\nBerapa banyak kantong plastik terbanyak yang diperlukan oleh Ibu guru?',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="75" rx="10" fill="#FFF7ED" stroke="#F97316"/>
        <circle cx="45" cy="38" r="20" fill="#EA580C"/>
        <text x="45" y="44" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">🍊</text>
        <text x="110" y="34" fill="#9A3412" font-size="12" font-weight="bold">30 Jeruk</text>
        <text x="110" y="52" fill="#C2410C" font-size="10">2 × 3 × 5</text>
      </g>
      <g transform="translate(210, 20)">
        <rect x="0" y="0" width="160" height="75" rx="10" fill="#FEF2F2" stroke="#EF4444"/>
        <circle cx="45" cy="38" r="20" fill="#DC2626"/>
        <text x="45" y="44" fill="#FFFFFF" font-size="14" font-weight="bold" text-anchor="middle">🍎</text>
        <text x="110" y="34" fill="#991B1B" font-size="12" font-weight="bold">45 Apel</text>
        <text x="110" y="52" fill="#B91C1C" font-size="10">3² × 5</text>
      </g>
      <text x="200" y="115" fill="#475569" font-size="11" text-anchor="middle">Membagi sama banyak ke wadah terbanyak = Konsep FPB</text>
    </svg>`,
    options: [
      { id: 'A', text: '5 kantong' },
      { id: 'B', text: '10 kantong' },
      { id: 'C', text: '15 kantong' },
      { id: 'D', text: '30 kantong' },
    ],
    correctAnswer: 'C',
    explanation:
      'Membagi sejumlah barang menjadi sama banyak ke sebanyak-banyaknya kantong menggunakan konsep FPB.\n30 = 2 × 3 × 5\n45 = 3² × 5\nFPB = 3 × 5 = 15 kantong plastik.',
  },

  // --- SOAL 17 ---
  {
    id: 17,
    type: 'pg',
    topic: 'Penerapan FPB (Soal Cerita)',
    difficulty: 'Sedang',
    text: 'Berdasarkan soal nomor 16 di atas, jika Ibu guru membagi 30 jeruk dan 45 apel ke dalam 15 kantong plastik secara merata,\nmaka masing-masing kantong akan berisi...',
    image: `<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(110, 20)">
        <rect x="0" y="0" width="180" height="60" rx="10" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
        <text x="90" y="24" fill="#B45309" font-size="12" font-weight="bold" text-anchor="middle">Isi 1 Kantong Plastik</text>
        <text x="90" y="46" fill="#92400E" font-size="12" text-anchor="middle">... Jeruk &amp; ... Apel?</text>
      </g>
      <text x="200" y="104" fill="#475569" font-size="11" text-anchor="middle">Jumlah buah dibagi dengan FPB (15 kantong)</text>
    </svg>`,
    options: [
      { id: 'A', text: '2 jeruk dan 3 apel' },
      { id: 'B', text: '3 jeruk dan 2 apel' },
      { id: 'C', text: '2 jeruk dan 5 apel' },
      { id: 'D', text: '3 jeruk dan 5 apel' },
    ],
    correctAnswer: 'A',
    explanation:
      'Jumlah jeruk tiap kantong = 30 ÷ 15 = 2 buah jeruk.\nJumlah apel tiap kantong = 45 ÷ 15 = 3 buah apel.\nJadi tiap kantong berisi 2 jeruk dan 3 apel.',
  },

  // --- SOAL 18 ---
  {
    id: 18,
    type: 'pg',
    topic: 'Penerapan FPB (Potongan Pita)',
    difficulty: 'Sukar',
    text: 'Putu memiliki dua utas pita kain: pita merah sepanjang 56 cm dan pita kuning sepanjang 70 cm.\nIa ingin memotong kedua pita tersebut menjadi potongan-potongan yang sama panjang tanpa ada sisa sedikit pun.\nPanjang potongan pita terpanjang yang dapat dibuat oleh Putu adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 25)">
        <rect x="0" y="0" width="220" height="24" rx="4" fill="#EF4444"/>
        <text x="110" y="16" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">Pita Merah = 56 cm</text>
      </g>
      <g transform="translate(30, 60)">
        <rect x="0" y="0" width="280" height="24" rx="4" fill="#EAB308"/>
        <text x="140" y="16" fill="#713F12" font-size="11" font-weight="bold" text-anchor="middle">Pita Kuning = 70 cm</text>
      </g>
      <text x="200" y="115" fill="#475569" font-size="11" text-anchor="middle">Panjang potongan terpanjang sama rata = FPB dari 56 dan 70</text>
    </svg>`,
    options: [
      { id: 'A', text: '7 cm' },
      { id: 'B', text: '14 cm' },
      { id: 'C', text: '28 cm' },
      { id: 'D', text: '35 cm' },
    ],
    correctAnswer: 'B',
    explanation:
      'Panjang potongan pita terpanjang sama rata ditentukan dengan FPB:\n56 = 2³ × 7\n70 = 2 × 5 × 7\nFaktor prima persekutuan dengan pangkat terkecil: 2 dan 7.\nFPB = 2 × 7 = 14 cm.',
  },

  // --- SOAL 19 ---
  {
    id: 19,
    type: 'pg',
    topic: 'Penerapan KPK (Lampu Hias Berkedip)',
    difficulty: 'Sedang',
    text: 'Di panggung pertunjukan sekolah terdapat dua lampu sorot warna-warni.\nLampu merah menyala setiap 4 detik sekali, dan lampu hijau menyala setiap 6 detik sekali.\nJika kedua lampu menyala bersama-sama pada detik ke-0, pada detik ke berapa kedua lampu tersebut akan menyala bersama-sama lagi untuk yang pertama kalinya?',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <circle cx="20" cy="20" r="14" fill="#EF4444"/>
        <text x="45" y="24" fill="#991B1B" font-size="11" font-weight="bold">Lampu Merah: setiap 4 detik (4, 8, 12, 16, ...)</text>
      </g>
      <g transform="translate(30, 55)">
        <circle cx="20" cy="20" r="14" fill="#22C55E"/>
        <text x="45" y="24" fill="#166534" font-size="11" font-weight="bold">Lampu Hijau: setiap 6 detik (6, 12, 18, 24, ...)</text>
      </g>
      <text x="200" y="112" fill="#DC2626" font-size="11" font-weight="bold" text-anchor="middle">Menyala bersamaan kembali = Konsep KPK</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Detik ke-8' },
      { id: 'B', text: 'Detik ke-10' },
      { id: 'C', text: 'Detik ke-12' },
      { id: 'D', text: 'Detik ke-24' },
    ],
    correctAnswer: 'C',
    explanation:
      'Peristiwa yang berulang secara berkala dan terjadi bersamaan kembali diselesaikan dengan mencari KPK.\nKelipatan 4 = 4, 8, 12, 16, ...\nKelipatan 6 = 6, 12, 18, ...\nKPK dari 4 dan 6 adalah 12.\nJadi kedua lampu menyala bersamaan kembali pada detik ke-12.',
  },

  // --- SOAL 20 ---
  {
    id: 20,
    type: 'pg',
    topic: 'Penerapan KPK (Jadwal Bersama)',
    difficulty: 'Sedang',
    text: 'Edo berlatih renang setiap 3 hari sekali, sedangkan Beni berlatih renang setiap 4 hari sekali di kolam yang sama.\nJika mereka berenang bersama-sama untuk pertama kali pada tanggal 2 Mei 2026,\npada tanggal berapa mereka akan berenang bersama-sama lagi untuk yang kedua kalinya?',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="140" y="12" width="120" height="26" rx="6" fill="#1D4ED8"/>
      <text x="200" y="29" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">KALENDER MEI 2026</text>
      <g transform="translate(50, 48)">
        <rect x="0" y="0" width="85" height="42" rx="6" fill="#DBEAFE" stroke="#3B82F6"/>
        <text x="42" y="18" fill="#1E40AF" font-size="10" font-weight="bold" text-anchor="middle">Pertama Kali</text>
        <text x="42" y="34" fill="#1E3A8A" font-size="12" font-weight="extrabold" text-anchor="middle">2 Mei</text>
        <text x="145" y="26" fill="#64748B" font-size="18" font-weight="bold" text-anchor="middle">+</text>
        <rect x="210" y="0" width="85" height="42" rx="6" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="252" y="18" fill="#B45309" font-size="10" font-weight="bold" text-anchor="middle">KPK (3 &amp; 4)</text>
        <text x="252" y="34" fill="#92400E" font-size="12" font-weight="extrabold" text-anchor="middle">12 Hari</text>
      </g>
      <text x="200" y="115" fill="#1E3A8A" font-size="11" font-weight="bold" text-anchor="middle">Tanggal kedua = 2 Mei + 12 hari = ... Mei?</text>
    </svg>`,
    options: [
      { id: 'A', text: '9 Mei 2026' },
      { id: 'B', text: '12 Mei 2026' },
      { id: 'C', text: '14 Mei 2026' },
      { id: 'D', text: '16 Mei 2026' },
    ],
    correctAnswer: 'C',
    explanation:
      'KPK dari 3 dan 4 adalah 12 hari.\nMereka berenang bersama lagi setelah 12 hari dari tanggal pertama:\nTanggal = 2 Mei + 12 hari = 14 Mei 2026.',
  },

  // --- SOAL 21 ---
  {
    id: 21,
    type: 'pg',
    topic: 'Penerapan KPK (Jadwal Keberangkatan Bus)',
    difficulty: 'Sukar',
    text: 'Tiga armada bus pariwisata berangkat dari terminal Negara Jembrana.\nBus A berangkat setiap 15 menit sekali, bus B setiap 20 menit sekali, dan bus C setiap 30 menit sekali.\nJika ketiga bus tersebut berangkat bersama-sama pada pukul 06.30 pagi,\npada pukul berapa ketiga bus tersebut akan berangkat bersama-sama lagi?',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="100" height="55" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="50" y="20" fill="#1E40AF" font-size="10" font-weight="bold" text-anchor="middle">🚌 Bus A</text>
        <text x="50" y="38" fill="#1E3A8A" font-size="11" font-weight="bold" text-anchor="middle">Tiap 15 mnt</text>
      </g>
      <g transform="translate(150, 20)">
        <rect x="0" y="0" width="100" height="55" rx="6" fill="#F0FDF4" stroke="#22C55E"/>
        <text x="50" y="20" fill="#166534" font-size="10" font-weight="bold" text-anchor="middle">🚌 Bus B</text>
        <text x="50" y="38" fill="#14532D" font-size="11" font-weight="bold" text-anchor="middle">Tiap 20 mnt</text>
      </g>
      <g transform="translate(270, 20)">
        <rect x="0" y="0" width="100" height="55" rx="6" fill="#FFFBEB" stroke="#F59E0B"/>
        <text x="50" y="20" fill="#B45309" font-size="10" font-weight="bold" text-anchor="middle">🚌 Bus C</text>
        <text x="50" y="38" fill="#92400E" font-size="11" font-weight="bold" text-anchor="middle">Tiap 30 mnt</text>
      </g>
      <text x="200" y="105" fill="#334155" font-size="11" font-weight="bold" text-anchor="middle">KPK dari 15, 20, dan 30 = 60 menit (1 jam)</text>
      <text x="200" y="120" fill="#64748B" font-size="10" text-anchor="middle">Pukul 06.30 + 1 jam = ... ?</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Pukul 07.00' },
      { id: 'B', text: 'Pukul 07.15' },
      { id: 'C', text: 'Pukul 07.30' },
      { id: 'D', text: 'Pukul 08.00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Cari KPK dari 15, 20, dan 30:\n15 = 3 × 5\n20 = 2² × 5\n30 = 2 × 3 × 5\nKPK = 2² × 3 × 5 = 60 menit (1 jam).\nBerangkat bersama lagi pada: 06.30 + 1 jam = pukul 07.30.',
  },

  // --- SOAL 22 ---
  {
    id: 22,
    type: 'pg',
    topic: 'FPB & KPK Simultan',
    difficulty: 'Sedang',
    text: 'Perhatikan diagram faktorisasi prima dari bilangan 12 dan 18 di atas!\n12 = 2² × 3\n18 = 2 × 3²\nNilai FPB dan KPK dari bilangan 12 dan 18 berturut-turut adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="140" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="70" y="24" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">FPB (Pangkat Kecil)</text>
        <text x="70" y="48" fill="#1E3A8A" font-size="12" font-weight="bold" text-anchor="middle">2 × 3 = 6</text>
      </g>
      <g transform="translate(220, 20)">
        <rect x="0" y="0" width="140" height="65" rx="8" fill="#FDF4FF" stroke="#C084FC"/>
        <text x="70" y="24" fill="#7E22CE" font-size="11" font-weight="bold" text-anchor="middle">KPK (Pangkat Besar)</text>
        <text x="70" y="48" fill="#6B21A8" font-size="12" font-weight="bold" text-anchor="middle">2² × 3² = 36</text>
      </g>
      <text x="200" y="112" fill="#475569" font-size="11" text-anchor="middle">FPB = 6  dan  KPK = 36</text>
    </svg>`,
    options: [
      { id: 'A', text: '6 dan 24' },
      { id: 'B', text: '6 dan 36' },
      { id: 'C', text: '12 dan 36' },
      { id: 'D', text: '3 dan 36' },
    ],
    correctAnswer: 'B',
    explanation:
      '12 = 2² × 3\n18 = 2 × 3²\nFPB (faktor sama pangkat terkecil) = 2 × 3 = 6.\nKPK (semua faktor pangkat terbesar) = 2² × 3² = 4 × 9 = 36.\nJadi FPB dan KPK berturut-turut adalah 6 dan 36.',
  },

  // --- SOAL 23 ---
  {
    id: 23,
    type: 'pg',
    topic: 'FPB Faktorisasi Prima Berpangkat',
    difficulty: 'Sedang',
    text: 'Dua buah bilangan A dan B memiliki bentuk faktorisasi prima sebagai berikut:\nA = 2³ × 3²\nB = 2² × 3³ × 5\nFaktor Persekutuan Terbesar (FPB) dari kedua bilangan tersebut adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="80" y="24" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">Bilangan A</text>
        <text x="80" y="48" fill="#1E3A8A" font-size="13" font-weight="bold" text-anchor="middle">2³ × 3²</text>
      </g>
      <g transform="translate(210, 20)">
        <rect x="0" y="0" width="160" height="65" rx="8" fill="#F0FDF4" stroke="#22C55E"/>
        <text x="80" y="24" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">Bilangan B</text>
        <text x="80" y="48" fill="#14532D" font-size="13" font-weight="bold" text-anchor="middle">2² × 3³ × 5</text>
      </g>
      <text x="200" y="112" fill="#475569" font-size="11" text-anchor="middle">Pilih faktor prima yang sama dengan pangkat terkecil: 2² dan 3²</text>
    </svg>`,
    options: [
      { id: 'A', text: '2² × 3²' },
      { id: 'B', text: '2³ × 3³' },
      { id: 'C', text: '2² × 3² × 5' },
      { id: 'D', text: '2³ × 3³ × 5' },
    ],
    correctAnswer: 'A',
    explanation:
      'Untuk menentukan FPB:\n1. Pilih faktor prima yang ada pada kedua bilangan (hanya angka 2 dan 3, angka 5 tidak ikut karena hanya ada di B).\n2. Ambil pangkat terkecil: 2² dan 3².\nFPB = 2² × 3².',
  },

  // --- SOAL 24 ---
  {
    id: 24,
    type: 'pg',
    topic: 'KPK Faktorisasi Prima Berpangkat',
    difficulty: 'Sedang',
    text: 'Dua buah bilangan P dan Q memiliki bentuk faktorisasi prima sebagai berikut:\nP = 2² × 3 × 5\nQ = 2 × 3² × 7\nKelipatan Persekutuan Terkecil (KPK) dari bilangan P dan Q adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <rect x="0" y="0" width="160" height="65" rx="8" fill="#FEF3C7" stroke="#F59E0B"/>
        <text x="80" y="24" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">Bilangan P</text>
        <text x="80" y="48" fill="#92400E" font-size="12" font-weight="bold" text-anchor="middle">2² × 3 × 5</text>
      </g>
      <g transform="translate(210, 20)">
        <rect x="0" y="0" width="160" height="65" rx="8" fill="#F3E8FF" stroke="#A855F7"/>
        <text x="80" y="24" fill="#6B21A8" font-size="11" font-weight="bold" text-anchor="middle">Bilangan Q</text>
        <text x="80" y="48" fill="#581C87" font-size="12" font-weight="bold" text-anchor="middle">2 × 3² × 7</text>
      </g>
      <text x="200" y="112" fill="#475569" font-size="11" text-anchor="middle">KPK = Kalikan SEMUA faktor prima dengan pangkat terbesar</text>
    </svg>`,
    options: [
      { id: 'A', text: '2 × 3' },
      { id: 'B', text: '2² × 3²' },
      { id: 'C', text: '2² × 3² × 5 × 7' },
      { id: 'D', text: '2³ × 3³ × 5 × 7' },
    ],
    correctAnswer: 'C',
    explanation:
      'Untuk menentukan KPK:\n1. Tuliskan seluruh faktor prima yang muncul pada P maupun Q: 2, 3, 5, dan 7.\n2. Ambil pangkat tertinggi untuk setiap faktor: 2², 3², 5¹, dan 7¹.\nKPK = 2² × 3² × 5 × 7.',
  },

  // --- SOAL 25 ---
  {
    id: 25,
    type: 'pg',
    topic: 'Penerapan FPB (HOTS Ubin Lantai)',
    difficulty: 'Sukar',
    text: 'Lantai ruang kelas 5 SD Negeri 3 Loloan Timur yang berukuran panjang 120 cm dan lebar 80 cm akan dipasangi ubin keramik berbentuk persegi.\nJika seluruh lantai harus tertutup pas tanpa ada ubin keramik yang dipotong,\nmaka ukuran sisi ubin keramik terbesar yang dapat digunakan adalah...',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(60, 20)">
        <!-- Floor grid -->
        <rect x="0" y="0" width="180" height="80" fill="#E2E8F0" stroke="#475569" stroke-width="2"/>
        <!-- Tiles grid 40x40 -->
        <rect x="0" y="0" width="60" height="40" fill="#BFDBFE" stroke="#2563EB"/>
        <rect x="60" y="0" width="60" height="40" fill="#BFDBFE" stroke="#2563EB"/>
        <rect x="120" y="0" width="60" height="40" fill="#BFDBFE" stroke="#2563EB"/>
        <rect x="0" y="40" width="60" height="40" fill="#BFDBFE" stroke="#2563EB"/>
        <rect x="60" y="40" width="60" height="40" fill="#BFDBFE" stroke="#2563EB"/>
        <rect x="120" y="40" width="60" height="40" fill="#BFDBFE" stroke="#2563EB"/>
        <text x="90" y="-6" fill="#1E293B" font-size="10" font-weight="bold" text-anchor="middle">Panjang 120 cm</text>
        <text x="-8" y="45" fill="#1E293B" font-size="10" font-weight="bold" text-anchor="end">80 cm</text>
      </g>
      <g transform="translate(265, 35)">
        <rect x="0" y="0" width="70" height="50" rx="6" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="35" y="20" fill="#1E40AF" font-size="9" font-weight="bold" text-anchor="middle">Ubin Persegi</text>
        <text x="35" y="38" fill="#1E3A8A" font-size="11" font-weight="extrabold" text-anchor="middle">FPB = s ?</text>
      </g>
      <text x="200" y="118" fill="#475569" font-size="10" text-anchor="middle">Ukuran terbesar persegi menutup sempurna = FPB(120, 80)</text>
    </svg>`,
    options: [
      { id: 'A', text: '20 cm' },
      { id: 'B', text: '30 cm' },
      { id: 'C', text: '40 cm' },
      { id: 'D', text: '60 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ukuran sisi ubin persegi terbesar yang menutup sempurna panjang dan lebar lantai ditentukan oleh FPB dari 120 dan 80.\n120 = 2³ × 3 × 5\n80 = 2⁴ × 5\nFPB = 2³ × 5 = 8 × 5 = 40 cm.\nJadi ukuran sisi keramik terbesar adalah 40 cm.',
  },

  // ==========================================
  // BAGIAN II: BENAR / SALAH (5 SOAL)
  // ==========================================

  // --- SOAL 26 ---
  {
    id: 26,
    type: 'benar_salah',
    topic: 'Konsep Bilangan Prima',
    difficulty: 'Mudah',
    text: 'Perhatikan pernyataan matematika di bawah ini:\n\n"Angka 2 adalah satu-satunya bilangan genap yang merupakan bilangan prima."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(150, 15)">
        <circle cx="50" cy="45" r="35" fill="#10B981" stroke="#059669" stroke-width="3"/>
        <text x="50" y="56" fill="#FFFFFF" font-size="34" font-weight="extrabold" text-anchor="middle">2</text>
      </g>
      <text x="200" y="112" fill="#065F46" font-size="11" font-weight="bold" text-anchor="middle">👑 Bilangan Prima Genap Satu-Satunya di Dunia</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nAngka 2 hanya memiliki 2 faktor, yaitu 1 dan 2, sehingga merupakan bilangan prima.\nSemua bilangan genap lainnya (4, 6, 8, 10, ...) selalu dapat dibagi dengan 2 (memiliki lebih dari 2 faktor), sehingga bukan bilangan prima.',
  },

  // --- SOAL 27 ---
  {
    id: 27,
    type: 'benar_salah',
    topic: 'Faktor Persekutuan Terbesar',
    difficulty: 'Mudah',
    text: 'Perhatikan pohon faktor bilangan 14 dan 21 di atas!\n14 = 2 × 7\n21 = 3 × 7\n\nPernyataan:\n"Faktor Persekutuan Terbesar (FPB) dari bilangan 14 dan 21 adalah 7."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="140" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="70" y="24" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">Faktorisasi 14</text>
        <text x="70" y="48" fill="#1E3A8A" font-size="13" font-weight="bold" text-anchor="middle">2 × <tspan fill="#DC2626">7</tspan></text>
      </g>
      <g transform="translate(220, 20)">
        <rect x="0" y="0" width="140" height="65" rx="8" fill="#F0FDF4" stroke="#22C55E"/>
        <text x="70" y="24" fill="#166534" font-size="11" font-weight="bold" text-anchor="middle">Faktorisasi 21</text>
        <text x="70" y="48" fill="#14532D" font-size="13" font-weight="bold" text-anchor="middle">3 × <tspan fill="#DC2626">7</tspan></text>
      </g>
      <text x="200" y="112" fill="#475569" font-size="11" text-anchor="middle">Faktor persekutuan prima yang sama: angka 7</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nFaktor prima dari 14 adalah 2 dan 7.\nFaktor prima dari 21 adalah 3 dan 7.\nFaktor persekutuan yang sama hanyalah angka 7, sehingga FPB dari 14 dan 21 memang benar adalah 7.',
  },

  // --- SOAL 28 ---
  {
    id: 28,
    type: 'benar_salah',
    topic: 'Kelipatan Persekutuan Terkecil',
    difficulty: 'Sedang',
    text: 'Perhatikan kelipatan bilangan 6 dan 8 pada gambar di atas!\n\nPernyataan:\n"Kelipatan Persekutuan Terkecil (KPK) dari bilangan 6 dan 8 adalah 48."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(30, 20)">
        <text x="10" y="24" fill="#1D4ED8" font-size="11" font-weight="bold">Kelipatan 6:</text>
        <text x="95" y="24" fill="#334155" font-size="11">6, 12, 18, <tspan fill="#10B981" font-weight="extrabold">24</tspan>, 30, 36, 42, <tspan fill="#EF4444" font-weight="bold">48</tspan>...</text>
      </g>
      <g transform="translate(30, 55)">
        <text x="10" y="24" fill="#15803D" font-size="11" font-weight="bold">Kelipatan 8:</text>
        <text x="95" y="24" fill="#334155" font-size="11">8, 16, <tspan fill="#10B981" font-weight="extrabold">24</tspan>, 32, 40, <tspan fill="#EF4444" font-weight="bold">48</tspan>...</text>
      </g>
      <text x="200" y="112" fill="#B45309" font-size="11" font-weight="bold" text-anchor="middle">Perhatikan titik temu pertama (angka terkecil): 24 vs 48</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\n48 memang merupakan kelipatan persekutuan dari 6 dan 8, tetapi BUKAN yang TERKECIL.\nKelipatan persekutuan terkecil (KPK) dari 6 dan 8 adalah 24, bukan 48.\n(6 = 2 × 3; 8 = 2³; KPK = 2³ × 3 = 24).',
  },

  // --- SOAL 29 ---
  {
    id: 29,
    type: 'benar_salah',
    topic: 'Penerapan KPK (Jadwal Les)',
    difficulty: 'Sedang',
    text: 'Ani mengikuti les menari Bali setiap 4 hari sekali, sedangkan Siti mengikuti les menari setiap 6 hari sekali di sanggar yang sama.\n\nPernyataan:\n"Ani dan Siti akan bertemu untuk les menari bersama-sama di sanggar setiap 12 hari sekali."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <g transform="translate(40, 20)">
        <rect x="0" y="0" width="140" height="65" rx="8" fill="#EFF6FF" stroke="#3B82F6"/>
        <text x="70" y="24" fill="#1E40AF" font-size="11" font-weight="bold" text-anchor="middle">💃 Ani</text>
        <text x="70" y="48" fill="#1E3A8A" font-size="12" font-weight="bold" text-anchor="middle">Setiap 4 Hari</text>
      </g>
      <g transform="translate(220, 20)">
        <rect x="0" y="0" width="140" height="65" rx="8" fill="#FDF4FF" stroke="#C084FC"/>
        <text x="70" y="24" fill="#7E22CE" font-size="11" font-weight="bold" text-anchor="middle">💃 Siti</text>
        <text x="70" y="48" fill="#6B21A8" font-size="12" font-weight="bold" text-anchor="middle">Setiap 6 Hari</text>
      </g>
      <text x="200" y="112" fill="#15803D" font-size="11" font-weight="bold" text-anchor="middle">KPK dari 4 dan 6 adalah 12 hari sekali</text>
    </svg>`,
    correctAnswer: 'Benar',
    explanation:
      'Pernyataan tersebut BENAR.\nJadwal pertemuan bersama dihitung menggunakan KPK dari frekuensi hari masing-masing anak.\nKPK dari 4 dan 6 adalah 12.\nJadi mereka berdua memang akan selalu bertemu setiap 12 hari sekali.',
  },

  // --- SOAL 30 ---
  {
    id: 30,
    type: 'benar_salah',
    topic: 'Konsep Faktorisasi Prima',
    difficulty: 'Sedang',
    text: 'Perhatikan diagram pohon faktor bilangan 40 pada gambar di atas!\n\nPernyataan:\n"Bentuk faktorisasi prima dari bilangan 40 adalah 2² × 10."\n\nTentukan apakah pernyataan tersebut BENAR atau SALAH!',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full max-w-md mx-auto">
      <rect width="400" height="130" rx="12" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
      <circle cx="200" cy="25" r="16" fill="#1E293B"/>
      <text x="200" y="30" fill="#FFFFFF" font-size="12" font-weight="bold" text-anchor="middle">40</text>
      <line x1="190" y1="38" x2="150" y2="60" stroke="#64748B" stroke-width="2"/>
      <line x1="210" y1="38" x2="250" y2="60" stroke="#64748B" stroke-width="2"/>
      <circle cx="150" cy="65" r="13" fill="#2563EB"/>
      <text x="150" y="70" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">4</text>
      <circle cx="250" cy="65" r="13" fill="#EF4444"/>
      <text x="250" y="70" fill="#FFFFFF" font-size="11" font-weight="bold" text-anchor="middle">10</text>
      <text x="200" y="112" fill="#DC2626" font-size="11" font-weight="bold" text-anchor="middle">Ingat: Angka 10 dan 4 bukanlah bilangan prima!</text>
    </svg>`,
    correctAnswer: 'Salah',
    explanation:
      'Pernyataan tersebut SALAH.\nFaktorisasi prima HANYA boleh memuat bilangan-bilangan prima (2, 3, 5, 7, ...).\nAngka 10 bukan bilangan prima karena masih dapat dibagi 2 dan 5 (10 = 2 × 5).\nBentuk faktorisasi prima yang benar dari 40 adalah 2³ × 5 (karena 40 = 2 × 2 × 2 × 5).',
  },
];
