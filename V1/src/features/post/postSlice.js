////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//------------------------Import Internal Componenet ----------------------
import { fetchPostbyTerm } from "../searching/searchSlice";
import subRedditPageData from "../../data/subreddit.json"

export const fetchPages = createAsyncThunk(
    'post/fetchPages',
    async(subreddit, thunkAPI)=>{
        const fetchURL = `https://www.reddit.com/r/${subreddit}/.json`;
        const response = await fetch(fetchURL);
        
        const json = await response.json();
        return json.data; 
    }
)



const postSlice = createSlice({
    name: 'post',
    initialState: {
        pageInfo: {
            pageName: 'popular',
            pageIcon: '',
        },
        dataIndex:0,
        pagePost: [],
        isLoading: false,
        hasError: false,
    },
    reducers: {
        changePostList: (state, action) => {
            state.dataIndex = action.payload
            const { name, icon } = subRedditPageData.data[state.dataIndex];
            state.pageInfo.pageName = name;
            state.pageInfo.pageIcon = icon;
            fetchPages(name);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostbyTerm.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchPostbyTerm.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(fetchPostbyTerm.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                const { children } = action.payload
                state.pagePost = children
                state.pageInfo.pageName = 'Searching'
            })
            .addCase(fetchPages.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchPages.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(fetchPages.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                const { children } = action.payload
                state.pagePost = children
            })
    },
    selectors: {
        selectPageInfo: (state) => state.pageInfo,
        selectPagePost: (state) => state.pagePost,
        selectPageLoading: (state) => state.isLoading,
        selectPageError: (state) => state.hasError,
    }
});

export default postSlice.reducer;
export const {
    selectPagePost,
    selectPageLoading,
    selectPageError,
    selectPageInfo
} = postSlice.selectors
export const  {changePostList} = postSlice.actions

