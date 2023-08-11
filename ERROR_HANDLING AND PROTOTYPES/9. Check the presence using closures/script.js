function numberchek(numbers){
return function(num){
    return numbers.includes(num)
}
}
const arr =[1,2,3,4,5]
const checknum = numberchek(arr)
console.log(checknum(4));
console.log(checknum(9));