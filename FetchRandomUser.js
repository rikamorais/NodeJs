// Utilizando o npm, instale o pacote node-fetch;
// Crie uma função chamada "geraUsuarios" que recebe como parâmetro o número de usuários
// que devem ser gerados.
// A função "geraUsuarios" deve fazer uma requisição ao random user API utilizando o node-fetch(importado)


let fetch = require ('node-fetch');

function geraUsuarios(num){
    fetch(`https://randomuser.me/api/?results=${num}`).then((response)=>{
    response.json().then((responseData)=>{
        console.log(responseData)
    })
});
}

let numeroUsuarios = geraUsuarios(Math.round(Math.random() * 10));

console.log(numeroUsuarios);