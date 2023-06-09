const express = require('express');
const categoryController = require('../controllers/categoryController');
const { authenticateTokenMiddleware } = require('../middlewares/tokenAuth');

const router = express.Router();

router.post('/', authenticateTokenMiddleware, categoryController.createCategory);
router.get('/', authenticateTokenMiddleware, categoryController.getAllCategories);

module.exports = router;