class largeAndSmall{

    findLargeAndSmall(arrayValue){
        let sortedArray=arrayValue.sort(function(a,b){return a-b})
        let l=sortedArray.length
        console.log("Small number: ",sortedArray[0],"Large Number: ",sortedArray[l-1])
    }
}

Obje=new largeAndSmall().findLargeAndSmall([3,4,5,1,6,70,-1])
