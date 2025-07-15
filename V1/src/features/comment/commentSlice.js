////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//------------------------Import Internal Componenet ----------------------



export const fetchComment = createAsyncThunk(
    'comment/fetchfetchCommentPages',
    async(permanLink, thunkAPI)=>{
        const fetchURL = `https://www.reddit.com${permanLink}.json`;
        const response = await fetch(fetchURL);        
        const json = await response.json();
        return json; 
    }
)



const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        pagePost: [],
        replies:[],
        timeCreated:'',
        isLoading: false,
        hasError: false,
        isRepliesLoading: false,
    },
    reducers: {
        displayComment:(state, action)=>{
            state.timeCreated = action.payload
        },
        addReplies:(state,action)=>{
            state.replies.push(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComment.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchComment.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(fetchComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.pagePost = action.payload
            })
    },
    
    selectors: {
        //selectPageInfo: (state) => state.pageInfo,
        selectCommentPost: (state) => state.pagePost,
        selectCommentLoading: (state) => state.isLoading,
        selectCommentError: (state) => state.hasError,
        selectPostTimeCreated: (state) => state.timeCreated,
    }
        
});

export default commentSlice.reducer;
export const  {displayComment, addReplies} = commentSlice.actions

export const {
    selectCommentPost,
    selectCommentLoading,
    selectCommentError,
    selectPostTimeCreated
} = commentSlice.selectors


