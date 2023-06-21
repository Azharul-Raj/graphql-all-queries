const {db:{products,categories,reviews}}=require('../data')

exports.Query= {
    hello: () => {
      return "World";
    },
    products:(_,{filter})=>{
      if(filter){
        return products.filter(product=>product.onSale===filter.onSale && product.price>=filter.price)
      }
        return products
    },
    product:(parent,args,context)=>{
        return products.find(product=>product.id===args.id)
    },
    productsByCategory:(parent,args)=>{
      return products.filter(product=>product.categoryId===args.id);
    },
    categories:()=>{
      return categories;
    },
    category:(parent,args)=>{
      return categories.find(category=>category.id===args.id);
    },
    reviews:()=>{
      return reviews;
    }
  }