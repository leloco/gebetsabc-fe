import React from "react"

type Props = {}

function SearchBar({}: Props) {
  return (
    <div className="absolute left-auto h-30 top-[50px] w-full max-w-[1300px] z-[20] bg-white p-6 shadow-xl transition-all duration-300 ease-in-out">
      <h3 className="font-bold font-xl">Kategorien</h3>
      <div className="flex flex-wrap justify-start items-center gap-3 py-4">
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Sieg</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Familie</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Freunde</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Stärke</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
        <div className="text-[#222] border border-dark-beige rounded-full py-1 px-2 text-sm cursor-pointer hover:bg-dark-beige transition-all duration-300 ease-in">Durchhaltevermögen</div>
      </div>
    </div>
  )
}

export default SearchBar
