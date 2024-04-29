export function fetchGetWord(word: string) {
  const promise = fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  )
    .then((response) => response.json())
    .then((data) => data)
  console.log(promise)
  return promise
}

export default fetchGetWord
