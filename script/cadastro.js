const url = "https://go-wash-api.onrender.com/api/user"; 

async function cadastroUsuario(){   //função assíncrona: permite executar tarefas que podem demorar
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let cpf_cnpj = document.getElementById('cpf_cnpj').value
    let birthday = document.getElementById('birthday').value

    if (!document.getElementById('terms').checked) {
        alert("Você precisa aceitar os termos para prosseguir.");
        return;
    }

    let api = await fetch(url,{ //await: "esperar" a conclusão de uma operação assíncrona
        method: "POST", // metodo que indica que é um requisição para criar um novo recurso(no caso, um usuário)
        body: JSON.stringify( 

            { //corpo da requisição, que é um objeto JSON contendo:

                "name":name,
                "email":email,
                "user_type_id":1,
                "password": password,
                "cpf_cnpj": cpf_cnpj,
                "terms": 1,
                "birthday":birthday
                           

            }
        ),
        headers:{// cabeçalhos de informações adicionais na requisição, que indicam o tipo de dado em formato JSON
            'Content-Type': 'application/json'
        }
    })

    

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        alert("Cadastro realizado com sucesso!");

        return

    }

    let respostaErro = await api.json();
    console.log(respostaErro.data.errors.cpf_cnpj[0]);

}
