const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require('./src/routes/authRoutes');
const productRoutes = require("./src/routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use('/api/auth', authRoutes);
// Root
app.get("/", (req, res) => {
  res.json({
    message: "Products REST API is running 🚀",
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});