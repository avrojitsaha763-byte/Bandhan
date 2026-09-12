import assert from 'node:assert/strict'
import { validateBookingRequest } from '../lib/booking/validation.js'
import { canAccessRoleArea, isRole } from '../lib/auth/roles.js'

const cases = [
  ['accepts a future booking that ends after it starts', () => assert.deepEqual(validateBookingRequest({ providerId: 'provider-id', serviceId: 'service-id', startsAt: '2030-05-20T10:00:00.000Z', endsAt: '2030-05-20T11:00:00.000Z' }, new Date('2030-05-01T00:00:00.000Z')), { ok: true })],
  ['rejects a request with an end time before its start', () => assert.deepEqual(validateBookingRequest({ providerId: 'provider-id', serviceId: 'service-id', startsAt: '2030-05-20T11:00:00.000Z', endsAt: '2030-05-20T10:00:00.000Z' }, new Date('2030-05-01T00:00:00.000Z')), { ok: false, error: 'End time must be after start time.' })],
  ['rejects a request made for a past time', () => assert.deepEqual(validateBookingRequest({ providerId: 'provider-id', serviceId: 'service-id', startsAt: '2030-04-20T10:00:00.000Z', endsAt: '2030-04-20T11:00:00.000Z' }, new Date('2030-05-01T00:00:00.000Z')), { ok: false, error: 'Bookings must be scheduled in the future.' })],
  ['permits providers in the provider area', () => assert.equal(canAccessRoleArea('provider', 'provider'), true)],
  ['does not permit customers in the provider area', () => assert.equal(canAccessRoleArea('customer', 'provider'), false)],
  ['only recognizes the roles owned by the product', () => { assert.equal(isRole('admin'), true); assert.equal(isRole('superuser'), false) }],
]

for (const [name, run] of cases) {
  run()
  console.log(`✓ ${name}`)
}
console.log(`\n${cases.length}/${cases.length} focused tests passed`)
