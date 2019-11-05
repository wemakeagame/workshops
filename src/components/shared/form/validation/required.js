export default function requiredValidation(value) {
  if (value && value.length) {
    return { valid: true };
  }
  return { valid: false, msg: "This field is required" };
}
