const jsObject={
    name:"Nipun",
    age:19,
    lstlogindays:["Monday","Saturday"]
}
console.log(jsObject.age);
console.log(jsObject["lstlogindays"]);
jsObject.name="Sharma"
//Object.freeze(jsObject)
jsObject.greeting=function(){
    console.log("Hello Js user");
    
}
console.log(jsObject);
console.log(jsObject.greeting());
const obj1={1:'a',2:'b'};
const obj2={3:'a',4:'d'};
const obj3={...obj1,...obj2}//split very imp
console.log(obj3);
const arr=[
    {},
    {},
    {}//json-javascriptobjectnotation
]
arr[1].email
console.log(Object.keys(jsObject));
