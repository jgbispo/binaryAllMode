export function complementBinaryForOne(binary) {
  let newBinary = binary.split("")
  let b = binary.split("")
  let string = ""

  b.map((item, index) => {
    if (item == 1) {
      newBinary[index] = 0
    } else {
      newBinary[index] = 1
    }
  })

  newBinary.map((item) => {
    string += item.toString()
  })

  return string
}

export function complementBinaryForTwo(binary) {
  let arrayBinary = binary.split("")
  let twoBinary = arrayBinary
  let k, string = ''

  for (k = arrayBinary.length - 1; k >= 0; k--) {
    if (arrayBinary[k] == '1') {
      twoBinary[k] = '0'
    } else {
      twoBinary[k] = '1'
      break
    }
  }

  twoBinary.map(item => {
    string += item.toString()
  })

  if (k == '-1') {
    string = '1' + string
  }

  return string
}
