const fs = require('fs');

// fs.writeFile('example.txt',"this is an example of the message reporter", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("the file has been created");
//         fs.readFile('example.txt','utf8',(err,data)=>{
//             if(err){
//                 console.log("File reading failed");
//             }else{
//                 console.log(data);
//             }
//         })
//     }
// });

// fs.rename("example.txt", "example2.txt", (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Renaming has occured");
//     }
// });

// fs.appendFile("example2.txt", " this is the other data that is being appended", (err)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log("Data has been appended");
// });

fs.unlink("example2.txt", (err)=>{
    if(err)
        console.log(err)
    else
        console.log("Successfully deleted the file");
});