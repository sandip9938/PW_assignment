function dblarr (arr,cback){
    const dblArr=arr.map((num)=>{
        return cback(num)
    })
    return dblArr
}
const orgarr=[1,2,3,4,5]
function cback(num){
   return num *= 2;
}
const dblArr = dblarr(orgarr,cback)
console.log(dblArr);