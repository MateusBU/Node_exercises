// Factory retunrs an instance (new object)
module.exports = () =>{
    return{
        value: 1,
        inc(){
            this.value++
        }
    }
}