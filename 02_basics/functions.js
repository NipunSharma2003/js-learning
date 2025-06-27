function myfunction(){
    const name="Nipun Sharma"
    console.log("my name is "+name);
    console.log(`my name is ${name}`)
}
 console.log(myfunction());
 function price(val1,val2,...num){
    return num//rest operator
 }
 console.log(price(1,2,3,4,5,6))
  let username={//Object
    username:"hitesh",
    prices:100
  }
  function object(anyobj){
console.log(`${anyobj.username}and${anyobj.price}`);
  }
  object(username)