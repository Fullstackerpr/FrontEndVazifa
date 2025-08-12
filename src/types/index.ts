export interface IRecipes {
  id: number,
  name: string,
  rating: string,
  tags: string,
  cuisine: string,
  image: string,
  instructions: string
}

export interface IResponse {
  recipes: any[],
  limit: number,
  total: number,
  skip: number
}