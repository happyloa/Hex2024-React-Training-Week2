const books = [
  {
    category: "小說",
    content: "經典文學作品",
    description: "暢銷作家精心創作的經典小說",
    is_enabled: 1,
    origin_price: 400,
    price: 350,
    title: "風起時",
    unit: "本",
    imageUrl:
      "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/049/96/0010499685_b_01.jpg&v=4d7a17eak&w=348&h=348",
    imagesUrl: [
      "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/049/96/0010499685_b_02.jpg&v=4d7a17ebk&w=348&h=348",
      "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/049/96/0010499685_b_03.jpg&v=4d7a17ebk&w=348&h=348",
      "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/049/96/0010499685_b_04.jpg&v=4d7a17ebk&w=348&h=348",
    ],
  },
  {
    category: "科幻",
    content: "未來世界冒險故事",
    description: "探討人類與科技之間的深層聯繫",
    is_enabled: 1,
    origin_price: 450,
    price: 400,
    title: "宇宙編年史",
    unit: "本",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1675369009502-4125a781576a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://images.unsplash.com/photo-1734082134210-5d9c6a750c8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1734171740579-599b0fba66ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1734171740737-cabeb3417a92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "哲學",
    content: "思想啟蒙的經典書籍",
    description: "引領心靈的深層探索",
    is_enabled: 1,
    origin_price: 300,
    price: 250,
    title: "思想的力量",
    unit: "本",
    imageUrl:
      "https://images.unsplash.com/photo-1734082134123-2e0eec840768?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://images.unsplash.com/photo-1734082134491-45a0a54560cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1734082134491-45a0a54560cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1663868290007-e8df80a5b909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "歷史",
    content: "深入解析歷史事件",
    description: "帶您重返歷史現場",
    is_enabled: 1,
    origin_price: 500,
    price: 450,
    title: "歷史的足跡",
    unit: "本",
    imageUrl:
      "https://images.unsplash.com/photo-1734082133982-6d6210237e39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://images.unsplash.com/photo-1607948937289-5ca19c59e70f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1734082134210-5d9c6a750c8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1734171740737-cabeb3417a92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "童書",
    content: "激發孩子創造力的故事書",
    description: "適合3-8歲兒童的趣味讀物",
    is_enabled: 1,
    origin_price: 200,
    price: 180,
    title: "小熊探險記",
    unit: "本",
    imageUrl:
      "https://images.unsplash.com/photo-1734082134491-45a0a54560cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://images.unsplash.com/photo-1663868290007-e8df80a5b909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1734082133982-6d6210237e39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1734082134210-5d9c6a750c8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "商業",
    content: "經典商業策略書",
    description: "掌握成功的關鍵法則",
    is_enabled: 1,
    origin_price: 600,
    price: 550,
    title: "贏在策略",
    unit: "本",
    imageUrl:
      "https://images.unsplash.com/photo-1645185480854-c538f9f43a7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://images.unsplash.com/photo-1624979393459-37e156d6ebce?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1597045145058-222946a8412c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1663868289880-2cda6279543f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "健康",
    content: "全方位健康指南",
    description: "打造健康生活方式的必備讀物",
    is_enabled: 1,
    origin_price: 350,
    price: 300,
    title: "健康從這裡開始",
    unit: "本",
    imageUrl:
      "https://images.unsplash.com/photo-1655420968703-2b0a8f20d538?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://images.unsplash.com/photo-1663868289880-2cda6279543f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1663868749654-c467d3364884?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1609361619604-f04fe1e3670b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "科學",
    content: "探索宇宙奧秘",
    description: "讓科學知識更易於理解的啟發性書籍",
    is_enabled: 1,
    origin_price: 400,
    price: 370,
    title: "宇宙之光",
    unit: "本",
    imageUrl:
      "https://images.unsplash.com/photo-1734171740655-006407e48ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://images.unsplash.com/photo-1645185480854-c538f9f43a7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1624979393459-37e156d6ebce?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1597045145058-222946a8412c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "藝術",
    content: "藝術愛好者的珍藏書",
    description: "賞析經典藝術作品與創作者",
    is_enabled: 1,
    origin_price: 800,
    price: 750,
    title: "藝術之美",
    unit: "本",
    imageUrl:
      "https://images.unsplash.com/photo-1734171740655-006407e48ca7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://images.unsplash.com/photo-1732304720656-16007e42315f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1645185480854-c538f9f43a7a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1663868289880-2cda6279543f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
  {
    category: "旅遊",
    content: "深度旅遊指南",
    description: "帶您探索世界的每個角落",
    is_enabled: 1,
    origin_price: 550,
    price: 500,
    title: "旅遊的藝術",
    unit: "本",
    imageUrl:
      "https://images.unsplash.com/photo-1514467159223-eae20502f859?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imagesUrl: [
      "https://plus.unsplash.com/premium_photo-1681681082141-27cd214dc1a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1510058592404-bef4baf70440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1502979932800-33d311b7ce56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
];

export default books;
