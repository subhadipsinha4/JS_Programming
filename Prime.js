class primeTest{

    checkNumberIsPrime(number){
        let flag=0
        let count=1
        if(number>1){
        for(let i=1;i<number;i++){
            if(number%i==0){
                count++
            }
            if(count>2){
                count=1
                flag=1
                break
            }
        }
        if(flag==1){
            console.log("It's not a prime number: ",number)
        }else{
            console.log("It's a prime number: ",number)
        }
        }else{
            console.log("Invalid number, enter number more than 1")
        }
    }
}

new primeTest().checkNumberIsPrime(40);