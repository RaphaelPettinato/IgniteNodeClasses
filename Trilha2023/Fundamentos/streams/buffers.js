// representação de um espaço na memória do computador
// mais perfomático ler de forma binária - como o buffer guarda - do que uma string, que guarda muito mais informações
// criado dentro do node, justamente pela incapacidade do js não conseguir trabalhar com binários
// hoje em dia existe como, chamada typed array
// o node não usa a API do js, mas sim o buffer, que foi criado anteriormente. 
// O buffer é uma maneira mais eficiente e perfomática de escrever e ler da memória, usando binários.

const buffer = Buffer.from("Ok")

console.log(buffer)

// retorna 6f 6b, 6f representa 'o' e 6b representa 'k'.
