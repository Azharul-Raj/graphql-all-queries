const {db:{categories,reviews}}=require('../data');

exports.Product={
    category:(parent)=>{
      return categories.find(category=>category.id===parent.categoryId)
    },
    reviews:(parent)=>{
      return reviews.filter(review=>review.productId===parent.id)
    }
  }