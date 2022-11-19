let WINDOW = {}

if (typeof window === 'undefined') {
  WINDOW = {
    document: {},
    localStorage: {},
  }
} else {
  WINDOW = window
}

export default WINDOW
