const user = {
    name: "Dest",
    email: "azkadaiki",
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {
    
}

createUser({name: "Dest", isPaid: true});

function createCourse(): {name: string, price: number} {
    return {name: "ReactJS", price: 399}
}

// Bad syntax
let bad = {
    name: "DeltaGrimn",
    email: "az@gmail.com",
    isActive: true,
    isPaid: true,
    course: "ReactJS"
}

// createUser(bad);

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function editUser(user: User) {
    console.log(user.name);
}

editUser({
    name: "Dest",
    email: "azkadaiki",
    isActive: true
});

type User1 = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credit?: number
}

let myUser: User1 = {
    _id: "123",
    name: "Dest",
    email: "azkadaiki",
    isActive: true
}

type CardNumber = {
    cardNumber: string,
}


type CardDate = {
    cardDate: string,
}

type cardDetails = CardNumber & CardDate & {
    cvv: number
}


export {}