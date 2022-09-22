const womanProducts = [
   {
      id: 1,
      name: "Blusa Verde Simples",
      img: {
         front: "./assets/produtos/femininos/Produto01_frente.webp",
         back: "./assets/produtos/femininos/Produto01_verso.webp"
      },
      type: 'Blusa',
      keywords: ['Blusa', 'Verde', 'Simples', 'Desconto', 'Promoção', 'Feminino'],
      // sizes: [
      //    { available: true, size: 'PP' },
      //    { available: true, size: 'P' },
      //    { available: true, size: 'M' },
      //    { available: true, size: 'G' },
      //    { available: true, size: 'GG' }
      // ],
      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 59.90,
      actual_price: 53.90,
      porcent_discount: 10
   },
   {
      id: 2,
      name: "Camiseta Gola Redonda",
      img: {
         front: "./assets/produtos/femininos/Produto02_frente.webp",
         back: "./assets/produtos/femininos/Produto02_verso.webp"
      },
      type: 'Camiseta',
      keywords: ['Camiseta', 'Gola Redonda', 'Verde', 'Feminino'],
      sizes: [
         { available: true, size: 'PP' },
         { available: true, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: true, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },
      regular_price: 77.90,
      actual_price: 77.90,
      porcent_discount: 0
   },
   {
      id: 3,
      name: "Terno e blazer - Frontal aberto - Com Gola Xale",
      img: {
         front: "./assets/produtos/femininos/Produto03_frente.webp",
         back: "./assets/produtos/femininos/Produto03_verso.webp"
      },
      type: 'Conjunto',
      keywords: ['Terno', 'Blazer', 'Azul Marinho', 'Conjunto', 'Feminino'],
      sizes: [
         { available: true, size: 'PP' },
         { available: true, size: 'P' },
         { available: false, size: 'M' },
         { available: false, size: 'G' },
         { available: true, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },
      regular_price: 186.90,
      actual_price: 186.90,
      porcent_discount: 0
   },
   {
      id: 4,
      name: "Camiseta Ocasional Plantas",
      img: {
         front: "./assets/produtos/femininos/Produto04_frente.webp",
         back: "./assets/produtos/femininos/Produto04_verso.webp"
      },
      type: 'Camiseta',
      keywords: ['Camiseta', 'Plantas', 'Verde', 'Feminino'],
      sizes: [
         { available: true, size: 'PP' },
         { available: true, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: false, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },
      regular_price: 39.90,
      actual_price: 39.90,
      porcent_discount: 0
   },

   {
      id: 8,
      name: "Moletom Halloween - EXCUSE ME BUT BOO",
      img: {
         front: "./assets/produtos/femininos/Produto08_frente.webp",
         back: "./assets/produtos/femininos/Produto08_verso.webp"
      },
      type: 'Moletom',
      keywords: ['Moletom', 'Azul', 'Halloween', 'Desconto', 'Promoção', 'Feminino'],
      sizes: [
         { available: false, size: 'PP' },
         { available: true, size: 'P' },
         { available: true, size: 'M' },
         { available: false, size: 'G' },
         { available: false, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 59.95,
      actual_price: 59.95,
      porcent_discount: 35
   },
   {
      id: 9,
      name: "Blusa Branca",
      img: {
         front: "./assets/produtos/femininos/Produto09_frente.webp",
         back: "./assets/produtos/femininos/Produto09_verso.webp"
      },
      type: 'Blusa',
      keywords: ['Blusa', 'Branco', 'Branca', 'Feminino'],
      sizes: [
         { available: false, size: 'PP' },
         { available: true, size: 'P' },
         { available: true, size: 'M' },
         { available: false, size: 'G' },
         { available: false, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 49.90,
      actual_price: 49.90,
      porcent_discount: 0
   },
   {
      id: 10,
      name: "Vestido regata com estampados florais",
      img: {
         front: "./assets/produtos/femininos/Produto10_frente.webp",
         back: "./assets/produtos/femininos/Produto10_verso.webp"
      },
      type: 'Vestido',
      keywords: ['Vestido', 'Branca', 'Branco', 'Florais', 'Regata', 'Feminino'],
      sizes: [
         { available: true, size: 'PP' },
         { available: true, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: false, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 75.90,
      actual_price: 75.90,
      porcent_discount: 0
   },

   {
      id: 12,
      name: "Blusa - Escritas Japonesas",
      img: {
         front: "./assets/produtos/femininos/Produto12_frente.webp",
         back: "./assets/produtos/femininos/Produto12_verso.webp"
      },
      type: 'Blusa',
      keywords: ['Blusa', 'Preta', 'Preto', 'Escrita', 'Japão', 'Escritas Japonesas', 'Feminino'],
      sizes: [
         { available: true, size: 'PP' },
         { available: true, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: true, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 56.95,
      actual_price: 56.95,
      porcent_discount: 0
   },
   {
      id: 13,
      name: "Moletom - Escritas Japonesas",
      img: {
         front: "./assets/produtos/femininos/Produto13_frente.webp",
         back: "./assets/produtos/femininos/Produto13_verso.webp"
      },
      type: 'Moletom',
      keywords: ['Moletom', 'Preta', 'Preto', 'Escrita', 'Japão', 'Escritas Japonesas', 'Desconto', 'Promoção', 'Feminino'],
      sizes: [
         { available: true, size: 'PP' },
         { available: true, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: true, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 89.90,
      actual_price: 58.44,
      porcent_discount: 35
   },


   {
      id: 18,
      name: "Short Jeans - Marinha Bolso Simples ocasional",
      img: {
         front: "./assets/produtos/femininos/Produto18_frente.webp",
         back: "./assets/produtos/femininos/Produto18_verso.webp"
      },
      type: 'Short',
      keywords: ['Short Jeans', 'Jens', 'Azul', 'Short Jeans', 'Bolso', 'Short', 'Feminino', 'Desconto', 'Promoção',],
      sizes: [
         { available: true, size: 'PP' },
         { available: false, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: true, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 100.90,
      actual_price: 80.72,
      porcent_discount: 20
   },
   {
      id: 19,
      name: "Moletom de bolso com cordão - Colorido",
      img: {
         front: "./assets/produtos/femininos/Produto19_frente.webp",
         back: "./assets/produtos/femininos/Produto19_verso.webp"
      },
      type: 'Moletom',
      keywords: ['Moletom', 'Colorido', 'Capuz', 'Bolso', 'Desconto', 'Promoção', 'Feminino'],
      sizes: [
         { available: false, size: 'PP' },
         { available: false, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: true, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 72.90,
      actual_price: 69.26,
      porcent_discount: 5
   },

   {
      id: 21,
      name: "Short - Paper Bag Pants Simples",
      img: {
         front: "./assets/produtos/femininos/Produto21_frente.webp",
         back: "./assets/produtos/femininos/Produto21_verso.webp"
      },
      type: 'Short',
      keywords: ['Short', 'Branco', 'Bolso', 'Botão', 'Feminino'],
      sizes: [
         { available: true, size: 'PP' },
         { available: true, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: false, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 87.99,
      actual_price: 87.99,
      porcent_discount: 0
   },

   {
      id: 24,
      name: "Camiseta Carta Gráfica - California",
      img: {
         front: "./assets/produtos/femininos/Produto24_frente.webp",
         back: "./assets/produtos/femininos/Produto24_verso.webp"
      },
      type: 'Camiseta',
      keywords: ['Camiseta', 'Branco', 'Branca', 'Manga Curta', 'Feminino', 'Desconto', 'Promoção',],
      sizes: [
         { available: true, size: 'PP' },
         { available: false, size: 'P' },
         { available: true, size: 'M' },
         { available: true, size: 'G' },
         { available: true, size: 'GG' }
      ],

      size: {
         size_pp: "PP",
         size_p: "P",
         size_m: "M",
         size_g: "G",
         size_gg: "GG",
      },

      regular_price: 44.99,
      actual_price: 40.49,
      porcent_discount: 10
   },
   // {
   //    id: 25,
   //    name: "Sapato Marron - Nike",
   //    img: {
   //       front: "./assets/produtos/sapatos/sapato1_frente.jpg",
   //       back: "./assets/produtos/sapatos/sapato1_verso.jpg"
   //    },
   //    type: 'Sapato',
   //    keywords: ['Sapato', 'Branco', 'Branca', 'Manga Curta', 'Feminino', 'Desconto', 'Promoção',],
   //    sizes: [
   //       { available: true, size: '31' },
   //       { available: false, size: '36' },
   //       { available: true, size: '42' },
   //       { available: true, size: '46' },
   //       { available: true, size: '50' }
   //    ],

   //    size: {
   //       size_pp: "33-34",
   //       size_p: "36",
   //       size_m: "39",
   //       size_g: "42",
   //       size_gg: "44",
   //    },

   //    regular_price: 60.99,
   //    actual_price: 50.49,
   //    porcent_discount: 10
   // },

   // {
   //    id: 26,
   //    name: "Sapato Branco - Nike",
   //    img: {
   //       front: "./assets/produtos/sapatos/sapato2_frente.jpg",
   //       back: "./assets/produtos/sapatos/sapato2_verso.jpg"
   //    },
   //    type: 'Sapato',
   //    keywords: ['Sapato', 'Branco', 'Branca', 'Manga Curta', 'Feminino', 'Desconto', 'Promoção',],
   //    sizes: [
   //       { available: true, size: '31' },
   //       { available: false, size: '36' },
   //       { available: true, size: '42' },
   //       { available: true, size: '46' },
   //       { available: true, size: '50' }
   //    ],

   //    size: {
   //       size_pp: "33-34",
   //       size_p: "36",
   //       size_m: "39",
   //       size_g: "42",
   //       size_gg: "44",
   //    },

   //    regular_price: 72.99,
   //    actual_price: 63.49,
   //    porcent_discount: 10
   // },

   // {
   //    id: 27,
   //    name: "Sapato beje cano alto - Nike",
   //    img: {
   //       front: "./assets/produtos/sapatos/sapato3_frente.jpg",
   //       back: "./assets/produtos/sapatos/sapato3_verso.jpg"
   //    },

   //    size: {
   //       size_pp: "33-34",
   //       size_p: "36",
   //       size_m: "39",
   //       size_g: "42",
   //       size_gg: "44",
   //    },

   //    type: 'Sapato',
   //    keywords: ['Sapato', 'Branco', 'Branca', 'Manga Curta', 'Feminino', 'Desconto', 'Promoção',],
   //    sizes: [
   //       { available: true, size: '31' },
   //       { available: false, size: '36' },
   //       { available: true, size: '42' },
   //       { available: true, size: '46' },
   //       { available: true, size: '50' }
   //    ],
   //    regular_price: 120.99,
   //    actual_price: 89.49,
   //    porcent_discount: 10
   // }
]
