import fetchGetWord from "@/services/wordService"
import { addWord } from "@/store/reducers/wordReducer"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { useDispatch } from "react-redux"

export default function InputSearch() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")
  const [searchingWord, setSearchingWord] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = async(e)  => {
    e.preventDefault()
    try {
      setSearchingWord(true)
      const result = await fetchGetWord(inputValue)
      dispatch(addWord(
        result[0]
      ))
    } catch (error) {
      throw new Error(error)
    } finally {
      setSearchingWord(false)
    }
  }

  return (
    <>
      <div className="relative">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type a word..."
            value={inputValue}
            onChange={handleChange}
            className="w-full h-[64px] rounded-[16px] px-[24px] font-bold text-dictionary-gray-500 bg-dictionary-gray-200 outline-dictionary-purple dark:bg-dictionary-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="absolute top-[21px] right-[21px] outline-none"
          >
            <MagnifyingGlassIcon
              className="w-[20px] h-[20px] text-dictionary-purple"
              aria-hidden="true"
            />
          </button>
        </form>
        {searchingWord && (
          <div className="mt-10 dark:text-white">Searching...</div>
        )}
      </div>
    </>
  )
}
