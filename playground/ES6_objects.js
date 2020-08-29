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
    stock: 15
}

const {label: productlabel, stock,rating} = product

console.log(productlabel)
console.log(stock)
console.log(rating)