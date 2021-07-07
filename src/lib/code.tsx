function generateRandomCode(digit: number): number {
  const max = 10 ** digit
  const min = 10 ** (digit - 1)
  return Math.floor(Math.random() * (max - min) + min)
}

export {
  generateRandomCode
}