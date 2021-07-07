function fPromessa(condicao){
    const promessa = new Promise((resolve, reject)=>{
        if(condicao){
            resolve('condição foi satisfeita')
        }
        else{
            reject('condição não foi satisfeita')
        }
    });

return promessa
}

let p = fPromessa(true);

p.then((resultado)=>{
    console.log(resultado);
});

p = fPromessa(false);

p.catch((resultado)=>{
    console.log(resultado);
});