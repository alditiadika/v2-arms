export const checkValidURL:(s:string) => boolean = url => {
  try {
    new URL(url)
    return true
  } catch (_) {
    return false
  }
}