"use strict";
console.log('This is the entry point of the TypeScript setup.');
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // let email, name;
        // public email: string;
        // private name: string;
        this.city = "Jakarta";
        this._courseCount = 1;
        this.email = email,
            this.name = name;
    }
    get getAppleEmail() {
        return `apple.{$this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(s) {
        if (s <= 1) {
            throw new Error("course count should not be 1 or below 1");
        }
        this._courseCount = s;
    }
}
const dest = new User("azkadaiki@gmail.com", "Dest");
// dest.city = "Jakarta"
// export {}
