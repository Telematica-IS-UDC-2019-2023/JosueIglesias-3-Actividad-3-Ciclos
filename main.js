function factorial(n){
    let fac = 1
    for (let i = n; i>1; i--){
        fac = fac * i
    }
    return fac
}

function exponencial(cantidad, valor){
    let sum = 1
    if (cantidad === 1){
        return 1
    } else {
        for (let i = 1; i<cantidad; i++){
            sum += (Math.pow(valor, i)) / factorial(i) 
        }
    }
    return sum
}
function euler(cantidad){
    if (cantidad === 1){
        return 1
    } else {
        let sum = 1
        for(let i = 1; i < cantidad; i++){
            sum += 1 / factorial(i)
        }
        return sum
    }
}

console.log(exponencial(50, 5))
console.log(euler(20))

