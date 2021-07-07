// A espera de um sinal
// A estação espacial internacional precisa manter-se em contato constante com a terra.
// No entanto, ocorre um delay de 2.5 segundos nessa comunicação.
// Além disso, existe a possibilidade dessa comunicação ser perdida.
// utilize o node para simular essa situação, utilizando:
// Uma promisse que:
// Executa uma Chamada  a função fornecida (comunicacaoPerdida)
// Caso a comunicação tenha sido perdida, rejeita a promessa com "Comunicação perdida"
// Caso a comunicação tenha sido enviada, resolve a promessa com "Ok, todos vivos na estação"
// Trata o caso de sucesso (then) exibindo: "Sucesso: ${msgSucesso}"
// Trata o caso de falha (catch) exibindo: "Falha: $msgFalha"

let msgSucesso = "Ok, todos vivos.";
let msgFalha = "Comunicação perdida.";

function comunicacaoPerdida(mensagem){
    const promessa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(mensagem){
                resolve(msgSucesso);
            }
            else{
                reject(msgFalha);
            }
        }, 2500);
    })

    return promessa;
}

let p = comunicacaoPerdida(true);

p.then((msgSucesso)=>{
    console.log(`Sucesso ${msgSucesso}`);
});

p = comunicacaoPerdida(false);

p.catch((msgFalha)=>{
    console.log(`Falha ${msgFalha}`);
});