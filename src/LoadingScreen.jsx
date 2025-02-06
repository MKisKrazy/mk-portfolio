import { useEffect, useState } from "react"


export const LoadingScreen = (props) => {
  const {onComplete} =props
  const [text,setText]=useState("")
  const fulltext = "{ Retrieving MK's Data }"

  useEffect(()=>{
    let index =0;
    const interval = setInterval(()=>{
      setText(fulltext.substring(0,index))
      index++

      if(index > fulltext.length){
        clearInterval(interval)
      }

      setTimeout(()=>{
        onComplete();
      },2500)

    },100)
    return(
      ()=>{
        clearInterval(interval)
      }
    )
  },[onComplete])

  return (
    <div className="fixed inset-0 bg-black z-50 text-gray-100 flex flex-col justify-center items-center ">
        <div className="text-3xl mb-4 ml-10 font-mono font-bold">
            {text} <span className="animate-blink ml-1"> | </span>
        </div>

        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
          <div className="w-[40%] h-full bg-violet-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">

          </div>

        </div>
    </div>
  )
}
