"use strict";
// loop 
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// for(let i: number=0;i<5;i++)
// {
//     console.log(i)
// }
// for loop
// let browsers: string[]=["chromium","firefox","webkit"]
// for (let i:number=0;i<browsers.length;i++)
// {
//     console.log(browsers[i])
// }
// for (let browser of browsers)
// {
//  console.log(browser)
// }
// //white loop
// let retries: number = 3;
// while (retries > 0) {
//   console.log("Retrying login...");
//   retries--;
// }
// //do--while loop
// let count:number=0
// do {
//     console.log("Runs at leasr once")
//     count++
// }
// while (count<1)
//break
// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     break
//   }
//   console.log(i)
// }
for (let i = 0; i < 5; i++) {
    if (i == 2) {
        continue;
    }
    console.log(i);
}
