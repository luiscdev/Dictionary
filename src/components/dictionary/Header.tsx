import Select from "@/components/gloabls/Select"
import Toggle from "@/components/gloabls/Toggle"
import iconBook from "@/assets/icons/iconoir_book.svg"
import { MoonIcon } from "@heroicons/react/24/outline"

function Header() {
  return (
    <div className="flex justify-between">
      <div>
        <img src={iconBook} alt="iconBook" />
      </div>
      <div className="flex items-center space-x-[26px] divide-x">
        {/* <div>
          <Select />
        </div> */}
        <div className="pl-[26px] flex items-center space-x-[20px]">
          <Toggle />
          <button className="flex">
            <MoonIcon className="w-[22px] h-[22px] text-dictionary-gray-300 hover:text-dictionary-purple dark:divide-dictionary-gray-700 dark:text-dictionary-purple duration-500" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
