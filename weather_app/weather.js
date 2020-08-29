const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=9d0967b05e6048f6b7b122823202808&q=37.8267,37.8267'

request({url: url,json: true},(error,response)=>{
    
    if (error) {
        console.log('Unable to connect to weather!')
    }else if(response.body.error){
        console.log(response.body.error.message)
    }else {
        console.log('The name '+ response.body.location.name+ ' and the country is '+ response.body.location.country)
    }




    //const data = JSON.parse(response.body)
    //console.log(response.body)
    //console.log('The name '+ response.body.location.name+ ' and the country is '+ response.body.location.country)
    //console.log(data.current)
    
    //console.log(response)
})