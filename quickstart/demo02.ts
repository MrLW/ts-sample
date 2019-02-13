interface Person {
    firstName:string,
    lastName:string
}
function greeter2(person:Person){
    return "hello," + person.firstName + " " + person.lastName ;
}
let user2 = {
    firstName:'Li',
    lastName:'Wen'
}
document.body.innerHTML = greeter2(user2);