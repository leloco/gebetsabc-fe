import React from "react"
import Promise from "@/components/Promise"

type Props = {}

function Promises({}: Props) {
  const promises = [
    {
      tc: "#F2EBE9",
      bc: "#7C3E66",
      font: "font-roboto",
      likes: 0,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#F1E9E5",
      bc: "#B4B897",
      font: "font-courgette",
      likes: 10,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#E7DEC8",
      bc: "#CBAF87",
      font: "font-fasthand",
      likes: 30,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#FF6B6B",
      bc: "#002366",
      font: "font-pacifico",
      likes: 34,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#D0E8F2",
      bc: "#79A3B1",
      font: "font-quicksand",
      likes: 86,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#C6B4CE",
      bc: "#9B72AA",
      font: "font-thasadith",
      likes: 112,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#FFF5DE",
      bc: "#3C5186",
      font: "font-rock-salt",
      likes: 32,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#042F4B",
      bc: "#FFF6DA",
      font: "font-ubuntu",
      likes: 34,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#4C4B16",
      bc: "#898121",
      font: "font-rock-salt",
      likes: 86,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#E3C4A8",
      bc: "#000000",
      font: "font-ubuntu",
      likes: 112,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#76B39D",
      bc: "#F6E5E5",
      font: "font-rock-salt",
      likes: 32,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#D0E8F2",
      bc: "#79A3B1",
      font: "font-sono",
      likes: 86,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#A4907C",
      bc: "#C8B6A6",
      font: "font-pacifico",
      likes: 112,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#76B39D",
      bc: "#F6E5E5",
      font: "font-inter-tight",
      likes: 32,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#D0E8F2",
      bc: "#79A3B1",
      font: "font-cinzel",
      likes: 86,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#607EAA",
      bc: "#F9F5EB",
      font: "font-ubuntu",
      likes: 112,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    },
    {
      tc: "#51557E",
      bc: "#816797",
      font: "font-rock-salt",
      likes: 32,
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti culpa optio perspiciatis labore. Sit.",
      reference: "Lorem 13,4"
    }
  ]
  return (
    <div id="main" className="ml-[205px] mt-[70px] mr-[2px] overflow-auto grid grid-cols-3 gap-3 p-4 pl-8">
      {promises.map((promise, index) => {
        return <Promise key={index} tc={promise.tc} bc={promise.bc} font={promise.font} likes={promise.likes} content={promise.content} reference={promise.reference} />
      })}
    </div>
  )
}

export default Promises
