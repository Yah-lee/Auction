const SystemLog = require("../models/system.models");
const User = require("../models/user.models");

exports.createLog = async (req, res) => {
  const { user_id, action } = req.body;

  try {
    const newLog = await SystemLog.create({
      user_id,
      action,
      timestamp: new Date(),
    });

    return res
      .status(201)
      .json({ message: "Log created successfully", log: newLog });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getAllLogs = async (req, res) => {
  try {
    const logs = await SystemLog.findAll({
      include: [
        { model: User, attributes: ["user_id", "FirstName", "LastName"] },
      ],
    });

    return res.status(200).json(logs);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getLogById = async (req, res) => {
  const { log_id } = req.params;

  try {
    const log = await SystemLog.findByPk(log_id, {
      include: [
        { model: User, attributes: ["user_id", "FirstName", "LastName"] },
      ],
    });

    if (!log) {
      return res.status(404).json({ message: "Log not found" });
    }

    return res.status(200).json(log);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteLogById = async (req, res) => {
  const { log_id } = req.params;

  try {
    const result = await SystemLog.destroy({ where: { log_id } });

    if (!result) {
      return res
        .status(404)
        .json({ message: "Log not found or already deleted" });
    }

    return res.status(200).json({ message: "Log deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
