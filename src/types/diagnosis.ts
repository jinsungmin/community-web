export type FindAllType = {
  search?: string
  sort?: string
  order?: string
  start: number
  perPage: number
};

export type DiagnosisType = {
  id: number
  name: string
  code: string
  createdAt: Date
}

export type CreateType = {
  name: string
  code: string
}