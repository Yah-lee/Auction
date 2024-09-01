const { error } = require("console");
const Bid = require("../models/bid.models");

exports.createBid = async (req, res) => {
  const { product_id, bidder_id, bid_amount, bid_time, is_proxy_bid } =
    req.body;
  try {
    const newBid = await Bid.create({
      product_id,
      bidder_id,
      bid_amount,
      bid_time,
      is_proxy_bid,
    });
    return res.status(200).json({ bid: newBid });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.get_bids = async (req, res) => {
  try {
    const bids = await Bid.findAll();
    if (!bids || bids.length === 0) {
      return res.status(404).json({ error: "No bids found " });
    }
    return res.status(200).json({ bids });
  } catch (err) {
    return res.status(500).json({
      error: "Failed to get bids",
      message: err.message,
    });
  }
};
