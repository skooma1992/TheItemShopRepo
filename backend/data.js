const mongoose = require('mongoose')
const db = require('./models/productModel') 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/theitemshop")

const products  
    =[
        {
        _id:'1',
        name: 'Item test 1',
        category: 'test catergory1',
        image: '/images/d1.jpeg',
        price: 60,
        brand: 'test brand',
        rating: '4.5 stars',
        numReviews: 10,
        countInStock: 6

    },
    {
        _id:'2',
        name: 'Item test 2',
        category:'test category2',
        image: '/images/truth.jpg',
        price: 60,
        brand: 'test brand',
        rating: '4.5 stars',
        numReviews: 10,
        countInStock: 0

    },
    {
        _id:'3',
        name: 'Item test 3',
        category: 'testcategory3',
        image: '/images/d1.jpeg',
        price: 60,
        brand: 'test brand',
        rating: '4.5 stars',
        numReviews: 10,
        countInStock: 6

    },
    {
        _id:'4',
        name: 'Item test 4',
        image: '/images/d1.jpeg',
        price: 60,
        brand: 'test brand',
        rating: '4.5 stars',
        numReviews: 10,
        countInStock: 6

    },
    {
        _id:'5',
        name: 'Item test 5',
        category: 'test catergory1',
        image: '/images/d1.jpeg',
        price: 60,
        brand: 'test brand',
        rating: '4.5 stars',
        numReviews: 10,
        countInStock: 1

    },
    {
        _id:'6',
        name: 'Item test 1',
        category: 'test catergory1',
        image: '/images/d1.jpeg',
        price: 60,
        brand: 'test brand',
        rating: '4.5 stars',
        numReviews: 10,
        countInStock: 2

    },
]


db.remove({}).then(()=>mongoose.models.insertmany(products)).then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
