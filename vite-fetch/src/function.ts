// import { Tour } from './something';

// export interface Tour {
//     id: string
//     name: string
//     info: string
//     image: string
//     price: string
//     // something: boolean
// }

// export async function fetchData(url:string): Promise<Tour[]> {
//     try {
//         const response = await fetch(url)
//         if (response.ok) {
//             let tours: Tour[]
//             const data = await response.json()
//             tours = data
//             return tours
//         } else {
//             throw new Error(`status code ${response.status}`)
//         }
//     } catch (error) {
//         return []
//     }
// }

import {z} from 'zod'

const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string(),
})

export type Tour = z.infer<typeof tourSchema>

export async function fetchData(url:string): Promise<Tour[]> {
    try {
        const response = await fetch(url)
        if (response.ok) {
            let tours: Tour[]
            const data = await response.json()
            tours = data
            return tours
        } else {
            throw new Error(`status code ${response.status}`)
        }
    } catch (error) {
        return []
    }
}
