/* in the time node js , there are three functions
 setImmediate()
 setInterval()
 setTimeout()

 and there clear functions
 clearImmediate(immediateObject)
 clearInterval(intervalObject)
 clearTimeout(timeoutObject)*/
 console.log("setTimeout: a result will be displayed after 3 seconds");
 setTimeout(()=>{
 	console.log("the three 3 seconds have been completed!");
 },3000);



 console.log("setInterval: 1 second set, i will display numbers from 1 to 5 each second and then terminate");
 var i = 1;
 var settimeinterval = setInterval(()=>{
 	if (i>=5) {
 		clearInterval(settimeinterval);
 	}
 	console.log(i+" ");
 	i++;
 },1000);