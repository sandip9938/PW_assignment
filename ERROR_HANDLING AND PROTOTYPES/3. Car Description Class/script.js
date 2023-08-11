class car {
    constructor(company,model,year,version,color){
        this.company = company;
        this.model= model ;
        this.year  = year   ;
        this.version     = version      ;
        this.color       = color
    }
    getDescripition(){
        return `${this.company}, ${this.model}, ${this.year} ${this.version} ,${this.color}`
    }
}
const myveicle = new car("THAR","HIGH MODEL","2023","2023-24","black")
console.log(myveicle.getDescripition());