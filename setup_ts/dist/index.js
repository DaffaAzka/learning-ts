"use strict";
console.log('This is the entry point of the TypeScript setup.');
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email,
            this.name = name;
    }
}
const dest = new User("azkadaiki@gmail.com", "Dest");
dest.city = "Jakarta";
// export {}
