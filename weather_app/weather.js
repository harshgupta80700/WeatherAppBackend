const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=9d0967b05e6048f6b7b122823202808&q=London'

request({url: url},(error,response)=>{
    console.log(response)
})