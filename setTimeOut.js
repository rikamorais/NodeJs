function f(x){
    console.log(x);
}

let x = "Delayed"

setTimeout(() =>{
    f(x);
}, 3000);