const db = require('../server/db')
const {User, Category, Product, Review, Order, OrderItem} = require('../server/db/models')

async function seed () {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      email: 'murphy@email.com',
      password: '123'
    })
  ])
  
  const categories = await Promise.all([
    Category.create({
      name: 'Dark'
    }),
    Category.create({
      name: 'Single Origin '
    }),
    Category.create({
      name: 'All'
    }),
    Category.create({
      name: 'Blend'
    }),
    Category.create({
      name: 'White'
    }),
    Category.create({
      name: 'Truffle'
    }),
    Category.create({
      name: 'Bar'
    })
  ])
  
  const products = await Promise.all([
    Product.create({
      name: 'Arawi - Deluxe',
      description: 'Single Origin Arriba Nacional, 78% cacao',
      price: 1299,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'}),
    Product.create({
      name: 'Pacari - Super Milky',
      description: 'Single Origin Hybrid, 30% cacao',
      price: 1599,
      quantity: 20,
      imgURL: 'http://via.placeholder.com/100x100'})
  ])
  const reviews = await Promise.all([
    Review.create({
      userId: 1,
      productId: 1,
      content: 'This is a review.',
      rating: 3
    }),
    Review.create({
      userId: 2,
      productId: 2,
      content: 'This is another review',
      rating: 4
    })
  ])

  const orders = await Promise.all([
    Order.create({
      session: 'rrr',
      email: 'murphy@email.com',
      status: 'Created',
      userId: 2
    }),
    Order.create({
      session: 'eee',
      email: 'murphy@email.com',
      status: 'Processing',
      userId: 2
    })
  ])

  const orderItems = await Promise.all([
    OrderItem.create({
      price: 299,
      quantity: 2,
      orderId: 1,
      productId: 1
    }),
    OrderItem.create({
      price: 99,
      quantity: 10,
      orderId: 1,
      productId: 2
    }),
    OrderItem.create({
      price: 300,
      quantity: 4,
      orderId: 2,
      productId: 1
    })
  ])
  
  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${categories.length} categories`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded ${orders.length} orders`)
  console.log(`seeded ${orderItems.length} orderItems`)
  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

console.log('seeding...')
