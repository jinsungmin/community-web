export type FindAllType = {
  search?: string
  sort?: string
  order?: string
  start: number
  perPage: number
  doctorUserId?: number
};

export type PatientType = {
  id: number
  name: string
  birth: string
  gender: string
  doctorUserId: number
  diseases: Array<{diseaseId: number | null; diseaseName: string}>
  details: Array<{content: string; type: string}>
  createdAt?: Date
}

export type CreateType = {
  name: string
  birth: string
  gender: string
  doctorUserId: number
  diseases: Array<{diseaseId: number | null; diseaseName: string}>
  details: Array<{content: string; type: string}>
  createdAt?: Date
}

export type UpdateType = {
  id: number
  name: string
  birth: string
  gender: string
  diseases: {data: Array<{diseaseId?: number; diseaseName: string}>; changed: boolean}
  details: {data: Array<{content: string; type: string}>; changed: boolean}
}

export type DeleteType = {
  id: number
}