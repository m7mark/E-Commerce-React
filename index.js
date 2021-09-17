const express = require("express");
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const productCart = require("./routes/cart")
const productOrder = require("./routes/order")

dotenv.config()

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("mdb success"))
    .catch((err) => console.log(err))

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/cart", productCart)
app.use("/api/orders", productOrder)
app.listen(process.env.PORT || 5000, () => {
    console.log("Starting backend");
})