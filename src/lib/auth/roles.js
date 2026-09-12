export const PRODUCT_ROLES = ['customer', 'provider', 'admin']

export function isRole(value) {
  return typeof value === 'string' && PRODUCT_ROLES.includes(value)
}

export function canAccessRoleArea(role, area) {
  if (!isRole(role) || !isRole(area)) return false
  return role === 'admin' || role === area
}
