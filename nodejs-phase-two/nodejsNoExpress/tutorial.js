const sum = (num1,num2)=>{
    return num1+num2;
}

const PI = 3.142;

class Animal{
    constructor(){
        console.log("The animal has been called out to the wild");
    }
}

/* individual exporttation of modules
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.Animal = Animal;
*/

//single statement object exportation

module.exports = {sum: sum, PI : PI, Animal:Animal};