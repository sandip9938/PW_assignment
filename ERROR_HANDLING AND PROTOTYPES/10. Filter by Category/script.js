 function filterbc(products){
return function(catagory){
    return products.filter(function(products){
        return products.catagory === catagory
    })
}
 }

 var products = [
{name:"shirt",catagory:"clothing"},
{name:"pant",catagory:"clothing"},
{name:"hat",catagory:"Acessoires"},
{name:"toy",catagory:"toying"},
 ]

 var clothingproduct = filterbc(products)("clothing")
 console.log(clothingproduct);