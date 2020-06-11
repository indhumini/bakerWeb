const router = require('express').Router();
const Product = require('../models/product');

const multer = require('multer');

//const faker = require('faker');

const checkJWT = require('../middlewares/check-jwt');

const upload = multer({dest: "/uploads"})

 router.route('/products')
  .get(checkJWT, (req, res, next) => {
    Product.find({ owner: req.decoded.user._id })
      .populate('owner')
      .populate('category')
      .exec((err, products) => {
        if (products) {
          res.json({
            success: true,
            message: "Products",
            products: products
          });
        }
      });
  })
  .post([checkJWT, upload.single('product_picture')], (req, res, next) => {
    console.log(upload);
    console.log(req.file);
    let product = new Product();
    product.owner = req.decoded.user._id;
    product.category = req.body.categoryId;
    product.title = req.body.title;
    product.price = req.body.price;
    product.description = req.body.description;
    product.image = req.file.location;
    product.save();
    res.json({
      success: true,
      message: 'Successfully Added the product'
    });
  }); 

/* Just for testing */
// router.get('/faker/test',(req, res, next) => {
//   for (i = 0; i < 20; i++) {
//     let product = new Product();
//     product.category = "5a686728080eae201861616a";
//     product.owner = "5a66f19dc5f7401b2057e1a3";
//     product.image = faker.image.cats();
//     product.title = faker.commerce.productName();
//     product.description = faker.lorem.words();
//     product.price = faker.commerce.price();
//     product.save();
//   }

//   res.json({
//     message: "Successfully added 20 pictures"
//   });

// });


module.exports = router;
 