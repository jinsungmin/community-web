export type FindAllType = {
  search?: string
  sort?: string
  order?: string
  start: number
  perPage: number
  userId?: number
};

export type PostType = {
  id: number
  userId: number
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
}

export type CreateType = {
  userId: number
  title: string
  content: string
}

export type UpdateType = {
  title: string
  content?: string
}