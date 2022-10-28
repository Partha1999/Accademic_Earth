import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Faq from './Component/FAQ/Faq';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';

import Main from './Component/Main/Main';
import SignUp from './Component/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/Blog',
          element:<Blog></Blog>
        },
        {
          path:'/Faq',
          element:<Faq></Faq>
        },
        {
          path:'/Login',
          element:<Login></Login>
        },
        {
          path:'/SignUp',
          element:<SignUp></SignUp>
        }
       
      ]
    }
  ])
  return (

    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
