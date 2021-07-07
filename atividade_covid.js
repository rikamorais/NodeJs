// Um hospital está superlotado e precisa fazer uma triagem dos pacientes. Para separar os possíveis
// pacientes relacionados ao COVID, o hospital faz uma checagem de temperatura.
// Considerando que a temperatura febril é a partir de 37.5ºC e que o termômetro não é instantâneo,
// utilize o node para simular a triagem:

const chalk = require("chalk");

// Utilize uma promessa que:
// 1) Executa a chamada da função fornecida (temperaturaPaciente) com um delay de 3 segundos
// 2) Caso a temperatura não seja febril, rejeita a promessa com: "Paciente não febril"
// 3) Caso a temperatura seja febril, resolve a promessa com "Paciente febril"
// 4) Trata o caso de sucesso (then) exibindo: `[ALERTA]: ${msgSucesso}` na cor vermelha
// 5) Trata o caso de falha (catch) exibindo: `[INFO]: ${msgFalha}` na cor verde

let temperatura = (Math.random() * (41 - 35) + 35).toFixed(2);
const msgSucesso = `Paciente Febril`;
const msgFalha = `Paciente não febril`;

function temperaturaPaciente(temperatura){
    const promessa = new Promise(function (resolve, reject){
        setTimeout(()=>{
            if(temperatura>37.5){
                resolve("Paciente febril");
            }
            else{
                reject("Paciente não febril")
            }
        }, 3000);

    });
    return promessa;
}

let temp = temperaturaPaciente(temperatura);

temp.then((resolve)=>{
    console.log(chalk.red(`${temperatura} [ALERTA]: ${msgSucesso}`));
}).catch((reject)=>{
    console.log(chalk.green(`${temperatura} [INFO]: ${msgFalha}`));

});
// console.log("oi")