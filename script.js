var obj=[
    {
        Id:"rajaraj6",
        firstName:"Raja",
        lastName:"Nadakuditi",
        email:"rajarajj789@gmail.com",
        age:"21",
        profession:"full stack developer",
        address{
        city:"machilipatnam",
        pincode:"521001",
        state:"Andra Pradesh"
        }
        phoneNumber:"1234567890" 
    }
];
for(var i=0; i<obj.length; i++){
    console.log(`
    ${obj[i].Id}
    ${obj[i].firstName}
    ${obj[i].lastName}
    ${obj[i].email}
    ${obj[i].age}
    ${obj[i].profession}
    ${obj[i].city}
    ${obj[i].phoneNumber}
    `);
}
obj.forEach(data);{
    console.log(`
    ${data.Id}
    ${data.firstName}
    ${data.lastName}
    ${data.email}
    ${data.age}
    ${data.profession}
    ${data.city}
    ${data.phoneNumber}
    `);
}
for(var key in obj){
    console.log(`
    ${obj[key].Id}
    ${obj[key].firstName}
    ${obj[key].lastName}
    ${obj[key].email}
    ${obj[key].age}
    ${obj[key].profession}
    ${obj[key].city}
    ${obj[key].phoneNumber}
    `);
}
for(var i in obj){
    console.log(`
    ${i.Id}
    ${i.firstName}
    ${i.lastName}
    ${i.email}
    ${i.age}
    ${i.phoneNumber}
    ${i.profession}
    ${i.city}
    `);
}
