import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const form = createAsyncThunk(
    "form",
    async function (_,{dispatch}){
        dispatch(loaderOn())
      const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data  = await responce.json()
        dispatch(getData(data))
        dispatch(loaderOff())
})


const postSlice = createSlice({
  name: "Post Slice",
  initialState: {
      loading:false,
      posts: []
  },
  reducers: {
      loaderOff:(state) =>{
          state.loading = false
      },
      loaderOn:(state) =>{
          state.loading = true
      },
      getData:(state, action) =>{
          state.posts = action.payload

      }
  },
});

export const {loaderOn,loaderOff,getData} = postSlice.actions;
export default postSlice.reducer;
