const express = require('express');
const router = express.Router();
const UserSettings = require('../models/UserSettings');

// 获取设置
router.get('/', async (req, res) => {
  try {
    const settings = await UserSettings.findOne().sort({ updatedAt: -1 });
    res.json(settings || {
      initialWeight: 70,
      targetWeight: 65,
      height: 170
    });
  } catch (err) {
    res.status(500).send('服务器错误');
  }
});

// 更新设置
router.post('/', async (req, res) => {
  try {
    const { initialWeight, targetWeight, height } = req.body;
    const settings = new UserSettings({
      initialWeight,
      targetWeight,
      height
    });
    await settings.save();
    res.json(settings);
  } catch (err) {
    res.status(500).send('服务器错误');
  }
});

module.exports = router; 