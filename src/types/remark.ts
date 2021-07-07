export type FindAllType = {
  search?: string
  sort?: string
  order?: string
  start: number
  perPage: number
  requestId: number
  expertUserId?: number | null
  visit?: string
  expertMajor?: string
};

export type RemarkType = {
  id: number
  name?: string
  expert: {
    id: number
    name: string
    hospitalName: string
    hospitalAddress: string
    hospitalTel: string
    license: string
    faxNumber: string
  }
  requestId: number
  patientId: number
  diagnosisList: Array<{id?: number; code?: string; name?: string}>
  cures: Array<{id?: number; name: string}>
  memos: Array<{id: number; content: string; imageId: number}>
  visit: string
  expertMajor: string
  content: string
  createdAt: Date
}

export type CreateType = {
  expertUserId: number
  requestId: number
  patientId: number
  diagnosisList: Array<{id?: number; name: string}>
  cures: Array<{id?: number; name: string}>
  memos: Array<{imageId: number; content: string}>
  visit: string
  expertMajor: string
  content: string
  createdAt?: Date
}

export type UpdateType = {
  id: number
  content?: string
  expertUserId: number
  requestId: number
  patientId: number
  diagnosisList?: {data: Array<{id?: number; name: string}>; changed: boolean}
  cures?: {data: Array<{id?: number; name: string}>; changed: boolean}
  visit?: string
  expertMajor?: string
}