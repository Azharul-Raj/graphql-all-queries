const {Query}=require('../resolvers/Query');
const {Category}=require('../resolvers/Category');
const {Product}=require('../resolvers/Product');
const {Review}=require('./Review')

exports.resolvers={
    Query,
    Category,
    Product,
    // Review
}