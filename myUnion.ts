let score:number | string = 33
score = "A"

type User = {
    name: string,
    age: number,
}

type Admin = {
    username: string,
    id: number,
}

let dest: User | Admin = {
    name: "Dest",
    age: 30,
}

dest = {
    username: "DestAdmin",
    id: 1,
}

// function getDatabaseId(id: number | string) {
//     console.log(`Database ID is: ${id}`);
// }

function getDatabaseId(id: number | string) {
    id.toString().toUpperCase();
}

getDatabaseId(3);
getDatabaseId("3");

// Array
const data: (number | string) [] = [1,2,3,4,5];


let seatAllotment: "aisle" | "middle" | "window";

export {}