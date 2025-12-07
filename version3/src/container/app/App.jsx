
//Import External Moudles 
import { Navigate, RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

//Import Internal Modules 
import MasterPage from '../master/masterContainer';



const App = () => {

    const appRouter = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<MasterPage />} >
            <Route index element={<></>} />
        </Route>
    ));

    /*
            <Route index element={<Navigate to="/page/popular" replace />} />
            <Route path='/searching/:keyword' element={<PostDisplayContainer />} />
            <Route path='/page/:keyword' element={<PostDisplayContainer />} />
            <Route path='detail' element={<PostDetailContainer />} />
        */

    return <RouterProvider router={appRouter} />
  
};

export default App; 
