// setTimeout(()=>{
//     console.log('2 seconds are up')
// },2000)

// const names = ['Harsh','Gupta','Sparsh','Shivam']

// const shortnames = names.filter((name)=>{
//     return name.length <=5
// })

// console.log(shortnames)


// const geocode = (address,callback)=>{
//     setTimeout(()=>{
//         const data = {
//             latitude: 0,
//             longitute: 0
//         }
//         callback(data)
//     },2000)  
// }

// geocode('delhi',(data)=>{
//     console.log(data)
// })


const add = (value1, value2, callback)=>{
    setTimeout(()=>{
        callback(value1+value2)
    },2000)
}


add(1,4,(sum)=>{
    console.log(sum)
})