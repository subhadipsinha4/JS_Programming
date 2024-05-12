class binarySearch{

    binarySearch(arrayValue,value){
        let sortedArray=arrayValue.sort(function(a,b){return a-b})
        let max=sortedArray.length
        let min=0;
        let mid=0;

        while(min<max   && value !=sortedArray[mid]){
            mid=Math.floor((min+max)/2)
            if(sortedArray[mid]<value){
                min=mid+1
             }else if(sortedArray[mid]>value){
                 max=mid-1;
             }
        }

        if(value ==sortedArray[mid]){
            console.log("Findout value: ",+ sortedArray[mid] )
        }else{
            console.log("no result found")
        }


    }
}

obj=new binarySearch().binarySearch([2,7,1,90,30,10,4],90)