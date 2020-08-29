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

if(!address){
    console.log('parameter is required')
}else{
    getLatiandLong(address,(error,{latitude,longitude,location})=>{
        if(error){
            return console.log(error)
        }    
        getweatherinfo(latitude,longitude,(error,{name,region,country,tempinf,tempinc})=>{
           if(error){
               return console.log(error)
           }
           console.log('Location',location)
           console.log('Name',name)
           console.log('Region',region)
           console.log('Country',country)
           console.log('Temp in F',tempinf)
           console.log('Temp in C',tempinc)
        })
    
    })
}




