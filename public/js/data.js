const products = [
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
      id: 5,
      name: "Camisa Listrada Formal",
      img: {
         front: "./assets/produtos/masculinos/Produto05_frente.webp",
         back: "./assets/produtos/masculinos/Produto05_verso.webp"
      },
      type: 'camisa',
      keywords: ['Camisa', 'Listrada', 'Branca', 'Masculino'],
      sizes: [
         { available: false, size: 'PP' },
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
      regular_price: 76.90,
      actual_price: 76.90,
      porcent_discount: 0
   },
   {
      id: 6,
      name: "Moletom de bolso com cordão - Verde",
      img: {
         front: "./assets/produtos/masculinos/Produto06_frente.webp",
         back: "./assets/produtos/masculinos/Produto06_verso.webp"
      },
      type: 'Moletom',
      keywords: ['Moletom', 'Verde', 'Capuz', 'Bolso', 'Desconto', 'Promoção', 'Masculino'],
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

      regular_price: 105.90,
      actual_price: 90.02,
      porcent_discount: 15
   },
   {
      id: 7,
      name: "Moletom Impressão gráfica Bloco de cores Cordão",
      img: {
         front: "./assets/produtos/masculinos/Produto07_frente.webp",
         back: "./assets/produtos/masculinos/Produto07_verso.webp"
      },
      type: 'Moletom',
      keywords: ['Moletom', 'Preta', 'Preto', 'Emoji', 'Capuz', 'Desconto', 'Promoção', 'Masculino'],
      sizes: [
         { available: false, size: 'PP' },
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

      regular_price: 119.90,
      actual_price: 83.93,
      porcent_discount: 30
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
      id: 11,
      name: "Camisa botões na frente - Espaço",
      img: {
         front: "./assets/produtos/masculinos/Produto11_frente.webp",
         back: "./assets/produtos/masculinos/Produto11_verso.webp"
      },
      type: 'Camisa',
      keywords: ['Camisa', 'Botões', 'Espaço', 'Manga Curta', 'Masculino'],
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

      regular_price: 85.90,
      actual_price: 85.90,
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
      id: 14,
      name: "Vestido Floral Estampado",
      img: {
         front: "./assets/produtos/masculinos/Produto14_frente.webp",
         back: "./assets/produtos/masculinos/Produto14_verso.webp"
      },
      type: 'Vestido',
      keywords: ['Vestido', 'Floral', 'Preta', 'Preto', 'Regata', 'Feminino'],
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

      regular_price: 63.99,
      actual_price: 63.99,
      porcent_discount: 0
   },
   {
      id: 15,
      name: "Camisa com bolso",
      img: {
         front: "./assets/produtos/femininos/Produto15_frente.webp",
         back: "./assets/produtos/femininos/Produto15_verso.webp"
      },
      type: 'Camisa',
      keywords: ['Camisa', 'Preta', 'Preto', 'Bolso', 'Manga Longa', 'Botão', 'Masculino', 'Desconto', 'Promoção'],
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

      regular_price: 105.99,
      actual_price: 84.79,
      porcent_discount: 20
   },
   {
      id: 16,
      name: "Moletom de bolso com cordão - Marrom",
      img: {
         front: "./assets/produtos/masculinos/Produto16_frente.webp",
         back: "./assets/produtos/masculinos/Produto16_verso.webp"
      },
      type: 'Moletom',
      keywords: ['Moletom', 'Marrom', 'Capuz', 'Bolso', 'Desconto', 'Promoção', 'Masculino'],
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

      regular_price: 77.90,
      actual_price: 70.11,
      porcent_discount: 10
   },
   {
      id: 17,
      name: "Moletom Figura Gráfica Fechar Revestido térmico",
      img: {
         front: "./assets/produtos/masculinos/Produto17_frente.webp",
         back: "./assets/produtos/masculinos/Produto17_verso.webp"
      },
      type: 'Moletom',
      keywords: ['Moletom', 'Preta', 'Preto', 'Cordão', 'Bolso', 'Desconto', 'Promoção', 'Masculino'],
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

      regular_price: 109.95,
      actual_price: 98.96,
      porcent_discount: 10
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
      id: 20,
      name: "Conjunto - Camisa e calça",
      img: {
         front: "./assets/produtos/masculinos/Produto20_frente.webp",
         back: "./assets/produtos/masculinos/Produto20_verso.webp"
      },

      type: 'Conjunto',
      keywords: ['Conjunto', 'Camisa', 'Calça', 'Preto', 'Preta', 'Bege', 'Casual', 'Masculino'],
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

      regular_price: 128.95,
      actual_price: 128.95,
      porcent_discount: 0
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
      id: 22,
      name: "Camisa Sólido - Verde Militar",
      img: {
         front: "./assets/produtos/masculinos/Produto22_frente.webp",
         back: "./assets/produtos/masculinos/Produto22_verso.webp"
      },
      type: 'Camisa',
      keywords: ['Camisa', 'Verde Militar', 'Verde', 'Manga Curta', 'Masculino'],
      sizes: [
         { available: true, size: 'PP' },
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

      regular_price: 66.95,
      actual_price: 66.95,
      porcent_discount: 0
   },
   {
      id: 23,
      name: "Camiseta - Bordado de chifre",
      img: {
         front: "./assets/produtos/masculinos/Produto23_frente.webp",
         back: "./assets/produtos/masculinos/Produto23_verso.webp"
      },
      type: 'Camiseta',
      keywords: ['Camiseta', 'Colorido', 'Manga Curta', 'Masculino'],
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

      regular_price: 56.99,
      actual_price: 56.99,
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
   {
      id: 25,
      name: "Sapato Marron - Nike",
      img: {
         front: "./assets/produtos/sapatos/sapato1_frente.jpg",
         back: "./assets/produtos/sapatos/sapato1_verso.jpg"
      },
      type: 'Sapato',
      keywords: ['Sapato', 'Branco', 'Branca', 'Manga Curta', 'Feminino', 'Desconto', 'Promoção',],
      sizes: [
         { available: true, size: '31' },
         { available: false, size: '36' },
         { available: true, size: '42' },
         { available: true, size: '46' },
         { available: true, size: '50' }
      ],

      size: {
         size_pp: "33-34",
         size_p: "36",
         size_m: "39",
         size_g: "42",
         size_gg: "44",
      },

      regular_price: 60.99,
      actual_price: 50.49,
      porcent_discount: 10
   },

   {
      id: 26,
      name: "Sapato Branco - Nike",
      img: {
         front: "./assets/produtos/sapatos/sapato2_frente.jpg",
         back: "./assets/produtos/sapatos/sapato2_verso.jpg"
      },
      type: 'Sapato',
      keywords: ['Sapato', 'Branco', 'Branca', 'Manga Curta', 'Feminino', 'Desconto', 'Promoção',],
      sizes: [
         { available: true, size: '31' },
         { available: false, size: '36' },
         { available: true, size: '42' },
         { available: true, size: '46' },
         { available: true, size: '50' }
      ],

      size: {
         size_pp: "33-34",
         size_p: "36",
         size_m: "39",
         size_g: "42",
         size_gg: "44",
      },

      regular_price: 72.99,
      actual_price: 63.49,
      porcent_discount: 10
   },

   {
      id: 27,
      name: "Sapato beje cano alto - Nike",
      img: {
         front: "./assets/produtos/sapatos/sapato3_frente.jpg",
         back: "./assets/produtos/sapatos/sapato3_verso.jpg"
      },

      size: {
         size_pp: "33-34",
         size_p: "36",
         size_m: "39",
         size_g: "42",
         size_gg: "44",
      },

      type: 'Sapato',
      keywords: ['Sapato', 'Branco', 'Branca', 'Manga Curta', 'Feminino', 'Desconto', 'Promoção',],
      sizes: [
         { available: true, size: '31' },
         { available: false, size: '36' },
         { available: true, size: '42' },
         { available: true, size: '46' },
         { available: true, size: '50' }
      ],
      regular_price: 120.99,
      actual_price: 89.49,
      porcent_discount: 10
   }

]