import assert from 'node:assert/strict'
import test from 'node:test'
import { validateBookingRequest } from '../lib/booking/validation.js'

test('accepts a future booking that ends after it starts', () => {
  assert.deepEqual(validateBookingRequest({
    providerId: 'provider-id', serviceId: 'service-id',
    startsAt: '2030-05-20T10:00:00.000Z', endsAt: '2030-05-20T11:00:00.000Z',
  }, new Date('2030-05-01T00:00:00.000Z')), { ok: true })
})

test('rejects a request with an end time before its start', () => {
  assert.deepEqual(validateBookingRequest({
    providerId: 'provider-id', serviceId: 'service-id',
    startsAt: '2030-05-20T11:00:00.000Z', endsAt: '2030-05-20T10:00:00.000Z',
  }, new Date('2030-05-01T00:00:00.000Z')), { ok: false, error: 'End time must be after start time.' })
})

test('rejects a request made for a past time', () => {
  assert.deepEqual(validateBookingRequest({
    providerId: 'provider-id', serviceId: 'service-id',
    startsAt: '2030-04-20T10:00:00.000Z', endsAt: '2030-04-20T11:00:00.000Z',
  }, new Date('2030-05-01T00:00:00.000Z')), { ok: false, error: 'Bookings must be scheduled in the future.' })
})
