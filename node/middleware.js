const step1 = (context, next) =>{
    context.value1 = 'mid1'
    next() //call next function
}

const step2 = (context, next) =>{
    context.value2 = 'mid2'
    next() //important, because it can call the next function
}

const step3 = ctx => ctx.value3 = 'mid3'

//receives middlewares functions
const exec = (ctx, ...middlewares) =>{
    
    // if middlewares is not null and
    // index is smaller than the lenght of mid functions executes

    // the function execStep call itself sending itself as one of arguments
    //it is call recursive

    const execStep = index =>{
        middlewares && (index < middlewares.length) &&
        middlewares[index](ctx, () => execStep(index + 1))
    }

    execStep(0) //0 is the index in execStep function
}

const ctx = {}
exec(ctx, step1, step2, step3)
console.log(ctx)