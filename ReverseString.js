class ReverseString{

    reverseString(word){
        for(let i=word.length;i>=0;i--){
            console.log(word[i])
        }
    }
}

new ReverseString().reverseString("apple")