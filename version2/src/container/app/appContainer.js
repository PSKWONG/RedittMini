import React from 'react'; 
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'; 



/*********** Import Internal Modules ************** */
import Root from '../../component/root/RootComponent'





const App = ()=>{




    /******  Routing *******/
    const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />} >
        <Route index element = {<Root />} />
       
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