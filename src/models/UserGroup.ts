import { Organization } from './Organization'
import { User } from './User'

export interface UserGroup {
  id: number
  name: string
  description?: string
  permissions: Permission[]
  organization: Organization
  parent?: User | UserGroup
  users: User[] | UserGroup[]
  createdAt: string
  updatedAt: string
}

export interface Role {
  id: number
  name: string
  description?: string
  attrs: Attrs[]
  createdAt: string
  updatedAt: string
}

export type Permission = {
  role: Role
  attrs: Attr[]
}

export type Attrs = typeof Attrs

export const Attrs = {
  User: {
    Create: 'user:create',
    Update: 'user:update',
    Delete: 'user:delete'
  },
  Organization: {
    Create: 'organization:create',
    Update: 'organization:update',
    Delete: 'organization:delete'
  },
  OrganizationGroup: {
    Create: 'organization:group:create',
    Update: 'organization:group:update',
    Delete: 'organization:group:delete'
  },
  OrganizationUser: {
    Create: 'organization:user:create',
    Update: 'organization:user:update',
    Delete: 'organization:user:delete'
  }
} as const

export type Attr = Partial<Attrs[keyof typeof Attrs]>
