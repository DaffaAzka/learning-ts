
console.log('This is the entry point of the TypeScript setup.');

class User {

    // let email, name;

    // public email: string;
    // private name: string;
    private readonly city: string = "Jakarta";

    constructor(
        public email: string, 
        public name: string,
        private userId: int
    ) {
        this.email = email,
        this.name = name
    }

}

const dest = new User("azkadaiki@gmail.com", "Dest", 1)
// dest.city = "Jakarta"

// export {}