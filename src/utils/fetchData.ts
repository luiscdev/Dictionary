const getSuspender = <T>(promise: Promise<T>) => {
  let status = "pending"
  let response: T

  const suspender = promise.then(
    (res) => {
      status = "success"
      response = res
    },
    (err) => {
      status = "error"
      response = err
    },
  )

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender
      case "error":
        throw response
      default:
        return response
    }
  }

  return { read }
}

export function fetchData(word: string) {
  const promise = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => data)

  return getSuspender(promise)
}
