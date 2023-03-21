import React from "react"
import Promise from "@/components/Promise"

type Props = {}

function Promises({}: Props) {
  return (
    <main id="main" className="ml-[15%] bg-green-200 w-full mt-[80px]">
      <Promise font="font-roboto" likes={0} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise font="font-federo" likes={23} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise likes={453} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise font="font-fast-hand" likes={11} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise likes={23} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise font="font-quicksand" likes={0} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise font="font-sono" likes={22} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise font="font-ubunut" likes={45} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise font="font-gloock" likes={23} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
      <Promise font="font-courgette" likes={28} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit." reference="Lorem 13,4" />
    </main>
  )
}

export default Promises
