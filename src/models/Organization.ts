import { User } from './User'

export interface Organization {
  id: number
  name: string
  users: User[]
  createdAt: string
  updatedAt: string
}
