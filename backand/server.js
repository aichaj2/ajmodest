const express = require("express")
const cors = require("cors")

const app = express()

const products = [
  
  // Clothing
  { 
    id: 1, 
    name: "Soft Beige Abaya", 
    price: 349, 
    fabric: "Premium Crepe", 
    category: "clothing",
    
    colors: [
    { name: "a1", code: "#36a9a78a", image:"/img/a1.jpeg"},
    { name: "a2", code: "#9d56be", image: "/img/a2.jpeg"},
    { name: "a3", code: "#6e182e", image: "/img/a3.jpeg"}
    ] 
  },
  { 
    id: 2, 
    name: "Dusty Rose Kimono", 
    price: 399, 
    fabric: "Luxury Chiffon", 
    category: "clothing",
    colors: [
    { name: "b1", code: "#111b648a", image:"/img/ab1.jpeg"},
    { name: "b2", code: "#ceb396", image: "/img/ab2.jpeg"}
    ]
  },
  { 
    id: 3, 
    name: "Olive Elegance Set", 
    price: 449, 
    fabric: "Soft Linen Blend", 
    category: "clothing",
    colors: [
    { name: "c1", code: "#2d141cef", image:"/img/ac1.jpeg"},
    { name: "c2", code: "#090909", image: "/img/ac2.jpeg"},
    { name: "c3", code: "#5e3811", image: "/img/ac3.jpeg"}
    ]
  },
  { 
    id: 4, 
    name: "Cream Pearl Abaya", 
    price: 379, 
    fabric: "Silk Touch Crepe", 
    category: "clothing",
    colors: [
    { name: "d1", code: "#ceb396", image:"/img/ad1.jpeg"},
    { name: "d2", code: "#21145b", image: "/img/ad2.jpeg"},
    { name: "d3", code: "#5e3811", image: "/img/ad3.jpeg"}
    ]
  },
  { 
    id: 5, 
    name: "Mocha Dream Dress", 
    price: 329, 
    fabric: "Flowy Georgette", 
    category: "clothing",
    colors: [
    { name: "e1", code: "#052e19f0", image:"/img/ae1.jpeg"},
    { name: "e2", code: "#935378", image: "/img/ae2.jpeg"},
    { name: "e3", code: "#5e3811", image: "/img/ae3.jpeg"}
    ]
  },
  { 
    id: 6, 
    name: "Blush Pink Set", 
    price: 419, 
    fabric: "Premium Medina Silk", 
    category: "clothing",
    colors: [
    { name: "f1", code: "#6e182e", image:"/img/af1.jpeg"},
    { name: "f2", code: "#271907", image: "/img/af2.jpeg"},
    { name: "f3", code: "#08ae13a3", image: "/img/af3.jpeg"}
    ]
  },
  
  
  // Shoes
  { 
    id: 7, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
    colors: [
      { name: "ba2", code: "#90ba7e", image: "/img/ba2.jpeg"},
      { name: "ba3", code: "#9e7e5e", image: "/img/ba3.jpeg"},
      { name: "ba4", code: "#3b6199", image: "/img/ba4.jpeg"}
    ]
  },
  { 
    id: 8, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
    colors: [
      { name: "bb1", code: "#3c2308", image:"/img/bb1.jpeg"},
      { name: "bb2", code: "#c8ab9a", image: "/img/bb2.jpeg"},
      { name: "bb3", code: "#070707", image: "/img/bb3.jpeg"}
    ]
  },
  { 
    id: 9, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#080808", image:"/img/bc1.jpeg"},
    { name: "d2", code: "#f2f2f2", image: "/img/bc2.jpeg"},
    { name: "d3", code: "#7e6144", image: "/img/bc3.jpeg"}
    ]
  },
  { 
    id: 10, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#e693d3", image:"/img/bd1.jpeg"},
    { name: "d2", code: "#c6b170", image: "/img/bd2.jpeg"},
    { name: "d3", code: "#78a944", image: "/img/bd3.jpeg"},
    { name: "d3", code: "#dbcdbf", image: "/img/bd4.jpeg"}
    ]
  },
  { 
    id: 11, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/be1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/be2.jpeg"}
    ]
  },
  { 
    id: 12, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#faf7f4", image:"/img/bf1.jpeg"},
    { name: "d2", code: "#956543", image: "/img/bf2.jpeg"},
    { name: "d3", code: "#1372ad", image: "/img/bf3.jpeg"}
    ]
  },
  
  // Accessories
  { 
    id: 13, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/img/ca1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/ca2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/ca3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/ca4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/ca5.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/ca6.jpeg"}
    ]
  },
  { 
    id: 14, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/img/cb1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cb2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cb3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cb4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cb5.jpeg"}
    ]
  },
  { 
    id: 15, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/img/cc1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cc2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cc3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cc4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cc5.jpeg"}
    ]
  },
  { 
    id: 16, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/img/cd3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cd2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cd1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cd4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cd5.jpeg"}
    ] 
  },
  { 
    id: 17, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/img/ce1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/ce2.jpeg"}
    ]
  },
  { 
    id: 18, 
    name: "Pearl Hijab Pin Set", 
    price: 49,
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/img/cf1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cf2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cf3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cf4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/img/cf5.jpeg"}
    ] 
  },
  
  // Bags
  { 
    id: 19, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/da1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/da2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/da3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/da4.jpeg"}
    ]
  },
   { 
    id: 20, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/db1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/db2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/db3.jpeg"}
    ] 
  },
   { 
    id: 21, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/dc1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/dc2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/dc3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/dc4.jpeg"}
    ] 
  },
   { 
    id: 22, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/dd1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/dd2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/dd3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/dd4.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/dd5.jpeg"}
  ]
  },
   { 
    id: 23, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/de1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/de2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/de3.jpeg"}
    ]
  },
  
  // Hijab
  { 
    id: 24, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/ea1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ea2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ea3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ea4.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ea5.jpeg"},
    { name: "d1", code: "#ceb396", image:"/img/ea6.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ea7.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ea8.jpeg"}
  
  ]
  },
   { 
    id: 25, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/eb1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/eb2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/eb3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/eb4.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/eb5.jpeg"},
     { name: "d3", code: "#854baf", image: "/img/eb6.jpeg"},
      { name: "d3", code: "#854baf", image: "/img/eb7.jpeg"}
  ]
  },
   { 
    id: 26, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/ec1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ec2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ec3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ec4.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ec5.jpeg"}
  ] 
  },
   { 
    id: 27, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/ed1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ed2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ed3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ed4.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ed5.jpeg"},
     { name: "d3", code: "#854baf", image: "/img/ed6.jpeg"},
      { name: "d3", code: "#854baf", image: "/img/ed7.jpeg"},
  ] 
  },
   { 
    id: 28, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/ee1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ee2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ee3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ee4.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ee5.jpeg"}
  ] 
  },
   { 
    id: 29, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/ef1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ef2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ef3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ef4.jpeg"}
  ]
  },
  //makeup
    { 
    id: 30, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/fa1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fa2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fa3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fa4.jpeg"}
  ]
  },
    { 
    id: 31, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/fb1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fb2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fb3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fb4.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fb5.jpeg"}
  ]
  },
    { 
    id: 32, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/fc1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fc2.jpeg"}
  ] 
  },
    { 
    id: 33, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/fd1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fd2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fd3.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fd4.jpeg"}
  ]
  },
    { 
    id: 34, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/fe1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/fe2.jpeg"}
  ] 
  },
    { 
    id: 35, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/img/ff1.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ff2.jpeg"},
    { name: "d3", code: "#854baf", image: "/img/ff3.jpeg"}
  ]
  },
]
app.use(cors())
app.use(express.json())




app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API khdama 👍" })
})

app.get("/products", (req, res) => {
  res.json(products)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT)
})