let myDate = new Date()

// console.log(myDate);
 // console.log(myDate.toDateString());
 // console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());


let date = new Date()

// console.log(date.getMonth())
// console.log(date.getFullYear())
// console.log(date.getDay())
date.toLocaleDateString('default',{
    weekday: "long",
    
})
