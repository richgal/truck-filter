import React from "react"
import {Summary, Container, Text} from "./styles/summary"

export default function SummaryComponent({children}) {
  return (
    <Summary>{children}</Summary>
  )
}

SummaryComponent.Container = function SummaryComponentContainer({
  children,
  ...restProps
}) {
  return <Container {...restProps}>{children}</Container>
}

SummaryComponent.Text = function SummaryComponentText({
  children,
  ...restProps
}) {
  return <Text {...restProps}>{children}</Text>
}