function factorial(n) {
    let fctrl = 1
    for(let i = n; i > 0; i--) {
        fctrl = fctrl*i
    }
    return fctrl
}

console.log(factorial(15))