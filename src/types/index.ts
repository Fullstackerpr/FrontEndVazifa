export interface IProduct {
    id: number
    title: string
    price: number
    thumbnail: string
    description: string
    discountPercentage?: number
}

export type ICartProduct = IProduct & {
    amount: number
}