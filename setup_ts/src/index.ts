
console.log('This is the entry point of the TypeScript setup.');

class User {

    // let email, name;

    email: string;
    name: string;
    city: string = "";

    constructor(email: string, name: string) {
        this.email = email,
        this.name = name
    }

}

const dest = new User("azkadaiki@gmail.com", "Dest")
dest.city = "Jakarta"

// export {}