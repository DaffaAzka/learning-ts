
interface User {
    readonly dbId:number;
    email: string;
    userId: number;
    googleId?: string; // Optional property

    // startTrail: () => string;
    startTrail(): string;
    getCoupon(name: string): number;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"; // Union type
}

interface User { 
    githubToken: string;
}

const dest:User = { 
    dbId: 22,
    email: "dest@gmail.com",
    userId: 1,
    githubToken: "github123",

    // Two ways to define a method
    startTrail: () => {
        return "Trail started";
    },

    getCoupon(name: string) {
        return 10;
    },
}


export {}