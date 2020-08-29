const https =  require('http')

const url  = 'http://api.weatherapi.com/v1/current.json?key=9d0967b05e6048f6b7b122823202808&q=delhi'

const request = https.request(url,(response)=>{

    let data=''

    response.on('data',(chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end',()=>{
        console.log(JSON.parse(data))
    })

})

request.on('error',(error)=>{
    console.log(error)
})

request.end()