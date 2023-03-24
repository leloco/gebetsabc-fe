import React from "react"

type Props = {
  width: string
}

function LoadingBar(props: Props) {
  return <div className={"py-4 rounded h-4 bg-slate-200/70 animate-pulse " + props.width}></div>
}

export default LoadingBar
