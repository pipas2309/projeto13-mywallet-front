//Função que verifica se há local storage do usuário, para fazer persistencia de login, 
//e retorna um objeto com os dados, caso positivo.
//Função também cria um local storage caso seja a primeira interação.
//Caso não haja usuário retorna vazio e a função seja chamada, retorna vazio.
export default function local(newLocal, newUser) {
    if(newLocal) {
        const serial = JSON.stringify(newUser);
        localStorage.setItem("user",serial);
        return;
    }
    const userS = localStorage.getItem("user");
    if(userS) {
        const user = JSON.parse(userS);
        return user;
    }
    return null;
}