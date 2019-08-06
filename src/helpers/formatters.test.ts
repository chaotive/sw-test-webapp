import {scaleToPercentaje} from './formatters'

describe('scaleToPercentaje', () => {
  it('calculates regular cases', () => {
    expect(scaleToPercentaje('3', 0, 5)).toBe(0.6)
  })
  it('calculates edge cases', () => {
    expect(scaleToPercentaje('0', 0, 5)).toBe(0)
    expect(scaleToPercentaje('5', 0, 5)).toBe(1)
  })
})
