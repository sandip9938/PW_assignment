class person{
    constructor(name="unknown",age=0){
        this.name = name;
        this.age= age;
    }
   getDetails(){
    console.log(`Name: ${this.name}, Age:${this.age}`);
   }
   
}
const p1 =  new person("sandip",21)
const p2 =  new person()

console.log(p1.getDetails());
console.log(p2.getDetails());