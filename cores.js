// Cores são um recurso utilizado por programas para definir a importância de uma saída/log
// Ex.:
// Verde: sucesso
// Amarelo: aviso/alerta
// Vermelho: Erro grave/fatal

// Podemos utilizar diferentes códigos de cores em strings para modificar a aparência da saída do terminal.

// Códigos de cores:

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"

console.log("\x1b[33m"+"Hello World");
console.log("\x1b[31m"+"Hello World");
console.log("\x1b[32m"+"Hello World");
console.log("\x1b[34m"+"Hello World");