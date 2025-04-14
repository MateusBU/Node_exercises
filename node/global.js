global.MyApp = {
    hello(){
        return 'Hello'
    },
    name: 'System'
}

//now it CAN'T change 
global.MyApp2 = Object.freeze({
    hello(){
        return 'Hello'
    },
    name: 'System'
})