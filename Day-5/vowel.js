// let prompt = require('prompt-sync')()
// let word =  "Shree Ram"
// let vowel = 0
// let consonents = 0
// let wordTrm = word.trim().replace(/\s/g, "");
// console.log(wordTrm)

// for( let i = 0; i <= wordTrm.length; i++){
//     switch(wordTrm[i]){
//     case 'a': {
//         console.log("A is present in the word as vowel")
//         vowel++
//         break;
//     }
//     case 'e': {
//         console.log("E is present in the word as vowel")
//         vowel++
//         break;
//     }
//     case 'i': {
//         console.log("I is present in the word as vowel")
//         vowel++
//         break;
//     }
//     case 'o': {
//         console.log("O is present in the word as vowel")
//         vowel++
//         break;
//     }
//     case 'u': {
//         console.log("U is present in the word as vowel")
//         vowel++
//         break;
//     }
//     default :{
//         consonents++
//         console.log(word[i],"is present in the word as consonent")
//     }
// }
// }


// console.log("vowel are :", vowel)
// console.log("consonents are :", consonents)


function printDayName(day) {
 //write your code here
    let count = Number(day)
    let nameDay = 0
    if ( Number(day) < 0) {
      count = day * -1;
    }
    console.log(count)

    switch( count ){
        case 1: {
            nameDay = 'Monday'
            break
        }
        case 2: {
            nameDay = 'Teusday'
            break
        }
        case 3: {
            nameDay = 'Wednesday'
            break
        }
        case 4: {
            nameDay = 'Thrusday'
            break
        }
        case 5: {
            nameDay = 'Friday'
            break
        }
        case 6: {
            nameDay = 'Saturday'
            break
        }
        case 7: {
            nameDay = 'Sunday'
            break
        }
    }
    return nameDay
}

console.log(printDayName(-3))