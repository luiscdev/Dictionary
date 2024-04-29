import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"

const typographies = [
  { id: 1, name: "Sans Serif" },
  { id: 2, name: "Serif" },
  { id: 3, name: "Mono" },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  const [selected, setSelected] = useState(typographies[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative w-[120px] rounded-md bg-white dark:bg-dictionary-gray-700 pl-3 pr-10 text-left text-gray-900 shadow-sm sm:text-sm sm:leading-6 cursor-pointer">
              <span className="block truncate font-bold text-dictionary-gray-500 dark:text-white">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-dictionary-gray-700 dark:border-dictionary-gray-600 border py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {typographies.map((typography) => (
                  <Listbox.Option
                    key={typography.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900 dark:text-white",
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                      )
                    }
                    value={typography}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate",
                          )}
                        >
                          {typography.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4",
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
