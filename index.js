const express = require("express");
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const usersRoute = require("./routes/users")
const productsRoute = require("./routes/products")
const cartRoute = require("./routes/cart")
const ordersRoute = require("./routes/orders")
const stripeRoute = require("./routes/stripe")
const cors = require("cors")

dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mdb success"))
  .catch((err) => console.log(err))

app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/products", productsRoute)
app.use("/api/cart", cartRoute)
app.use("/api/orders", ordersRoute)
app.use("/api/checkout", stripeRoute)
app.listen(process.env.PORT || 5000, () => {
  console.log("Starting backend");
})