const router = require('express').Router()
const { Product, Category } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: [{
        model: Product
      }]
    })
    res.json(categories)
  }
  catch (error) {
    next(error)
  }
})

router.get('/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id
      }
    })
    const categories = await product.getCategories()
    res.json(categories)
  }
  catch (error) {
    next(error)
  }
})

router.get('/:catId/products/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: +req.params.productId
      }
    })
    const categories = await product.addCategories([+req.params.catId])
    res.json(categories)
  }
  catch (error) {
    next(error)
  }
})

router.delete('/:catId/products/:productId', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: +req.params.productId
      }
    })
    const categories = await product.removeCategories([+req.params.catId])
    await product.reload()
    res.json(categories)
  }
  catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const category = await Category.create({
      name: req.body.name,
    })
    res.json(category)
  }
  catch (error) {
    next(error)
  }
})


router.delete('/:id', async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: {
        id: +req.params.id
      }
    })
    await category.destroy({ force: true })
    res.json('This record no longer exists')
  }
  catch (error) {
    next(error)
  }
})
