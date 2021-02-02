import React from "react"
import {TimelineComponent} from "../components/"
import {SeachComponent, SummaryComponent} from "../components/"
import {options} from "../helper/options"
import useSearch from "../hooks/useSearch"

export function TimelineContainer() {
  const {items, groups, search, handleChange} = useSearch()

  const timelineTable =
    groups.length === 0 ? (
      <TimelineComponent.NoTruck>
        No trucks or orders to dislay
      </TimelineComponent.NoTruck>
    ) : (
      <TimelineComponent options={options} groups={groups} items={items} />
    )

  return (
    <div>
      
        <SummaryComponent.Container>
          <SummaryComponent>🚚: {groups.length}</SummaryComponent>
          <SummaryComponent>📦: {items.length} </SummaryComponent>
          <SummaryComponent.Text>Search for trucks or orders</SummaryComponent.Text>
          <SeachComponent
            type="text"
            name="name"
            placeholder="Quick Seach"
            value={search}
            onChange={handleChange}
          />
        </SummaryComponent.Container>
        
        
      {timelineTable}
    </div>
  )
}
