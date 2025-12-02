import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Skills from "../pages/Skills";
import Reviews from "../pages/Reviews";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import FAQ from "../pages/FAQ";

const router=createBrowserRouter([
  {
      path:'/',
    element:<Root/>,
    errorElement: <Error/>,
        children:[
      {
        index:true,
        path:'/',
       
        element:<Home/>

      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      },

      {
        path:'/skills',
        element:<Skills></Skills>,
        loader:()=> fetch('/skills.json').then(res=>res.json(),)
      },
      
      {
        path:'/reviews',
        element:<Reviews/>,
        loader:()=> fetch('/reviews.json').then(res=>res.json(),)
      },
      {
        path:'/blog',
        element:<Blogs/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contacts/>
      },
      {
        path:'/FAQ',
        element:<FAQ/>
      }
      
     

      
    ]
}
 
])

export default router;