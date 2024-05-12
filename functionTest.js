module.exports=class functionTest{

    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }

    test() {
        console.log("inside func")
    }

    test1(){
        let money=40
        console.log(this.firstName+" "+this.lastName+money)
    }

     returnMobile=function (mobile,OS) {
       return mobile+OS
    }

    fulladdress=((Address,pin)=> Address+pin)
}

// let funClass=new functionTest("Rahul","Basak")
// console.log(funClass.test())
// console.log(funClass.test1())
// console.log(funClass.returnMobile("Iphone"," 17"))
// console.log(funClass.returnMobile("Jalpaiguri"," 735101"))




    