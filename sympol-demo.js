const name= Symbol("Person name");

const person= {
    [name] : "Negin",
    age : 34
}

person.name = "fa"

console.log(person);