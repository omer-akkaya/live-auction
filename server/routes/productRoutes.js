const { Router } = require("express");

const router = Router();

let products = [
  {
    id: 1,
    name: "The Card Players",
    startingPrice: 1000,
    lastPrice: 1000,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_collection_Al-Thani%2C_Yorck.jpg",
  },
  {
    id: 2,
    name: "Montagne Sainte-Victoire",
    startingPrice: 2000,
    lastPrice: 2000,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Montagne_Sainte-Victoire%2C_par_Paul_C%C3%A9zanne_114.jpg",
  },
  {
    id: 3,
    name: "Irises",
    startingPrice: 3000,
    lastPrice: 3000,
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Irises-Vincent_van_Gogh.jpg",
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.post("/", (req, res) => {
  products[req.body.id - 1].lastPrice = req.body.lastPrice;
  res.status(201).json(products);
});

module.exports = router;
