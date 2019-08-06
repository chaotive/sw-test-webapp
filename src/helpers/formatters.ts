export const firstCapitalLetter =
  (text: string): string => text.charAt(0).toUpperCase() + text.slice(1)

export const zeroAsNone = (value: string): string => value === '0' ? 'None' : value

export const scaleToPercentaje =
  (rawValue: string, min: number, max: number): number => parseFloat(rawValue) / (max - min)
