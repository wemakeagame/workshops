export default function emailValidation(value) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)) {
    return { valid: true };
  }
  return { valid: false, msg: "This e-mail is not valid." };
}
