// this point to module.exports
console.log(module.exports == this)
console.log(module.exports == exports)

//extern
this.a = 1
exports.b = 2
module.exports.c = 3

module.exports = {public: true}