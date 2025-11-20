const express = require("express");
const app = express();

app.use(express.json());

// POST /cart/total
app.post("/cart/total", (req, res) => {
  const items = req.body.items;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: "Items array is required" });
  }

  let total = 0;

  for (let item of items) {
    if (!item.price || !item.qty) {
      return res.status(400).json({ error: "Each item must have price and qty" });
    }
    total += item.price * item.qty;
  }

  res.json({ total });
});

app.listen(3000, () => {
  console.log("Cart Price API running on port 3000");
});
