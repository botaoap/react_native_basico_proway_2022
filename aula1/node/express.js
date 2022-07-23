const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Bem Vindos')
})

app.get('/contacts', (req, res) => {
    var contato =[
        {
            "id":1,
            "name":"jose",
            "email":"jose@gmail.com"
        },
        {
            "id":2,
            "name":"maria",
            "email":"maria@gmail.com"
        },
        {
            "id":2,
            "name":"joao",
            "email":"joao@gmail.com"
        }
    ]
    res.send(contato)
})

app.get('/file', (req, res) => {
    var file = [
        {
            "id":"ABC123",
            "name": "Aoba"
        },
        {
            "id":"AAA111",
            "name": "FAJÇDNL"
        },
        {
            "id":"BBB222",
            "name": "UYFGKBHJNKM,"
        },
    ]
    res.send(file)
})

app.get('/try', (req, res) => {
    res.sendFile('/home/botao/Documents/GitHub/react_native_basico_proway_2022/aula1/contacts.html')
})

app.listen(8080, () => console.log('Rodando na porta:8080'))