//ES6 object shortand

const name = 'Harsh Gupta'
const age = 20

const data = {
    name,
    age,
    location: 'New Delhi'
}

console.log(data)


//Object Destructing

const product ={
    label: "red Notebook",
    price: 100,
    stock: 15,
    //rating: 4.2
}

const {label: productlabel, stock,rating=5} = product

console.log(productlabel)
console.log(stock)
console.log(rating)


const transaction = (type,{label,stock})=>{
    console.log(type,'Label =',label, 'Stock =',stock)
}

transaction('Order',product)