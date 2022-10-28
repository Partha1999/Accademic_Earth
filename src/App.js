import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Faq from './Component/FAQ/Faq';
import Home from './Component/Home/Home';
import Main from './Component/Main/Main';

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
