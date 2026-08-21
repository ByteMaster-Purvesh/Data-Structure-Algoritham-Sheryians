function greet(name, age) {
    // Write your logic here
    if( age >= 0 && age <= 120){
        let nameLength = name.length

        if(nameLength <= 100 ) {
            console.log("Hello "+ name + " you are " + age + " year old.")
        }
    }
}

greet('purvesh', 22)