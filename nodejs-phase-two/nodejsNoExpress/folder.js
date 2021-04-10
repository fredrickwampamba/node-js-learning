const fs = require("fs");

// fs.mkdir("assets/css/a/b/d/s/c/d/e/fr/e/w/s/ds/sd/sd/sds/dsd/sds/d", {recursive: true}, (err)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log("Directory has been created");
// });

// fs.mkdir("images", (err)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log("Directory has been created");
// });

// fs.rmdir("images", (err)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log("Directory has been deleted");
// });


fs.readdir("./", (err,files)=>{
    if(err)
        console.log(err);
    else
        console.log(files);
});