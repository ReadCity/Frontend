export default function debounce (cb: Function, delay = 1000) {
  let timer: NodeJS.Timeout
  return (...args: unknown[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}
