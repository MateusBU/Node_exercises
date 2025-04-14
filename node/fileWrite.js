const fs = require('fs')

const product = {
    name: 'Smartphone',
    price: 1238.78,
    discount: 0.15
}

// 1º argument: the path and the file that the data will be saved
// 2º argument: transfor the object in JSON
// 3º argument: callback that read the error
fs.writeFile(__dirname + '/fileWrite.json', JSON.stringify(product), err =>{
    if(err == null){
        console.log('Product saved')
    }
    else{
        console.log(err);
    }
})