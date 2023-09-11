import { User } from '../models/User'
import { Attr } from '../models/UserGroup'

export const canAccess = ({ groups }: User, attr: Attr, orgId: number) => {
  return groups.some(group => {
    return (
      group.organization.id === orgId &&
      group.permissions.some(permission => {
        return permission.attrs.includes(attr)
      })
    )
  })
}
