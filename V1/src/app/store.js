
////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit'
//------------------------Import Internal Componenet ----------------------
import searchingReducer from '../features/searching/searchSlice'
import postReducer, { changePostList, fetchPages } from '../features/post/postSlice'
import commentReducer from '../features/comment/commentSlice'

/////////////////////Middle Ware ///////////////////////////////
const listenerMiddleware = createListenerMiddleware()

/////////////////////Middle Ware 01  ///////////////////////////////

listenerMiddleware.startListening({
    actionCreator: changePostList,
    effect: (action, listenerApi)=>{
        const {pageName} = store.getState().post.pageInfo
        listenerApi.dispatch (fetchPages(pageName))
    }
})

///////////////////// Create Store ///////////////////////////////

const store = configureStore({
    reducer: {
        searching: searchingReducer,
        post: postReducer,
        comment: commentReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;


