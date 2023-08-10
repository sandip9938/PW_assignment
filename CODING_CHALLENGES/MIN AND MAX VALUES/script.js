function maxmin(array){
    return {
    max : Math.max(...array) ,
    min : Math.min(...array)
    }
}
const arr =[4,5,6,7,9,12,3,4,66,77,88]
console.log("Max-Min",maxmin(arr));