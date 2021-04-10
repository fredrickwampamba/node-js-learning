const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output: process.stdout});

let num1 = Math.floor((Math.random()*10) + 1);

let num2 = Math.floor((Math.random()*10) + 1);

let answer = num1+num2;

rl.question(`What is ${num1} + ${num2}?\n`, (userInput)=>{
    console.log(`You have entered ${userInput.trim()}`);

    let right = answer==userInput.trim();

    if(right){
        rl.close();
    }else{
        rl.setPrompt(`Sorry your answer ${userInput} is wrong\n`);
        rl.prompt();

        rl.on("line", ()=>{
            let right = answer==userInput.trim();

            if(right){
                rl.close();
            }else{
                rl.setPrompt("Oops, try again");
                rl.prompt();
            
            }
        })
    }

});

rl.on("close", ()=>{
    console.log("You have the correct answer!!");
});