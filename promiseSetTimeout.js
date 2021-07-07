function retornaPromessa(x){
    const promessa = new Promise((resolve, reject)=>{
        if(x){
            setTimeout(()=>{
                resolve ("Deu certo");
            }, 2000);
        }
        else{
            setTimeout(()=>{
                reject ("Deu errado");
            }, 500);
        }
    });
return promessa;
}

p = retornaPromessa(true);

p.then((retorno)=>{
    console.log(retorno);
}).catch((err)=>{
    console.log(err);
});
