import { createSlice } from "@reduxjs/toolkit"
import { WordResult } from "@/models/wordModel"

const initialState: WordResult = {}


export const wordSlice = createSlice({
  name: "word",
  initialState,
  reducers: {
    addWord: (state, action) => {
      Object.assign(state, action.payload)
    },
    deleteWord: () => {
      return initialState
    },
  },
})

export const { addWord, deleteWord } = wordSlice.actions

export default wordSlice.reducer
