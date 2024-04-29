import Header from "@/components/dictionary/Header"
import InputSearch from "@/components/dictionary/InputSearch"
import WordResult from "@/components/dictionary/WordResult"
import { useSelector } from "react-redux"

export default function App() {
  const wordResult = useSelector((state) => state.word)

  return (
    <>
      <div className="flex justify-center px-[24px] lg:px-0 dark:bg-dictionary-gray-700">
        <div className="w-[739.99px] h-[100%]">
          <div className="mt-[24px] lg:mt-[58px]">
            <Header />
          </div>
          <div className="mt-[50px]">
            <InputSearch />
          </div>
          <div>
            {wordResult.word && <WordResult />}
          </div>
        </div>
      </div>
    </>
  )
}
