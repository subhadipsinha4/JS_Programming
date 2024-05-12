
const functionTest=require('./functionTest')
class child extends functionTest{

    constructor(fristname,lastname){
        super(fristname,lastname)
    }

    childTest(){
        console.log("Inside the child class method")
    }

}

var childObj=new child("Rahul","Merry");
childObj.childTest()
console.log(childObj.test1())
console.log(childObj.test())

