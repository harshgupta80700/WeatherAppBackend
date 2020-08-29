const request = require('request')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Delhi.json?limit=1&access_token=pk.eyJ1IjoiaGFyc2g4MDciLCJhIjoiY2tlZWE0MDR3MGVoZzJxbjdlaGhjZ2ZoMCJ9.AIL-3P7lFbQZ3iSFDLvKkw'

request({url: url,json: true},(error,response)=>{

    //console.log(error)

    //const data = JSON.parse(response.body)
    console.log(response.body.features[0].center[0])
    console.log(response.body.features[0].center[1])
    //console.log(response.body.features[0].properties.wikidata)
    //console.log('The name '+ response.body.location.name+ ' and the country is '+ response.body.location.country)
    //console.log(data.current)
    
    //console.log(response)
})