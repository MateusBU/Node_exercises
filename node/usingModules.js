const loadashModule = require('lodash');

setInterval(() => {
    console.log(loadashModule.random(1, 1000))
}, 3000);