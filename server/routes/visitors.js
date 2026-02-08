const express = require('express');
const router = express.Router();
const Visitor = require('../models/Visitor');

// Track visitor
router.post('/', async (req, res) => {
  try {
    const visitor = new Visitor({
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
      page: req.body.page,
      location: req.body.location
    });
    
    await visitor.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get visitor stats
router.get('/stats', async (req, res) => {
  try {
    const totalVisitors = await Visitor.countDocuments();
    const uniqueVisitors = await Visitor.distinct('ipAddress').then(ips => ips.length);
    
    const pageViews = await Visitor.aggregate([
      {
        $group: {
          _id: '$page',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    res.json({
      totalVisitors,
      uniqueVisitors,
      pageViews
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
