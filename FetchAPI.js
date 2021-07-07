// Fetch funciona no node instalando npm install node-fetch

// Fetch é uma função implementada nos navegadores para realizar requisições web (pode ser uma API)
// Essa função retorna uma Promise e consequentemente consegue processar o resultado da requisição
// assincronamente.

// É uma opção mais moderna do que o XMLHttpRequest.
// Ela utiliza Promises e consequentemente evia o CALLbackHell.
// Além disso, os tratadores (de sucesso ou falha) são criados
// de forma linear, o que ajuda na manutenção do código
const fetch = require('node-fetch');

// fetch("https://randomuser.me/api/").then((response)=>{
//     console.log(response.text());
// }); // Retorna uma promise

// fetch("https://randomuser.me/api/").then((response)=>{
//     console.log(response.json());
// }); // Retorna uma promise

fetch("https://randomuser.me/api/?results=2").then((response)=>{
    response.json().then((responseData)=>{
        console.log(responseData)
    })
}); // Retorna as informações da API

// fetch("https://randomuser.me/api/").then((response)=>{
//     response.json().then(({results, info})=>{
//         console.log(results);
//         console.log(info);
//     })
// }); // Retorna as informações da API

// FETCH
// A promessa retornada é resolvida mesmo que o recurso não seja encontrado(404 ou 500).
// Devemos então verificar o atributo ok retornado pela Promise. 
// Caso o status da requisição seja 200, ok será true

// fetch('url do recurso')
// .then((response)=>{
// if(response.ok){
// return response.json() // parsing da resposta (retorna nova promise)
// }
// })
// .then((data)=>{
// //utiliza os dados (possível manipulação de DOM)
// })
// 