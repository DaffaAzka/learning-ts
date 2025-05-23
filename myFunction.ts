
function addTwo(n: number) {
    // n.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'number'. 

    return n += 2;
}

function getUpper(s: string) {
    return s.toUpperCase();
}

function signUp(username: String, email: String, isPaid: boolean) {

}

let loginUser = (email: string, password: string, isPaid: boolean = false) => {

}

addTwo(5);
getUpper("hello");
signUp("Daffa Azka", "azka@gmail.com", true);
loginUser("Dest", "deltaka@gmail.com");

export {}