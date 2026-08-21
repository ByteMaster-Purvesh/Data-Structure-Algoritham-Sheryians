function isPrime(n) {
    // Write your logic here
    let status = null
    if( n == 0 ){
        status = 'Not a Prime Number'
    }
    for( let i = 2; i <= n; i++ ){
        if( n % 4 == 0 && n % 1 == 0 && n % n == 0 && n % 100 != 0){
            status = 'A Prime Number'
        }else (
            status = 'Not a Prime Number'
        )
    }
    return status
}

console.log(isPrime(9))