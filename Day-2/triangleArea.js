function calculateTriangleArea(a, b, c) {
    // Write your logic here

    let sum = a+b+c
    let calSemiParmtr = sum /2

    let calAraTrngle = Math.sqrt(
        calSemiParmtr * 
            (calSemiParmtr - a) *
            (calSemiParmtr - b) * 
            (calSemiParmtr - c) 
    )

    return calAraTrngle
}

console.log(calculateTriangleArea(3, 4, 5))