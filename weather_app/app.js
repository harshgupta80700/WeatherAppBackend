// console.log('Starting')

// setTimeout(()=>{
//     console.log('two seconds timer')
// },2000)

// setTimeout(()=>{
//     console.log('zero seconds timer')
// },0)


// console.log('Stopping')

const getLatiandLong = require('./utils/getLandL')
const getweatherinfo = require('./weather')

getLatiandLong('Pune',(error, data)=>{
    console.log('Error',error)
    console.log('Data', data)
})

getweatherinfo(18.52361,73.84778,(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})
