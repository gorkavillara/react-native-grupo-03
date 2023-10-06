export interface RMListCharacter {
    id: number
    name: string
    image: string
    species: string
}

export interface Product {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}
