import React, { useState, useEffect } from "react"
import HeartOff from "../public/heart-off.svg"
import HeartOn from "../public/heart-on.svg"
import LoadingBar from "./LoadingBar"
import LoadingContent from "./LoadingContent"

type Props = {
  likes: number
  content: string
  reference: string
  font?: string
}

function Promise(props: Props) {
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(prevState => false)
    }, 10000)
  }, [])

  function clickHandler() {
    setIsLiked(prevState => !prevState)
  }
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-center items-center p-8 rounded-md border-decent-gray/70 border hover:shadow-hovered transition-all duration-300 ease-in-out w-full min-h-[300px]">
        {isLoading && <LoadingContent />}
        {!isLoading && <h2 className={`${props.font ? props.font : ""} animate-fade-in text-lg md:text-xl lg:text-2xl font-bold`}>{props.content}</h2>}
      </div>
      <div className="flex justify-between items-center">
        {isLoading && <LoadingBar width="w-[50px]" />}
        {!isLoading && (
          <div onClick={clickHandler} className={`text-[#666] flex justify-between items-center gap-2 cursor-pointer text-md py-[4px] px-[8px] rounded-md border border-decent-gray/70 hover:bg-decent-gray/30  ${isLiked ? "bg-decent-gray/30" : "bg-transparent"} transition-all duration-300 ease-in-out`}>
            <>
              {!isLiked && <HeartOff className="w-[23px] h-[23px]" />}
              {isLiked && <HeartOn className="w-[23px] h-[23px]" />}
              <span className="animate-fade-in">{props.likes}</span>
            </>
          </div>
        )}
        <div className="text-[#666] text-sm">
          {isLoading && <LoadingBar width="w-[70px]" />}
          {!isLoading && (
            <>
              <span className="animate-fade-in">{props.reference}</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Promise
