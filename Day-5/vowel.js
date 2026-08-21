// let prompt = require('prompt-sync')()
let word =  "Shree Ram"
let vowel = 0
let consonents = 0
let wordTrm = word.trim().replace(/\s/g, "");
console.log(wordTrm)

for( let i = 0; i <= wordTrm.length; i++){
    switch(wordTrm[i]){
    case 'a': {
        console.log("A is present in the word as vowel")
        vowel++
        break;
    }
    case 'e': {
        console.log("E is present in the word as vowel")
        vowel++
        break;
    }
    case 'i': {
        console.log("I is present in the word as vowel")
        vowel++
        break;
    }
    case 'o': {
        console.log("O is present in the word as vowel")
        vowel++
        break;
    }
    case 'u': {
        console.log("U is present in the word as vowel")
        vowel++
        break;
    }
    default :{
        consonents++
        console.log(word[i],"is present in the word as consonent")
    }
}
}


console.log("vowel are :", vowel)
console.log("consonents are :", consonents)