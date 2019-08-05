export interface IPaginable {
  goBack: () => void
  goForward: () => void
  state: {
    previousPage?: string
    nextPage?: string
  }
}
