function printFactors(n) {
    // Write your logic here
    
    for(let i = 1; i <= n; i ++){
        if(n % i == 0)
            process.stdout.write(i.toString()+ ' ')
    }
}

printFactors(15)