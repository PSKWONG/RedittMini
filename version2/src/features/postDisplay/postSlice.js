//------------------------Import External Componenet ----------------------
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//------------------------Import Internal Componenet ----------------------
import menuDB from '../../container/root/data/subreddit.json'; 

//Helper Function 


//Async Thunk 
export const fetchPages = createAsyncThunk(
    'post/fetchSubPages',
    async({type, keyword}, thunkAPI)=>{

        let fetchURL; 

        //Get the APi site according to the type 
        switch(type){
            case "searching":
                fetchURL = `https://www.reddit.com/search.json?q=${encodeURIComponent(keyword)}`;
                break;
            default:
                fetchURL = `https://www.reddit.com/r/${keyword}/.json`;
                break;
        }

        //Start the fetching 
        const response = await fetch(fetchURL);
        const json = await response.json();

        console.log('Fetched data ', json.data.children)

        return json.data; 
    }
)


//Construction of State Template ( Initiate Value )

const postInitialState = {
    pageInfo: {
        pageName:'' ,
        pageIcon:'' ,
    },
    pagePost: {
        data:[]
    },
    postDetail: {
        postData: {}
    },
    isLoading: false,
    hasError: false,
    errorMesaage: ''
}

//Construction of Slice

const postSlice = createSlice({
    name: 'post',
    initialState: postInitialState, 
    reducers: {
        updatePageInfo: (state,action)=>{
            const hasName = 'name' in action.payload; 
            const hasIcon = 'icon' in action.payload; 

            if(  hasName &&  hasIcon){
                const {name,icon} = action.payload; 
                state.pageInfo.pageName = name ; 
                state.pageInfo.pageIcon = icon ; 
            }else{
                console.log('Fail to update the Page Info')
                state.hasError = true; 
                state.errorMesaage = 'Fail to update the Page info'; 
            }

        }, 
        
        updatePostDetail: (state,action)=>{
            state.postDetail.postData = action.payload; 
        }
        
    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchPages.pending, (state)=>{
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
                state.pagePost.data = action.payload?.children || [] 
            })
    },
    selectors:{
        selectPageInfo: (state) => state.pageInfo,
        selectPagePost: (state) => state.pagePost.data,
        selectPostDetail: (state) => state.postDetail,
        selectPageLoading: (state) => state.isLoading,
        selectPageError: (state) => state.hasError,
    }


}); 

//Export Reducer to Store 
export default postSlice.reducer; 

//Export Actions 
export const { updatePageInfo, updatePostDetail } = postSlice.actions; 

//Export Store State
export const {
    selectPagePost,
    selectPageLoading,
    selectPageError,
    selectPageInfo,
    selectPostDetail
} = postSlice.selectors ;

