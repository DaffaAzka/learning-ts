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

export {}