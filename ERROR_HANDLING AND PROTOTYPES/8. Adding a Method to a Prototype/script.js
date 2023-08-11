function Students(name){
    this.name = name
    }
    Students.prototype.printDetails=function(){
        console.log(`my name is ${this.name}`);
    }
    const st = new Students("sandip")
    st.printDetails()