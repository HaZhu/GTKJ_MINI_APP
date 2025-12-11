export function isValidMobile(phone) {
  return /^1[0-9]{10}$/.test(phone);
}