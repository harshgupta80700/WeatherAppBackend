const request = require('request')

// const url = 'http://api.weatherapi.com/v1/current.json?key=9d0967b05e6048f6b7b122823202808&q=-154,-122'

// request({url: url,json: true},(error,response)=>{
    
//     if (error) {
//         console.log('Unable to connect to weather!')
//     }else if(response.body.error){
//         console.log(response.body.error.message)
//     }else {
//         console.log('The name '+ response.body.location.name+ ' and the country is '+ response.body.location.country)
//     }
// })

const getweatherinfo = (latitute, longitude, callback)=>{
    const url  = 'http://api.weaatherapi.com/v1/current.json?key=9d0967b05e6048f6b7b122823202808&q='+ latitute + ',' + longitude

    request({url: url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect with the get weather service!',undefined)
        }else if(response.body.error){
            callback(response.body.error.message,undefined)
        }else{
            callback(undefined,{
                name: response.body.location.name,
                region: response.body.location.region,
                country: response.body.location.country,
                tempinf: response.body.current.temp_f,
                tempinc: response.body.current.temp_c
            })
        }
    })

}

getweatherinfo(-120.52361,-120.84778,(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})