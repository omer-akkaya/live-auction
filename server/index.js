require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const express = require("express");
const app = express();
const { Server } = require("socket.io");

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const corsOptions = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
};

async function App() {
  try {
    await mongoose.connect(process.env.DBURI);
    const server = app.listen(process.env.PORT);
    const io = new Server(server, corsOptions);
    io.on("connection", (socket) => {
      socket.on("update", (message) => {
        socket.broadcast.emit("update", message);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

App();

//routes
app.use(authRoutes);
app.use(productRoutes);
