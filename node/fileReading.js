const fileSystem = require('fs')

const path = __dirname + '/file.json'

// syncrony... for example (wait until read all file to continue) 
console.log('Sync')
const content = fileSystem.readFileSync(path, 'utf-8')
console.log(content)

//assync... continue the program, while the file is being read.
// One of the argument is a callback function
fileSystem.readFile(path, 'utf-8', (err, content)=>{
    //As the content is a string. It used JSON.parse() to transform in a object
    console.log('Async')
    const config = JSON.parse(content);
    console.log(`${config.db.host}: ${config.db.port}`)
})

const config = require('./file.json')
console.log(config.db)

fileSystem.readdir(__dirname, (err, files)=>{
    console.log('Folder Content...')
    console.log(files)
})