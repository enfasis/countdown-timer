const existsWindow = () => typeof window !== "undefined"

function getLocalStorageItem(key) {
  if (existsWindow()) {
    let value = window.localStorage.getItem(key)
    if (value) return JSON.parse(value)
    return value
  }
  return null
}

function setLocalStorageItem(key, value) {
  if (existsWindow()) window.localStorage.setItem(key, JSON.stringify(value))
}

export { getLocalStorageItem, setLocalStorageItem }
