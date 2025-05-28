
interface User {
    readonly dbId:number;
    email: string;
    userId: number;
    googleId?: string; // Optional property

    // startTrail: () => string;
    startTrail(): string;
    getCoupon(name: string): number;
}

const dest:User = { 
    dbId: 22,
    email: "dest@gmail.com",
    userId: 1,

    // Two ways to define a method
    startTrail: () => {
        return "Trail started";
    },

    getCoupon(name: string) {
        return 10;
    },
}


export {}