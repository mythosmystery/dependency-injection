import { UserGroup } from './UserGroup'

export interface User {
  id: number
  name: string
  email: string
  groups: UserGroup[]
  createdAt: string
  updatedAt: string
  organization: number
}
