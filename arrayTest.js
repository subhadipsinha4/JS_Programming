let arrayPlay=new Array()
// created array object
arrayPlay[0]=12
arrayPlay[1]=13
// arrayPlay[2]="null"
// arrayPlay[3]=14
console.log(arrayPlay)
console.log(typeof(arrayPlay))

arrayPlay.push(20)
arrayPlay.push(20)
console.log(arrayPlay)
arrayPlay.pop()
console.log(arrayPlay)
console.log(arrayPlay.includes(12))

//reduce method
console.log(arrayPlay.reduce((sum,current)=>sum+current,0))

//filter method
let newArray=arrayPlay.filter((value=>value%2==0))
console.log(newArray)

// map method
let newMapArryValue=arrayPlay.map(value=>value*3)
console.log(newMapArryValue)

//Sort String array
let wordArray=["jack","bony","tinku","monika","martin","hans"]
console.log(wordArray.sort())
