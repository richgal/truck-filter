import {trucks, orders} from "../data.json"

export const initialItems = orders.map((item) => {
  let truckName = ""
  trucks.forEach((truck) => {
    if (truck.assignedOrderId.includes(item.id)) truckName = truck.name
  })
  return {
    start: new Date(item.from),
    end: new Date(item.to),
    content: item.id,
    title: `
    id: ${item.id}&#010, 
    from: ${item.from}&#013,
    to: ${item.to}`,
    group: truckName
  }
})

export const initialGroups = trucks.map((group) => {
  return {
    id: group.name,
    content: group.name
  }
})

export const getStartDate = () => {
  let startArr = []
  initialItems.forEach((item) => {
    startArr.push(item.start)
  })
  return Math.min(...startArr)
}

export const getEndDate = () => {
  let endArr = []
  initialItems.forEach((item) => {
    endArr.push(item.end)
  })
  return Math.max(...endArr)
}
