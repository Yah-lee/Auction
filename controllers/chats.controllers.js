// const { error } = require("console");
// const chat = require("../models/chats.models");

// exports.createChat = async (req, res) => {
//   const { sender_id, receiver_id, message } = req.body;
//   try {
//     const newChat = await chat.create({
//       sender_id,
//       receiver_id,
//       message,
//     });
//     return res.status(201).json({ newChat });
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };
