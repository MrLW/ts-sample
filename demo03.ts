class Student03 {
    constructor(public firstName:string,public middleInitial:string,public lastName:string){
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName ;
    }
    fullName:string;
}

interface Person03 {
    firstName:string;
    lastName:string;
}
function greeter03(person:Person03) {
    return 'Hello,' + person.firstName + ' ' + person.lastName ;
}
let user3 = new Student03("Jane","M.",'User');
document.body.innerHTML = greeter03(user3);