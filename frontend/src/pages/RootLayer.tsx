import { Outlet } from "react-router"
import MainNavigation from "../components/MainNavigation"
import Footer from "../components/Footer"




const RootLayer = () => {
  return (
    <>
    <MainNavigation/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayer