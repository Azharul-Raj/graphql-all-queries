const {gql}=require('apollo-server');

exports.typeDefs = gql`
type Query{
    hello:String,
    products(filter:filterInput):[Product!]
    product(id:ID):Product,
    productsByCategory(id:ID!):[Product!]
    categories:[Category!]!
    category(id:ID!):Category
    reviews:[Review!]
}
type Product{
    id:ID!
    name:String!
    description:String!
    quantity:Int!
    price:Float!
    image:String!
    onSale:Boolean!
    categoryId:ID!
    category:Category!
    reviews:[Review!]
}
type Category{
  id:ID!
  name:String!
  products:[Product!]!
},
type Review{
  id:ID!
  date:String!
  title:String!
  comment:String!
  rating:Float!
  productId:ID!
}

input filterInput{
  onSale:Boolean
  rating:Int
  price:Int
}
`;