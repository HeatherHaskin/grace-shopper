const router = require('express').Router()
const {Review, Product} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Review.findAll()
    .then(review => res.json(review))
    .catch(next)
})

router.get('/:reviewId', (req, res, next) => {
  Review.findOne({
    where: {
      id: req.params.reviewId
    }
  })
    .then(review => res.json(review))
    .catch(next)
})


router.post('/', async (req, res) => { //NEED TO ADD USERID TO ADD REVIEW//
  try {
    const review = await Review.create({
      rating: req.body.rating,
      content: req.body.content,
      productId: req.body.productId,
    })
    res.json(review)
  }
  catch (error) {
    next(error)
  }
})
