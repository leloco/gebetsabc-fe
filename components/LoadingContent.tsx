import { stringify } from "querystring"
import React from "react"
import LoadingBar from "./LoadingBar"

type Props = {}

function LoadingContent(props: Props) {
  return (
    <div className="flex flex-wrap justify-start items-start gap-4 p-4 w-[200px] max-w-[200px] md:w-[400px] md:max-w-[400px]">
      <LoadingBar key={1} width="w-full" />
      <LoadingBar key={2} width="w-1/3" />
      <LoadingBar key={3} width="w-2/3" />
      <LoadingBar key={4} width="w-1/2" />
    </div>
  )
}

export default LoadingContent
