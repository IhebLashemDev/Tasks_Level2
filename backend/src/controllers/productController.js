const prisma = require("../config/prisma");

// GET /api/products  (Public)
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { created_at: "desc" },
    });
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET /api/products/:id  (Public)
const getProduct = async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST /api/products  (Admin Only)
const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || price == null) {
      return res.status(400).json({ success: false, message: "Name and price are required" });
    }

    const product = await prisma.product.create({
      data: req.body,
    });

    res.status(201).json({ success: true, message: "Product created", data: product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// PUT /api/products/:id  (Admin Only)
const updateProduct = async (req, res) => {
  try {
    const product = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.status(200).json({ success: true, message: "Product updated", data: product });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE /api/products/:id  (Admin Only)
const deleteProduct = async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: Number(req.params.id) },
    });
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};