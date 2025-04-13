// first 2 dots goes to folderA, the second 2 dots gost to the node folder
const moduleA = require('../../moduleA')
console.log(moduleA.welcome)

const http = require('http')
http.createServer((req, res)=>{
    res.write('Good morning')
    res.end()
}).listen(8080)
//at localhost:8080 is good morning msg

const moduleC = require('./folderC/index')
console.log(moduleC.hello2)