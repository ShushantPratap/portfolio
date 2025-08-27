const slidesItem = [
  {
    name: "Jumpsuit",
    img() {
      return `https://placehold.co/420x420/421156/FFFFFF?text=${this.name}`
    },
    src: "#",
  },
  {
    name: "Tracksuit",
    img() {
      return `https://placehold.co/420x420/421156/FFFFFF?text=${this.name}`
    },
    src: "#"
  },
  {
    name: "Dongry",
    img() {
      return `https://placehold.co/420x420/421156/FFFFFF?text=${this.name}`
    },
    src: "#"
  },
  {
    name: "Trouser",
    img() {
      return `https://placehold.co/420x420/421156/FFFFFF?text=${this.name}`
    },
    src: "#"
  },
  {
    name: "Pants",
    img() {
      return `https://placehold.co/420x420/421156/FFFFFF?text=${this.name}`
    },
    src: "#"
  }
];

// Products
const products = [
  {
    id: 1,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Jumpsuit",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Jumpsuit",
    fname: "Nike Jumpsuit",
    price: "1299",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    src: "#"
  },
  {
    id: 2,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=pants",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "pants",
    price: "1199",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    src: "#"
  },
  {
    id: 3,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Shirt",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Shirt",
    price: "1099",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    src: "#"
  },
  {
    id: 4,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Trouser",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Trouser",
    price: "2099",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    src: "#"
  },
  {
    id: 5,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Dongry",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Dongry",
    price: "2299",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    src: "#"
  },
  {
    id: 6,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Lower",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Lower",
    price: "1299",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    src: "#"
  },
  {
    id: 7,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Cargo",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Cargo",
    price: "1199",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    src: "#"
  },
  {
    id: 8,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=T-shirt",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "T-shirt",
    price: "1099",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    DeliveryCh: 40,
    src: "#"
  },
  {
    id: 9,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=bell bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "bell bottom",
    price: "2099",
    rprice: "2699",
    size: ["S", "M", "XL", "XXL"],
    color: ["red", "blue", "green", "yellow"],
    details: [
      "nylon",
      "red",
      "XL",
    ],
    category: "shirts",
    arrival: "new",
    sell: "best",
    src: "#"
  },
  {
    id: 10,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Track suit",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Track suit",
    price: "2299",
    category: '',
    src: "#"
  },
  {
    id: 11,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Jumpsuit",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Jumpsuit",
    price: "1299",
    category: '',
    src: "#"
  },
  {
    id: 12,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=pants",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "pants",
    price: "1199",
    category: '',
    src: "#"
  },
  {
    id: 13,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Shirt",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Shirt",
    price: "1099",
    category: '',
    src: "#"
  },
  {
    id: 14,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Trouser",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Trouser",
    price: "2099",
    category: '',
    src: "#"
  },
  {
    id: 15,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Dongry",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Dongry",
    price: "2299",
    category: '',
    src: "#"
  },
  {
    id: 16,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Lower",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Lower",
    price: "1299",
    category: '',
    src: "#"
  },
  {
    id: 17,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Cargo",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Cargo",
    price: "1199",
    category: '',
    src: "#"
  },
  {
    id: 18,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=T-shirt",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "T-shirt",
    price: "1099",
    category: '',
    src: "#"
  },
  {
    id: 19,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=bell bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "bell bottom",
    price: "2099",
    category: '',
    src: "#"
  },
  {
    id: 20,
    img: [
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Track suit",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Top",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Right",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Bottom",
      "https://placehold.co/150x150/ffffff/d3d3d3?text=Left",
    ],
    name: "Track suit",
    price: "2299",
    category: '',
    src: "#"
  }
];
