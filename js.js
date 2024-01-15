function criaMulti(multiplicador){
     return  (n) => {
        return n * multiplicador
    }
}

let dup = criaMulti(2)
let trip = criaMulti(3)
let quad = criaMulti(4)

console.log(dup(4))
console.log(trip(2))
console.log(quad(6))