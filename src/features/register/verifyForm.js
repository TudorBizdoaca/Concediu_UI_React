export function verifyForm(state) {
  if (
    state.isValidNume &&
    state.isValidPrenume &&
    state.isValidCnp &&
    state.isValidDataNastere &&
    state.isValidDataAngajare &&
    state.isValidSerie &&
    state.isValidNr &&
    state.isValidEmail &&
    state.isValidPass &&
    state.isValidPhoneNo
  ) {
    return true
  } else {
    return false
  }
}
