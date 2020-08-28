const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=9d0967b05e6048f6b7b122823202808&q=India'

request({url: url,json: true},(error,response)=>{
    //const data = JSON.parse(response.body)
    //console.log(response.body.location)
    console.log('The name '+ response.body.location.name+ ' and the country is '+ response.body.location.country)
    //console.log(data.current)
    
    //console.log(response)
})