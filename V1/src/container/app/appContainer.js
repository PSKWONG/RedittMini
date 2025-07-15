////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from 'react';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
//------------------------Import Internal Componenet ----------------------
import '../../component/app/style/App.css';
import { Root } from '../../component/root/root.js'
import { PostWrapper } from '../../features/post/postWrapper.js';
import { CommentWrapper } from '../../features/comment/commentWrapper.js';

////////////////////////////Routing//////////////////////
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} >
    <Route index element = {<PostWrapper />} />
    <Route path='comment' element={ <CommentWrapper /> } />
  </Route>
));



function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
