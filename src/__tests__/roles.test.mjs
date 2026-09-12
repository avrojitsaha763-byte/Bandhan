import assert from 'node:assert/strict'
import test from 'node:test'
import { canAccessRoleArea, isRole } from '../lib/auth/roles.js'

test('permits providers in the provider area', () => {
  assert.equal(canAccessRoleArea('provider', 'provider'), true)
})

test('does not permit customers in the provider area', () => {
  assert.equal(canAccessRoleArea('customer', 'provider'), false)
})

test('only recognizes the roles owned by the product', () => {
  assert.equal(isRole('admin'), true)
  assert.equal(isRole('superuser'), false)
})
