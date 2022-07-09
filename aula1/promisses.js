let register = new Promise(function(success, error){ 
    let x = 0
    if (x == 0) {
        success('Cadastro efetuado com sucesso')
    } else {
        error('Aconteceu um erro')
    }
})

register.then(data => console.log(data))
        .catch(error => console.log(error))