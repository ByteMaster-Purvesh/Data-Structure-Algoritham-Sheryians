function calculateFinalAmount(amount) {
    // Write your logic here
    
    if( amount === 0 || amount < 0 ){
        
        return 0
    }else if( amount <= 5000 && amount > 0 ){
        
        return amount
    }else if( amount <= 7000 && amount > 5000 ){
        return (amount - (5*amount)/100)
    }else if( amount <= 9000 && amount > 7000 ){

        return (amount - (10*amount)/100)
    }else if( amount > 9000 ){        
        return (amount - (20*amount)/100)
    }
}

console.log(calculateFinalAmount(9500));