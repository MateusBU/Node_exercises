const sequence = {
    _id: 1,
    get id(){ return this._id++} //return the next value of id
}

const products = {}

function saveProduct(product){
    //if the product does not have an id, it is created
    if(!product.id){
        product.id = sequence.id
    }
    products[product.id] = product
    return product
}

function getProduct(id){
    return products[id] || {}
}

function getProducts(){
    return Object.values(products)
}

module.exports = {saveProduct, getProduct, getProducts}