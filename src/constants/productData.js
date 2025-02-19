// src/constants/productData.js

export const productData = {
  // Основная информация
  name: "R36S Game Console",
  price: 2999.0,
  originalPrice: 3999.0,
  currency: "UAH",
  discount: 25,

  // Платформы и характеристики
  platforms: ["PSP", "PSX", "N64", "NDS", "SNES", "GBA", "SEGA", "MAME", "FBA"],

  // Основные особенности
  features: [
    "5.5-дюймовий IPS екран",
    "Роздільна здатність 1280x720",
    "Акумулятор 4000 mAh",
    "WiFi та Bluetooth підтримка",
    "Мультиплеєр",
    "Підтримка до 40 000 ігор",
    "64GB вбудованої пам'яті",
    "Підтримка microSD до 512GB",
  ],

  // Технические характеристики
  technicalSpecs: {
    display: {
      size: "5.5 inches",
      type: "IPS",
      resolution: "1280x720",
      aspectRatio: "16:9",
    },
    processor: {
      cpu: "Quad-core ARM Cortex-A55",
      gpu: "Mali G52 2EE",
      ram: "4GB LPDDR4",
    },
    storage: {
      internal: "64GB",
      expandable: "microSD до 512GB",
    },
    battery: {
      capacity: "4000 mAh",
      playTime: "6 годин",
      standbyTime: "72 години",
      chargingTime: "2 години",
    },
    connectivity: {
      wifi: "WiFi 802.11 b/g/n",
      bluetooth: "Bluetooth 4.0",
      ports: ["USB Type-C", "3.5mm аудіо", "microSD слот"],
    },
  },

  // Медиафайлы
  media: {
    images: {
      main: "/images/r36s-front.webp",
      additional: [
        "/images/r36s-back.webp",
        "/images/r36s-side.webp",
        "/images/r36s-gameplay.webp",
      ],
      thumbnails: {
        main: "/images/thumbnails/r36s-front.webp",
        additional: [
          "/images/thumbnails/r36s-back.webp",
          "/images/thumbnails/r36s-side.webp",
          "/images/thumbnails/r36s-gameplay.webp",
        ],
      },
    },
    videos: {
      preview: "/videos/r36s-preview.mp4",
      gameplay: "/videos/r36s-gameplay.mp4",
    },
  },

  // Гарантия и доставка
  warranty: {
    duration: "12",
    unit: "MON",
    description: "12 місяців офіційної гарантії",
    terms: [
      "Безкоштовна заміна протягом 14 днів",
      "Гарантійний ремонт",
      "Технічна підтримка",
    ],
  },

  shipping: {
    methods: [
      {
        name: "Нова Пошта",
        price: 60,
        currency: "UAH",
        duration: "1-2 дні",
      },
      {
        name: "УкрПошта",
        price: 40,
        currency: "UAH",
        duration: "2-4 дні",
      },
    ],
    freeShippingThreshold: 3000,
  },

  // SEO и метаданные
  seo: {
    title: "R36S Game Console | Потужна Ретро Консоль",
    description:
      "R36S - сучасна портативна ігрова консоль з підтримкою PSP, PSX, N64, NDS та інших ретро платформ. 5.5-дюймовий IPS екран, потужний процесор та тривала автономна робота.",
    keywords: [
      "R36S",
      "game console",
      "retro console",
      "portable console",
      "ретро консоль",
      "ігрова консоль",
      "портативна консоль",
    ],
    ogImage: "/images/og/r36s-preview.jpg",
  },

  // Рейтинги и отзывы
  ratings: {
    average: 4.8,
    total: 149,
    distribution: {
      5: 98,
      4: 39,
      3: 8,
      2: 3,
      1: 1,
    },
  },

  // Статус продукта
  status: {
    availability: "InStock",
    quantity: 50,
    lowStockThreshold: 10,
  },
};

// Дополнительные константы, связанные с продуктом
export const SUPPORTED_EMULATORS = [
  {
    name: "PSP",
    gamesCount: 15000,
    description: "PlayStation Portable ігри",
  },
  {
    name: "PSX",
    gamesCount: 8000,
    description: "PlayStation 1 ігри",
  },
  {
    name: "N64",
    gamesCount: 2000,
    description: "Nintendo 64 ігри",
  },
  // ... другие эмуляторы
];

export const PRODUCT_CATEGORIES = [
  {
    id: "retro-consoles",
    name: "Ретро консолі",
    description: "Портативні ігрові консолі для ретро ігор",
  },
  {
    id: "accessories",
    name: "Аксесуари",
    description: "Чохли, захисні плівки та інші аксесуари",
  },
];

// Экспорт дополнительных утилит, если нужно
export const formatPrice = (price, currency = "UAH") => {
  return `${price.toFixed(2)} ${currency}`;
};

export const calculateDiscount = (originalPrice, currentPrice) => {
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
};
