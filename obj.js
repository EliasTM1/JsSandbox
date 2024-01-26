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
