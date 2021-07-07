function f(x){
    console.log(x);
}

setTimeout(()=>{
    x = "Hello delayed";
}, 3000);

setTimeout(()=>{
    f(x);
}, 2000);

console.log("Oi");