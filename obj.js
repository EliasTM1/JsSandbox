let newObj = {}

class ComplexThing {

    constructor() {
        this.thing  = {}
    }

     get spit() {
        console.log(this.thing)
    }
     set tingNewProp(value) {
        this.thing[value] = value
    }
     get spit() {
        console.log(this.thing)
    }

}

let anotherComplexThing = new ComplexThing()
anotherComplexThing.spit
anotherComplexThing.tingNewProp = "MONO"
anotherComplexThing.tingNewProp = "roca"
anotherComplexThing.tingNewProp = "perro"
console.log(anotherComplexThing)



let dude = {
    name : "Elias",
    age : 250, 
    2515: true
}
console.log(dude)
console.log(dude)
delete dude[2515]
if(!dude[2515]){
    console.log("first")
}
else {
    console.log("first")
}