const path = require('path')
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname,'..'))

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')


app.use(express.static(publicDirectoryPath))

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