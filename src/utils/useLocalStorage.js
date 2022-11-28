// import { json } from "react-router-dom"

export const useLocalStorage = (key) => {
  return (
    JSON.parse(localStorage.getItem(key))
  )
}
