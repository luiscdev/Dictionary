import { Switch } from "@headlessui/react"
import { useEffect, useState } from "react"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [enabled, setEnabled] = useState(false)
  const [theme, setTheme] = useState("light")

  const hanldleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    theme == "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark")
      
    theme === "dark" ? setEnabled(true) : setEnabled(false)
  }, [theme])

  return (
    <Switch
      checked={enabled}
      onChange={hanldleChangeTheme}
      className={classNames(
        enabled ? "bg-dictionary-purple" : "bg-dictionary-gray-300",
        "relative inline-flex h-[20px] w-[40px] pt-[1px] px-[1px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
        )}
      />
    </Switch>
  )
}
