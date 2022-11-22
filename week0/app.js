const fs = require('fs')
const axios = require('axios')
const url = "https://jsonplaceholder.typicode.com/users"
const urlProduction = "https://jsonplaceholder.typicode.com/todos"
const urlDev = "https://jsonplaceholder.typicode.com/albums"
const typeCodeUrl = process.env.NODE_ENV === 'production' ? urlProduction : urlDev
const typeCodeFilename = process.env.NODE_ENV === 'production' ? 'todos' : 'albums'

axios({
    method: "get",
    url: url,
    responseType: "stream"
}).then(function (response) {
    response.data.pipe(fs.createWriteStream("user.json"))
})
    .catch(error => {
        console.log(error);
    })

axios({
    method: "get",
    url: typeCodeUrl,
    responseType: "stream"
}).then(function (response) {
    response.data.pipe(fs.createWriteStream(`${typeCodeFilename}.json`))
})
    .catch(error => {
        console.log(error);
    })
