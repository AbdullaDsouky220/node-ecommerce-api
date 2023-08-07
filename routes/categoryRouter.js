const express=require('express')
const { getCategory, postCategory } = require('../services/categoryService')
const router = express.Router()

router.get('/',getCategory)
router.post('/',postCategory)
module.exports=router