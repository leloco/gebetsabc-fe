import React from "react"
import Close from "../public/close.svg"

type Props = {
  name: string
}

function SelectedCategory(props: Props) {
  return (
    <div className="bg-dark-beige/80 flex justify-between gap-1 items-center border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in w-max">
      <div>{props.name}</div>
      <Close className="w-[23px] h-[23px]" />
    </div>
  )
}

export default SelectedCategory
