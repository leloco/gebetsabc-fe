import React from "react"
import SelectedCategory from "./SelectedCategory"
type Props = {}

function SelectedCategoryContainer({}: Props) {
  return (
    <div className="flex w-max h-auto gap-2">
      <SelectedCategory name="Glaube" />
      <SelectedCategory name="Finanzen" />
      <SelectedCategory name="Landleben" />
    </div>
  )
}

export default SelectedCategoryContainer
