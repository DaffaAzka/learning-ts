// function createString(s: string): string {
//     return s
// }

// function createNumber(n: number): number {
//     return n
// }

function genericFunction<T>(arg: T): T {
    return arg
}

const someString = genericFunction<string>("dest")
const someNumber = genericFunction<number>(5)

interface GenericInterface<T> {
    value: T
    getValue: () => T;
}

const genericString: GenericInterface<string>  = {
    value: 'Hello world',
    getValue() {
        return this.value
    }
}

async function someFunc(): Promise<string> {
    return 'Hello World'
}

const result = someFunc()

// Task

export function generateArray<T>(length: number, value: T): Array<T> {
    let result: Array<T>;
    result = Array(length).fill(value)
    return result
}

function pair<T, U>(param1:T, param2: U): [T, U] {
    return [param1, param2]
}

let r = pair<string, number>("Dest", 16)

function processValue<T extends string | number>(v: T): T {
    return v
}

// Complex case

type Car = {
    brand: string,
    model: string
}

const car: Car = {
    brand: 'ford',
    model: 'X829'
}

type Product = {
    name: string,
    price: number
}

const product: Product = {
    name: "Pen",
    price: 1999
}

type Student = {
    name: string,
    age: number
}

const student: Student = {
    name: "Dest",
    age: 18
}

function getName<T extends Product | Student>(params:T): string {
    return params.name 
}