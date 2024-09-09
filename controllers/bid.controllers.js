const { error } = require("console");
const Bid = require("../models/bid.models");

exports.createBid = async (req, res) => {

  // console.log(req.user.user_id)

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

// exports.update_bid = async (req, res) => {
//   const { bid_id } = req.params;
//   const { product_id, bidder_id, bid_amount, bid_time, is_proxy_bid } =
//     req.body;
//   try {
//     const bid = await Bid.findOne({ where: { bid_id: bid_id } });
//     if (!bid) {
//       return res.status(404).json({ error: "Bid not found" });
//     }
//     const update_bid = {
//       product_id: product_id || bid.product_id,
//       bidder_id: bidder_id || bid.bidder_id,
//       bid_amount: bid_amount || bid.bid_amount,
//       bid_time: bid_time || bid.bid_time,
//       is_proxy_bid: is_proxy_bid || bid.is_proxy_bid,
//     };
//     await bid.update(update_bid);
//     return res.status(200).json({ bid: bid });
//   } catch (err) {
//     console.error("Error to update bid", err.message);
//     return res.status(500).json({
//       error: "Failed to update bid",
//       message: err.message,
//     });
//   }
// };
