import BigNumber from 'bignumber.js'

export const getTotalModValue = (valueName) => (a, v) => {
  if (v[valueName]) return a + v[valueName]
  return a
}

export const getTotalModValueMultiply = (valueName) => (a, v) => {
  if (v[valueName]) return new BigNumber(a).times(1 + v[valueName]).toNumber()
  return a
}
