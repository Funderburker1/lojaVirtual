const manProducts = [
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

]