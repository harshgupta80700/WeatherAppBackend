console.log('Client Side JavaScript is loaded into the Page!')

fetch('https://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=!').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log('Invalid address location')
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.tempinC)
        }
    })
})

const weatherForm = document.querySelector('form')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('testing')
})