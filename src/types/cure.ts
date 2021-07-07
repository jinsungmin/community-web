export type FindAllType = {
  search?: string
  sort?: string
  order?: string
  start: number
  perPage: number
};

export type CureType = {
  id: number
  name: string
  createdAt: Date
}

export type CreateType = {
  name: string
}