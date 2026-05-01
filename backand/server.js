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
    { name: "a1", code: "#36a9a78a", image:"/aj/img/a1.jpeg"},
    { name: "a2", code: "#9d56be", image: "/aj/img/a2.jpeg"},
    { name: "a3", code: "#6e182e", image: "/aj/img/a3.jpeg"}
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
    { name: "b2", code: "#ceb396", image: "/aj/img/ab2.jpeg"}
    ]
  },
  { 
    id: 3, 
    name: "Olive Elegance Set", 
    price: 449, 
    fabric: "Soft Linen Blend", 
    category: "clothing",
    colors: [
    { name: "c1", code: "#2d141cef", image:"/aj/img/ac1.jpeg"},
    { name: "c2", code: "#090909", image: "/aj/img/ac2.jpeg"},
    { name: "c3", code: "#5e3811", image: "/aj/img/ac3.jpeg"}
    ]
  },
  { 
    id: 4, 
    name: "Cream Pearl Abaya", 
    price: 379, 
    fabric: "Silk Touch Crepe", 
    category: "clothing",
    colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/ad1.jpeg"},
    { name: "d2", code: "#21145b", image: "/aj/img/ad2.jpeg"},
    { name: "d3", code: "#5e3811", image: "/aj/img/ad3.jpeg"}
    ]
  },
  { 
    id: 5, 
    name: "Mocha Dream Dress", 
    price: 329, 
    fabric: "Flowy Georgette", 
    category: "clothing",
    colors: [
    { name: "e1", code: "#052e19f0", image:"/aj/img/ae1.jpeg"},
    { name: "e2", code: "#935378", image: "/aj/img/ae2.jpeg"},
    { name: "e3", code: "#5e3811", image: "/aj/img/ae3.jpeg"}
    ]
  },
  { 
    id: 6, 
    name: "Blush Pink Set", 
    price: 419, 
    fabric: "Premium Medina Silk", 
    category: "clothing",
    colors: [
    { name: "f1", code: "#6e182e", image:"/aj/img/af1.jpeg"},
    { name: "f2", code: "#271907", image: "/aj/img/af2.jpeg"},
    { name: "f3", code: "#08ae13a3", image: "/aj/img/af3.jpeg"}
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
      { name: "ba2", code: "#90ba7e", image: "/aj/img/ba2.jpeg"},
      { name: "ba3", code: "#9e7e5e", image: "/aj/img/ba3.jpeg"},
      { name: "ba4", code: "#3b6199", image: "/aj/img/ba4.jpeg"}
    ]
  },
  { 
    id: 8, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
    colors: [
      { name: "bb1", code: "#3c2308", image:"/aj/img/bb1.jpeg"},
      { name: "bb2", code: "#c8ab9a", image: "/aj/img/bb2.jpeg"},
      { name: "bb3", code: "#070707", image: "/aj/img/bb3.jpeg"}
    ]
  },
  { 
    id: 9, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#080808", image:"/aj/img/bc1.jpeg"},
    { name: "d2", code: "#f2f2f2", image: "/aj/img/bc2.jpeg"},
    { name: "d3", code: "#7e6144", image: "/aj/img/bc3.jpeg"}
    ]
  },
  { 
    id: 10, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#e693d3", image:"/aj/img/bd1.jpeg"},
    { name: "d2", code: "#c6b170", image: "/aj/img/bd2.jpeg"},
    { name: "d3", code: "#78a944", image: "/aj/img/bd3.jpeg"},
    { name: "d3", code: "#dbcdbf", image: "/aj/img/bd4.jpeg"}
    ]
  },
  { 
    id: 11, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/be1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/be2.jpeg"}
    ]
  },
  { 
    id: 12, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#faf7f4", image:"/aj/img/bf1.jpeg"},
    { name: "d2", code: "#956543", image: "/aj/img/bf2.jpeg"},
    { name: "d3", code: "#1372ad", image: "/aj/img/bf3.jpeg"}
    ]
  },
  
  // Accessories
  { 
    id: 13, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/aj/img/ca1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/ca2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/ca3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/ca4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/ca5.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/ca6.jpeg"}
    ]
  },
  { 
    id: 14, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/aj/img/cb1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cb2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cb3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cb4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cb5.jpeg"}
    ]
  },
  { 
    id: 15, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/aj/img/cc1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cc2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cc3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cc4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cc5.jpeg"}
    ]
  },
  { 
    id: 16, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/aj/img/cd3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cd2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cd1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cd4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cd5.jpeg"}
    ] 
  },
  { 
    id: 17, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/aj/img/ce1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/ce2.jpeg"}
    ]
  },
  { 
    id: 18, 
    name: "Pearl Hijab Pin Set", 
    price: 49,
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:"/aj/img/cf1.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cf2.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cf3.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cf4.jpeg"},
    { name: "d1", code: "#faf7f4", image:"/aj/img/cf5.jpeg"}
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
    { name: "d1", code: "#ceb396", image:"/aj/img/da1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/da2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/da3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/da4.jpeg"}
    ]
  },
   { 
    id: 20, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/db1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/db2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/db3.jpeg"}
    ] 
  },
   { 
    id: 21, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/dc1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/dc2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/dc3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/dc4.jpeg"}
    ] 
  },
   { 
    id: 22, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/dd1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/dd2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/dd3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/dd4.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/dd5.jpeg"}
  ]
  },
   { 
    id: 23, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/de1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/de2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/de3.jpeg"}
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
    { name: "d1", code: "#ceb396", image:"/aj/img/ea1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ea2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ea3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ea4.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ea5.jpeg"},
    { name: "d1", code: "#ceb396", image:"/aj/img/ea6.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ea7.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ea8.jpeg"}
  
  ]
  },
   { 
    id: 25, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/eb1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/eb2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/eb3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/eb4.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/eb5.jpeg"},
     { name: "d3", code: "#854baf", image: "/aj/img/eb6.jpeg"},
      { name: "d3", code: "#854baf", image: "/aj/img/eb7.jpeg"}
  ]
  },
   { 
    id: 26, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/ec1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ec2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ec3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ec4.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ec5.jpeg"}
  ] 
  },
   { 
    id: 27, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/ed1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ed2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ed3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ed4.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ed5.jpeg"},
     { name: "d3", code: "#854baf", image: "/aj/img/ed6.jpeg"},
      { name: "d3", code: "#854baf", image: "/aj/img/ed7.jpeg"},
  ] 
  },
   { 
    id: 28, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/ee1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ee2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ee3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ee4.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ee5.jpeg"}
  ] 
  },
   { 
    id: 29, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/ef1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ef2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ef3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ef4.jpeg"}
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
    { name: "d1", code: "#ceb396", image:"/aj/img/fa1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fa2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fa3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fa4.jpeg"}
  ]
  },
    { 
    id: 31, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/fb1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fb2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fb3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fb4.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fb5.jpeg"}
  ]
  },
    { 
    id: 32, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/fc1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fc2.jpeg"}
  ] 
  },
    { 
    id: 33, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/fd1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fd2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fd3.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fd4.jpeg"}
  ]
  },
    { 
    id: 34, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/fe1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/fe2.jpeg"}
  ] 
  },
    { 
    id: 35, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:"/aj/img/ff1.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ff2.jpeg"},
    { name: "d3", code: "#854baf", image: "/aj/img/ff3.jpeg"}
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