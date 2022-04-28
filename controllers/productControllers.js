const Product = require("../models/productModel");
// @desc POST a new product
// @route POST /products        
// @access Public
exports.createProduct = (req, res, next) => {
    try {
        const product = new Product(req.body);
        product.save((err, product) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    error: err
                });
            }
            return res.status(201).json({
                status: "success",
                reportId: product.id
            });
        });
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}

// @desc GET a product
// @route GET /reports?reportId=:reportId
// @access Public
exports.getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.query.reportID);
        if (!product) {
            return res.status(404).json({
                error: "Product not found"
            });
        }
        return res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
}