function calculateElectricityBill(unit) {
    // Write your logic here
let amount = 0

// 600 -> 

if( unit > 400 ){

    amount = (unit - 400)*13
    unit = 400
}
if( unit > 200 && unit <= 400 ){

    amount = amount + (unit-200)*8
    unit = 200 
}
if( unit > 100 && unit <= 200){

    amount = amount + (unit-100)*6
    unit = 100
}
if( unit > 0 && unit <= 100){
    if(unit == 100){
        amount = amount + 100*4.2
    }else {
        amount = amount + (100-unit)*4.2
    }
    unit = 0
}
return amount.toFixed(1)
}

console.log(calculateElectricityBill(101))







// let unit = 101
// let amount = 0

// // 600 -> 

// if( unit > 400 ){
//     amount = (unit - 400)*13
//     unit = 400
//     console.log(" unit remainning : ", unit + " Price : ", amount)
// }
// if( unit > 200 && unit <= 400 ){
//     amount = amount + (unit-200)*8
//     unit = 200 
//     console.log(" unit remainning : ", unit + " Price : ", amount)
// }
// if( unit > 100 && unit <= 200){
//     amount = amount + (unit-100)*6
//     unit = 100
//     console.log(" unit remainning : ", unit + " Price : ", amount)
// }
// if( unit > 0 && unit <= 100){
//     if(unit == 100){
//         amount = amount + 100*4.2
//     }else {
//         amount = amount + (100-unit)*4.2
//     }
//     unit = 0
//     console.log(" unit remainning : ", unit + " Price : ", amount)
// }

// console.log(amount.toFixed(1))