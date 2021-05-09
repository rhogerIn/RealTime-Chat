/* O que é typescript?

TypeScript permite a tipagem dos objetos em JS.

*/
/*
// Examplo JS 
function cadastrarUsuário(id, nome, email){
    console.log(id, nome, email);
}
class CadastrarAdministrador {
    
    cadastro(){
        cadastrarUsuário("Rhoger123", "Warden", "Rhoger@gmail.com");
    }
}
class CadastrarVendedor{
    cadastro(){
        cadastrarUsuário(123, "warden", "test@hotmail");
    }
}

// Exemplo TypeScript

// Permite criação de interface, que é semelhante a classes em P.O.O.
interface UserData {
    id: string, nome: string, email:string;
}

function cadastrarUsuaroTS(id: string, nome: string, email:string){
    console.log(id, nome, email);
}
class CadastrarAdmTypeScript{
    cadastro(): void{
        cadastrarUsuaroTS("123", "warden", "test@hotmail"); //Perceba que ficou red devido na function cadastrarUsuaroTS o campo ID espera uma string;
    }
    // Com TS consigo adicionar um método sem retorno ( void ) muito conhecido em P.O.O
}
// Função cadastrarUsuaroTS refatorada com interface
function cadastrarUsuaroTSInterface( userData : UserData){
    console.log(userData.id, userData.nome, userData.email);
}


*/