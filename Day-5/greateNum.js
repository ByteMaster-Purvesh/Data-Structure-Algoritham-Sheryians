function findGreatest(a, b, c) {
    // Write your logic here
    if ( a >= b && a >= c ) {
        return a
    } if (b >= c && b >= a) {
        return b
    } if( c >= b && c >= a ) {
        return c
    }
}

console.log(findGreatest( 3, 7, 5))