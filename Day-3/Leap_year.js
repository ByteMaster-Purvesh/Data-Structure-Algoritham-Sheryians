function isLeapYear(year) {
    // Write your logic here
    if ( ( year % 4 === 0 && year % 100 !== 0 && year % 2 != 0 ) || year % 400 === 0){
        console.log('Leap Year'); 
    } else {
        console.log('Not a Leap Year'); 
    }
}

isLeapYear(2023)