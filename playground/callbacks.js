setTimeout(()=>{
    console.log('2 seconds are up')
},2000)

const names = ['Harsh','Gupta','Sparsh','Shivam']

const shortnames = names.filter((name)=>{
    return name.length <=5
})

console.log(shortnames)


const geocode = (address,callback)=>{
    setTimeout(()=>{
        const data = {
            latitude: 0,
            longitute: 0
        }
        callback(data)
    },2000)  
}

geocode('delhi',(data)=>{
    console.log(data)
})