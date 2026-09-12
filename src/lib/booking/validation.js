export function validateBookingRequest(request, now = new Date()) {
  if (!request.providerId || !request.serviceId || !request.startsAt || !request.endsAt) {
    return { ok: false, error: 'Provider, service, start time, and end time are required.' }
  }

  const startsAt = new Date(request.startsAt)
  const endsAt = new Date(request.endsAt)
  if (Number.isNaN(startsAt.valueOf()) || Number.isNaN(endsAt.valueOf())) {
    return { ok: false, error: 'Choose valid start and end times.' }
  }
  if (endsAt <= startsAt) return { ok: false, error: 'End time must be after start time.' }
  if (startsAt <= now) return { ok: false, error: 'Bookings must be scheduled in the future.' }
  return { ok: true }
}
