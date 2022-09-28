import { format } from 'date-fns'

export function extractDataNastereFromCnp(cnp) {
  var an, luna, zi
  switch (cnp.substring(0, 1)) {
    case '1':
      an = '19' + cnp.substring(1, 3)
      luna = cnp.substring(3, 5)
      zi = cnp.substring(5, 7)
      break
    case '2':
      an = '19' + cnp.substring(1, 3)
      luna = cnp.substring(3, 5)
      zi = cnp.substring(5, 7)
      break
    case '5':
      an = '20' + cnp.substring(1, 3)
      luna = cnp.substring(3, 5)
      zi = cnp.substring(5, 7)
      break
    case '6':
      an = '20' + cnp.substring(1, 3)
      luna = cnp.substring(3, 5)
      zi = cnp.substring(5, 7)
      break
  }
  return format(new Date(an, luna - 1, zi), 'MM/dd/yyyy')
}
