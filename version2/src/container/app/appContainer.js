import React from 'react'; 
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';

/*********** Import Internal Modules ************** */
import Root from '../root/rootContainer';
import PostDisplayContainer from '../../features/postDisplay/postListContainer';
import PostDetailContainer from '../../features/postDisplay/postDetailContainer';





const App = ()=>{




    /******  Routing *******/
    const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />} >
        <Route index element = {<Navigate to="/page/popular" replace />} />
        <Route path='/searching/:keyword' element = {<PostDisplayContainer />} />
        <Route path='/page/:keyword' element = {<PostDisplayContainer />} />
        <Route path='detail' element = {<PostDetailContainer />} />
    </Route>
    ));

    return (
    <RouterProvider router={appRouter} />
    );

}

//Export App Component 
export default App;

/*
 <Route index element = {<PostWrapper />} />
        <Route path='comment' element={ <CommentWrapper /> } />
*/