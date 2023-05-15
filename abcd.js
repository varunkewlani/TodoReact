console.log("test!");
var x= 10
var a="ANKIT"
const y= 10
let z= 10
console.log("start")
console.log(x,y,z)
console.log(a)
console.log(`x= ${x}`)
var shake="strawberry"
if(shake=="strawberry")
{
    console.log("good")
    
}
else {
    console.log("no problem")
}

var array=["ankit","laps",10,20,true,false]

for(var i=0; i<array.length;i++)
{
    console.log(`at index : ${i} , value = ${array[i]}`)
}
const myFunction=(p1,p2)=>{
    var array=["ankit","laps",10,20,true,false]

// for(var i=0; i<array.length;i++)
// {
//     console.log(`at index : ${i} , value = ${array[i]}`)
// }
array.forEach((item,index)=>{
    if (typeof item == 'string')
    {
        console.log(`item ; ${item} , index : ${index}`)
    }
})
 return p1*p2
}
console.log(myFunction(10,20))
const fo=(p1,p2)=>p1*p2
console.log(fo(10,20))