
console.log('This is the entry point of the TypeScript setup.');

class User {

    // let email, name;

    // public email: string;
    // private name: string;

    readonly city: string = "Jakarta";
    private _courseCount = 1;

    constructor(
        public email: string, 
        public name: string,
        // private userId: number
    ) {
        this.email = email,
        this.name = name
    }

    get getAppleEmail(): string {
        return `apple.{$this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(s: number) {
        if (s <= 1) {
            throw new Error("course count should not be 1 or below 1")
        }

        this._courseCount = s
    }

}

const dest = new User("azkadaiki@gmail.com", "Dest")
// dest.city = "Jakarta"

// export {}