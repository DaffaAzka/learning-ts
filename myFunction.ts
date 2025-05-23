
function addTwo(n: number): number {
    // n.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'. 

    return n += 2;
}

function getUpper(s: string): string {
    return s.toUpperCase();
}

function signUp(username: String, email: String, isPaid: boolean) {

}

let loginUser = (email: string, password: string, isPaid: boolean = false) => {

}

// function getValue(myValue:number): boolean {
//     if (myValue > 5) {
//         return true;
//     }

//     return false;
// }

const getHello = (s: string): string => {
    return `hello ${s}`;
}

const heros = [
    "Superman",
    "Batman",
    "Wonder Woman"
]

heros.map((hero: string): string => {
    return `Hero is ${hero}`;
})

function consoleError(msg:string): void {
    console.log(msg);
}

function handleError(err: string): never {
    throw new Error(err);
}

addTwo(5);
getUpper("hello");
signUp("Daffa Azka", "azka@gmail.com", true);
loginUser("Dest", "deltaka@gmail.com");

export {}