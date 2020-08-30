const express = require('express')

console.log(__dirname)
console.log(__filename)

const app = express()

app.get('',(req , res)=>{    
    res.send('<h1>Hello Express!</h1>')
})

app.get('/help',(req,res)=>{
    res.send([
        {
            name: 'Harsh Gupta',
            tech: 'Backend and Flutter developer',
            age: 20
        },
        {
            name: 'Harsh Gupta',
            tech: 'Backend and Flutter developer',
            age: 20
        }
    ])
})

app.get('/about',(req,res)=>{
    res.send({
        name: 'Harsh Gupta',
        tech: 'Backend and Flutter developer',
        age: 20
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'There is sunny day out there',
        location: 'This is located in India'
    })
})

app.listen(3000,()=>{
    console.log('Server is on port 3000')
})