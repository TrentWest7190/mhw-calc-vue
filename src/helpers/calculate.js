export const getTotalModValue = (valueName) => (a, v) => {
  if (v[valueName]) return a + v[valueName]
  return a
}
