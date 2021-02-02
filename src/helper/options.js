import {getStartDate, getEndDate} from "./data-init"

export const options = {
  width: "100%",
  stack: false,
  orientation: "top",
  type: "range",
  showTooltips: true,
  start: getStartDate(),
  end: getEndDate(),
  zoomKey: "ctrlKey",
  loadingScreenTemplate: () => {
    return "<h1>Loading...</h1>"
  }
}
