const Product = require('../models/products.models');

exports.Products = async (req, res) => {
  const {
    seller_id,
    name,
    description,
    starting_price,
    min_bid_increment,
    min_sale_price,
    auction_start_time,
    auction_end_time,
  } = req.body;


  const image = req.files['image'] ? req.files['image'][0].path : null; 
  const video = req.files['video'] ? req.files['video'][0].path : null; 

  try {

    const newProduct = await Product.create({
      seller_id,
      name,
      description,
      starting_price,
      min_bid_increment,
      min_sale_price,
      auction_start_time,
      auction_end_time,
      image,
      video,
    });
    return res.status(200).json({ Product: newProduct }); 
  } catch (error) {
    return res.status(500).json({ error: error.message }); 
  }
};
