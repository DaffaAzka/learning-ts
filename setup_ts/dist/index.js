"use strict";
console.log('This is the entry point of the TypeScript setup.');
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        // let email, name;
        // public email: string;
        // private name: string;
        this.city = "Jakarta";
        this.email = email,
            this.name = name;
    }
}
const dest = new User("azkadaiki@gmail.com", "Dest", 1);
// dest.city = "Jakarta"
// export {}
