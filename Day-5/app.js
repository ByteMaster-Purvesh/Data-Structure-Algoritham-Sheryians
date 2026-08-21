// let prompt = require('prompt-sync')()
let day =  5

// switch(day){
//     case 1: {
//         console.log("Todays is Monday.")
//         break;
//     }
//     case 2: {
//         console.log("Todays is Teusday.")
//         break;
//     }
//     case 3: {
//         console.log("Todays is Wednesday.")
//         break;
//     }
//     case 4: {
//         console.log("Todays is Thrusday.")
//         break;
//     }
//     case 5: {
//         console.log("Todays is Friday.")
//         break;
//     }
//     case 6: {
//         console.log("Todays is Saturday.")
//         break;
//     }
//     case 7: {
//         console.log("Todays is Sunday.")
//         break;
//     }
// }


function printDayName(day) {
 //write your code here
    let nameDay = 0
    if (day < 0) {
        day = day * -1;
    }

    switch( day ){
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