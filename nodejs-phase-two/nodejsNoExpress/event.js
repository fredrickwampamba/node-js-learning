const EventEmitter = require('events');
const eventEmiiter = new EventEmitter();

eventEmiiter.on("concat",(string1, string2)=>{
    console.log(string1+" "+string2);
});

eventEmiiter.emit("concat","this is fredrick","from kampala.");

class Car extends EventEmitter{

    constructor(name, module){
        super();
        this._name = name;
        this._module = module;
    }

    getname(){
        return this._name;
    }

    getmodel(){
        return this._module;
    }

    showfulldetails(){
        console.log("Car Name: "+this._name+" and the model: "+this._module);
        return "";
    }
}

let Merdeces = new Car('Mercedes Benz',"T5342");

let toyota = new Car('Toyota Corona', "CC45374");

Merdeces.on("creation",()=>{
    console.log(Merdeces.showfulldetails());
});

toyota.on("creation", ()=>{
    console.log(toyota.showfulldetails());
})

Merdeces.emit("creation");

toyota.emit("creation");