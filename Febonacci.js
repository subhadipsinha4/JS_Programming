class febo{

     feboSeries (value) {
        let a=0
        let b=1
        let sum=0
        console.log(a)
        console.log(b)
        for(let i=0;i<value;i++){
            sum=a+b;
            console.log(sum)
            a=b
            b=sum
        }
    }
}

obj=new febo()
obj.feboSeries(10)


