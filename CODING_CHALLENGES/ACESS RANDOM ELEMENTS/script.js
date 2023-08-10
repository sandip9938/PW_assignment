function extract(array){
    const [first,second,third, , , , , ,Hundreds]= array
    return[first,second,Hundreds]
}
const arr =[1,2,3,4,5,6,7,8,9]
console.log(extract(arr));