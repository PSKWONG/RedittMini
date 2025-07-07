import React from 'react'; 
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'; 








const App = ()=>{




    /******  Routing *******/
    const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />} >
        <Route index element = {<PostWrapper />} />
        <Route path='comment' element={ <CommentWrapper /> } />
    </Route>
    ));

    return (
    <RouterProvider router={appRouter} />
    );

}

//Export App Component 
export default App;