 const mySym = Symbol("key1")
 
 const Jsuser = {
    name: "minhaz",
    age: 18,
    email:"admin@gmail.com",
    "full name": "Minhajul Islam",
    [mySym] : "Mykey"
 }

//  console.log(Jsuser["name"]);
//  console.log(Jsuser["email"]);
//  console.log(Jsuser.age);
//  console.log(Jsuser["full name"]);
//  console.log(Jsuser[mySym]);

 Jsuser.email = "minhaz11@gmail.com"
Object.freeze(Jsuser)
 console.log(Jsuser);

 