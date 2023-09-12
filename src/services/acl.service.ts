import { User } from '../models/User'
import { Attr } from '../models/UserGroup'

// Assumptions:
// - A user can only belong to one group per organization
export const canAccess = ({ groups }: User, attr: Attr, orgId: number) => {
  const group = groups.find(g => g.organization.id === orgId)

  if (!group) {
    return false
  }

  const { permission } = group

  return (
    permission.attrs?.includes(attr) || permission.role.attrs.includes(attr)
  )

  return true
}

canAccess(null as any, { Read: 'fortify:search:read' }, 1)
