
//Import External Moudles 
import { Navigate, RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

//Import Internal Modules 
import MasterPage from '../master/masterContainer';
import PostListContainer from '../postDisplay/postList/postListContainer';
import PostDetailContainer from '../postDisplay/postDetail/postDetailContainer'; 



const App = () => {

    const appRouter = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<MasterPage />} >
            <Route index element={<Navigate to="/page/popular" replace />} />
            <Route path='/page/:keyword' element={<PostListContainer />} />
            <Route path='/searching/:keyword' element={<PostListContainer />} />
            <Route path='detail' element={<PostDetailContainer />} />
        </Route>
    ));

    /*
            <Route index element={<Navigate to="/page/popular" replace />} />
            
            <Route path='/page/:keyword' element={<PostDisplayContainer />} />
            <Route path='detail' element={<PostDetailContainer />} />
        */

    return <RouterProvider router={appRouter} />

};

export default App; 
