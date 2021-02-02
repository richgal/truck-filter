import {useState, useEffect} from "react"
import {initialItems, initialGroups} from "../helper/data-init"

export default function useSearch() {
  const [items, setItems] = useState([])
  const [groups, setGroups] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    setItems(initialItems)
    setGroups(initialGroups)
  }, [])

  useEffect(() => {
    let filteredTruck = []
    let filteredItems = initialItems.filter((item) => {
      return (
        item.content.includes(search) ||
        item.group.includes(search.toUpperCase())
      )
    })

    filteredItems.forEach((element) => {
      if (!filteredTruck.includes(element.group))
        filteredTruck.push(element.group)
    })

    let filteredGroup = initialGroups.filter((group) => {
      return filteredTruck.includes(group.content)
    })

    setItems(filteredItems)

    filteredGroup.length === 0 ? setGroups([]) : setGroups(filteredGroup)
  }, [search])

  function handleChange(event) {
    const {value} = event.target
    setSearch(() => value)
  }

  return {items, groups, search, handleChange}
}