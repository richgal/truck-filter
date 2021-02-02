import React from "react"
import {Input, InputText, SearchContainer} from "./styles/search"

export default function SeachComponent({children, ...restProps}) {
  return (
    <SearchContainer>
      <InputText>{children}</InputText>
      <Input {...restProps} />
    </SearchContainer>
  )
}
