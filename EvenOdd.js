class evenOddNummer{

    findevenOdd(number){
        if(number>0){
            if(number%2==0)
            console.log("Even Number ",number)
            else
            console.log("Odd Number ",number)
        }else{
            console.log("Invalid number")
        }
      
    }

    findEvenOddWithInRange(range){
        for(let i=1;i<range;i++){
            if(i%2==0){
                console.log("Even Number ",i)   
            }else{
                console.log("Odd Number ",i)
            }
        }

    }
}

//new evenOddNummer().findevenOdd(1)
new evenOddNummer().findEvenOddWithInRange(10)

