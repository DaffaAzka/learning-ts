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

type user = {
    name: string,
    email: string,
    isActive: boolean
}

function editUser(user: user) {
    console.log(user.name);
}

editUser({
    name: "Dest",
    email: "azkadaiki",
    isActive: true
});

type user1 = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credit?: number
}

let myUser: user1 = {
    _id: "123",
    name: "Dest",
    email: "azkadaiki",
    isActive: true
}

type cardNumber = {
    cardNumber: string,
}


type cardDate = {
    cardDate: string,
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export {}