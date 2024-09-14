const url = "https://go-wash-api.onrender.com/api/user"; 
async function cadastroUsuario(){   //função assíncrona: permite executar tarefas que podem demorar
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let api = await fetch(url,{ //await: "esperar" a conclusão de uma operação assíncrona
        method:"POST",  // método indica que é uma requisição para criar um novo recurso (no caso, um usuário)
        body:JSON.stringify({   //corpo da requisição, que é um objeto JSON contendo:
            "name":name,
            "email":email,
            "user_type_id":1,
            "password": "123456",
            "cpf_cnpj": "00188338020",
            "terms": 1,
            "birthday":"2000-10-12"    
        }),
        headers:{   //cabeçalhos de informações adicionais na requisição, que indicam o tipo de dado em formato JSON
            'Content-Type':'application/json'
        }
    });

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        return
    }
    let respostaErro = await api.json();    
        console.log(respostaErro.data.errors.cpf_cnpj) 
    //o código tenta pegar a resposta de erro, acessa o campo errors.cpf_cnpj no objeto retornado pela API e exibe esse erro no console
}