import { PatientType } from "./patient";
import { RemarkType } from "./remark";

export type FindAllType = {
  search?: string
  term?: string
  sort?: string
  order?: string
  start: number
  perPage: number
  doctorUserId?: number
  expertUserId?: number
  startDate?: string
  endDate?: string
  startAge?: string
  endAge?: string
  gender?: string
  status?: Array<string>
};

export type RequestType = {
  id: number
  content: string
  status: string
  patientId: string
  doctorUserId: number
  expertUserId?: number
  symptoms: Array<{content: string}>
  images: Array<{id: number; url: string}>
  patient: PatientType
  remarks?: Array<RemarkType>
  createdAt: Date
  updatedAt: Date
}

export type CreateType = {
  content: string
  patientId: number
  status: string
  doctorUserId: number
  code: string
  symptoms: Array<{id?: number; content: string}>
  images: Array<{url: string}>
}

export type UpdateType = {
  content?: string
  doctorUserId?: number
  patientId?: number
  code?: string
  status?: string
  images?: {data: Array<{url: string}>; changed: boolean}
  symptoms?: {data: Array<{content: string}>; changed: boolean}
  updatedAt?: Date
}