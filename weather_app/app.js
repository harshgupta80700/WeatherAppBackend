// console.log('Starting')

// setTimeout(()=>{
//     console.log('two seconds timer')
// },2000)

// setTimeout(()=>{
//     console.log('zero seconds timer')
// },0)


// console.log('Stopping')

const getLatiandLong = require('./utils/getLandL')
const getweatherinfo = require('./utils/weather')

const address = process.argv[2]
console.log(address)

getLatiandLong(address,(error, data)=>{
    if(!address){
        return console.log('parameter is required')
    }else if(error){
        return console.log(error)
    }    
    getweatherinfo(data.latitude,data.longitude,(error,getweatherdata)=>{
       if(error){
           return console.log(error)
       }
       console.log('Name',getweatherdata.name)
       console.log('Region',getweatherdata.region)
       console.log('Country',getweatherdata.country)
       console.log('Temp in F',getweatherdata.tempinf)
       console.log('Temp in C',getweatherdata.tempinc)
    })

})

