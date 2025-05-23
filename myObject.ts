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
    isPaid: true,
    course: "ReactJS"
}

createUser(bad);

export {}