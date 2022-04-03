const app=require("./index");

console.log("server");
const connect=require("./configs/db");
console.log("server1");

app.listen(4500, async()=>{

try{
    await connect();
}catch(err){
    console.log(err);
}
    console.log("Listening on Ports 4500");
});