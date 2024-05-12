class febonacci{

    febonacciS(number){
        let a=0;
        let b=1;
        console.log(a," ",b)
        while(number>0){
            let c=a+b;
            console.log(c)
            a=b
            b=c
            number--
        }
    }
}


new febonacci().febonacciS(5)