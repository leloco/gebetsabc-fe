import { stringify } from "querystring"
import React from "react"
import LoadingBar from "./LoadingBar"

type Props = {}

function LoadingContent(props: Props) {
  const widthClasses = ["w-full", "w-1/3", "w-1/2"]

  function getRandomWidth(): string {
    const random = Math.floor(Math.random() * widthClasses.length)
    return String(widthClasses[random])
  }
  return (
    <div className="flex flex-wrap justify-start items-start gap-4 p-4 w-[200px] max-w-[200px] md:w-[400px] md:max-w-[400px]">
      <LoadingBar width={getRandomWidth()} />
      <LoadingBar width={getRandomWidth()} />
      <LoadingBar width={getRandomWidth()} />
      <LoadingBar width={getRandomWidth()} />
    </div>
  )
}

export default LoadingContent
