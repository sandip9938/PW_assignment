class employee{
    constructor(name,position,salary){
        this.name= name;
        this.position = position ;
        this.salary  = salary
    }
    getSalary(){
        return `The Salary of ${this.name} is :${this.salary}`
    }
}
const emp1 = new employee("sandip panda","software engenering",50000)
console.log(emp1.getSalary());