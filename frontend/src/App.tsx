import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Community from "./pages/Community";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import RootLayer from "./pages/RootLayer";
import Partners from "./pages/Partners";
import Event from "./pages/Event";


const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayer,
    children : [
      { index: true, Component: HomePage },
      {path:'/about', Component: About},
      {path:'/community', Component: Community },
      {path:'/event', Component: Event},
      {path:'/solution', Component: Login },
      {path:'/resources', Component: Resources},
      {path:'/contact', Component: Contact},
      {path:'/projects', Component: Projects},
      {path:'/partners', Component: Partners},
      

    ]
    
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App 
