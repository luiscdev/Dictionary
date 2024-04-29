import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import iconPlayer from "@/assets/icons/icon_player.svg"

export default function WordResult() {
  const [foundObject, setFoundObject] = useState(null)
  const wordResult = useSelector((state) => state.word)
  const propsToCheck = ["text", "audio"]
  const meanings = wordResult.meanings[0]

  function playAudio() {
    const audioPlayer = document.getElementById("audioPlayer")
    audioPlayer.play()
  }

  useEffect(() => {
    console.log(wordResult)
    if (wordResult && wordResult.phonetics) {
      const foundObj = wordResult.phonetics.find((obj) =>
        propsToCheck.every((prop) => Object.keys(obj).includes(prop)),
      )
      setFoundObject(foundObj || null)
      console.log(foundObject)
    } else {
      setFoundObject(null)
    }
    console.log(wordResult.meanings[0].definitions)
  }, [wordResult])

  return (
    <>
      <div className="py-[45px]">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[35px] lg:text-[64px] font-bold capitalize text-dictionary-gray-700 dark:text-white">{wordResult.word}</h1>
            <h3 className="text-[20px] lg:text-[24px] font-bold text-dictionary-purple">
              {foundObject && foundObject.text}
            </h3>
          </div>
          <div>
            {foundObject?.audio && (
            <button onClick={playAudio}>
              <audio id="audioPlayer" src={foundObject.audio}></audio>
              <img src={iconPlayer} alt="Play audio" className="w-[48px] lg:w-[75px]" />
            </button>
            )}
          </div>
        </div>
        <div className="my-[35px]">
          <div className="flex space-x-[14px] items-center">
            <span className="text-[20px] lg:text-[24px] font-semibold text-dictionary-gray-700 dark:text-white">noun</span>
            <div className="w-full h-[1px] mt-1.5 bg-dictionary-gray-200"></div>
          </div>
          <div className="mt-[40px]">
            <span className="text-[18px] text-dictionary-gray-300">
              Meaning
            </span>
            <ul className="list-disc pl-5 text-dictionary-purple">
              {wordResult.meanings[0].definitions.map((meaning, index: number) => (
                <li key={index} className="mt-[20px]">
                  <p className="mt-[10px] text-[15px] lg:text-[18px] text-dictionary-gray-700 dark:text-white">
                    {meaning.definition}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-5">
          {meanings.synonyms[0] && (  
          <p className="flex flex-col lg:flex-row text-[15px] lg:text-[18px] text-dictionary-gray-300">
            <h3 className="w-28">Synonyms</h3> <span className="text-dictionary-purple font-semibold capitalize">{meanings.synonyms[0]}</span>
          </p>
          )}
          <p className="flex flex-col lg:flex-row text-[15px] lg:text-[18px] text-dictionary-gray-300 break-all">
            <h3 className="w-28">Source</h3> <a target="blank" href={wordResult.sourceUrls[0]} className="text-dictionary-purple font-semibold">{wordResult.sourceUrls[0]}</a>
          </p>
        </div>
      </div>
    </>
  )
}
