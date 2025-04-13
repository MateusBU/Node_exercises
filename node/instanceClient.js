// Node does caches, then both points to the same object
const contA = require('./instanceUnique')
const contB = require('./instanceUnique')

contA.inc()
contA.inc()
console.log(contA.value)
console.log(contB.value)

//each contC is a different object
const contC = require('./instanceNew')()
const contD = require('./instanceNew')()

contC.inc()
contC.inc()
console.log(contC.value)
console.log(contD.value)