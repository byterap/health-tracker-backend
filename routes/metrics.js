const express = require('express');
const router = express.Router();
const Metric = require('../models/Metric');

// 获取所有记录
router.get('/', async (req, res) => {
  try {
    const metrics = await Metric.find().sort({ date: -1 });
    res.json(metrics);
  } catch (err) {
    res.status(500).send('服务器错误');
  }
});

// 添加新记录
router.post('/', async (req, res) => {
  try {
    const { weight, date } = req.body;
    const newMetric = new Metric({
      weight: Number(weight),
      date: date ? new Date(date) : new Date()
    });

    const metric = await newMetric.save();
    res.json(metric);
  } catch (err) {
    console.error('保存记录失败:', err);
    res.status(500).send('服务器错误');
  }
});

module.exports = router; 