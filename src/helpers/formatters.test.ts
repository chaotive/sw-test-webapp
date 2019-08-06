import {firstCapitalLetter, scaleToPercentaje, zeroAsNone} from './formatters'

describe('firstCapitalLetter', () => {
  it('works with letters', () => {
    expect(firstCapitalLetter('a')).toBe('A')
    expect(firstCapitalLetter('B')).toBe('B')
    expect(firstCapitalLetter('cC')).toBe('CC')
    expect(firstCapitalLetter('DD')).toBe('DD')
  })
  it('passes trough non-letter characters', () => {
    expect(firstCapitalLetter('0')).toBe('0')
    expect(firstCapitalLetter('.a')).toBe('.a')
  })
})

describe('zeroAsNone', () => {
  it('translates 0 to None', () => {
    expect(zeroAsNone('0')).toBe('None')
  })
  it('passes trough non-0 characters', () => {
    expect(zeroAsNone('0.1')).toBe('0.1')
    expect(zeroAsNone('asd')).toBe('asd')
  })
})

describe('scaleToPercentaje', () => {
  it('calculates regular cases', () => {
    expect(scaleToPercentaje('3', 0, 5)).toBe(60)
  })
  it('produces only integer values', () => {
    expect(scaleToPercentaje('10', 0, 3)).toBe(333)
  })
  it('calculates edge cases', () => {
    expect(scaleToPercentaje('0', 0, 5)).toBe(0)
    expect(scaleToPercentaje('5', 0, 5)).toBe(100)
  })
})
