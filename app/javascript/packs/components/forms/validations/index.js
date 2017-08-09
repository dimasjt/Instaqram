const EMAIL_REGEX = /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const USERNAME_REGEX = /^[a-zA-Z0-9]+$/

export const required = (value) => (
  value == null ? "Required" : undefined
)

export const email = (value) => (
  value && EMAIL_REGEX.test(value) ? undefined : "Invalid email"
)

export const username = (value) => (
  value && USERNAME_REGEX.test(value) ? undefined : "Invalid username value"
)

export const confirmation = (target) => (
  (value) => (
    value === target ? undefined : "Not match"
  )
)

export const min = (count) => (
  (value) => (
    value && value.length < count ? `Minimal ${count} characters` : undefined
  )
)
