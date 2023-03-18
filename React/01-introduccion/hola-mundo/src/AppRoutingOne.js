import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/home/homePage";
import  NotFoundPage from "./pages/404/notFoundPage";
import AboutPage from "./pages/about/aboutPage";

function AppRoutingOne() {
  let loggedIn = true;
  const router = createBrowserRouter([
    {
      path:"/",
      element: <HomePage></HomePage>,
      errorElement: <NotFoundPage></NotFoundPage>
    },
    {
     
      path:"/about",
      element: <AboutPage></AboutPage>,
      errorElement: <NotFoundPage></NotFoundPage>
    }
   
  ])
  return (
<RouterProvider router={router}></RouterProvider>
  );
}
export default AppRoutingOne;
