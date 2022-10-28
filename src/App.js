import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Courses from './Component/Courses/Courses';
import Error from './Component/Error/Error';
import Faq from './Component/FAQ/Faq';
import Details from './Component/Details/Details';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import PremiumAcess from './Component/PremiumAcess/PremiumAcess';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Main from './Component/Main/Main';
import SignUp from './Component/SignUp/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement: <Error></Error>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/Blog',
          element:<PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
          path:'/Faq',
          
          element:<PrivateRoute><Faq></Faq></PrivateRoute>
        },
        {
          path:'/courses',
          element:<PrivateRoute><Courses></Courses></PrivateRoute>,
          loader: () => fetch('https://academic-earth-server-phi.vercel.app/courses')
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><Details></Details></PrivateRoute>
        },
        {
          path:'/premiumAcess/:id',
          element:<PrivateRoute>
            <PremiumAcess></PremiumAcess>
          </PrivateRoute>
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
