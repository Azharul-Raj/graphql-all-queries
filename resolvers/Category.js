const {db:{products}}=require('../data')

exports.Category={
    products:(parent,args)=>{
      return products.filter(product=>product.categoryId===parent.id)
    }
  }