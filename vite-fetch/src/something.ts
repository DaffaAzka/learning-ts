
export interface Tour {
    id: string
    name: string
    info: string
    image: string
    price: string
    // something: boolean
}

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