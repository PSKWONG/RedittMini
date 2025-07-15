////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//------------------------Import Internal Componenet ----------------------




export const fetchPostbyTerm = createAsyncThunk(
    'searching/fetchPostbyTerm',
    async (terms, thunkAPI) => {
        
        const fetchURL = `https://www.reddit.com/search.json?q=${terms}`;
        const response = await fetch(fetchURL);        
        const json = await response.json();
        return json.data;
    }
)




const searchingSlice = createSlice({
    name: 'searching',
    initialState: {
        keyword: "Search relevant post(s) ",
        //searchResult: {},
        isLoading: false,
        hasError: false,
    },
    reducers: {
        changeSearchingKeyword: (state, action) => {
            state.keyword = action.payload
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
            })
    },
    
});

export const selectSearchingterms = (state) => state.searching.keyword;

export const { changeSearchingKeyword } = searchingSlice.actions;
export default searchingSlice.reducer;

