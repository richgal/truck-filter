import React from "react"
import Timeline from "react-visjs-timeline"
import {NoTruck} from "./styles/timeline"

export default function TimelineComponent({...restProps}) {
  return <Timeline {...restProps} />
}

TimelineComponent.NoTruck = function TimelineComponentNoTruck({
  children,
  ...restProps
}) {
  return <NoTruck {...restProps}>{children}</NoTruck>
}
