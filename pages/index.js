import Navbar from "@/components/Navbar"
import Main from "@/components/Main"
import Design from "@/components/Design"
import Pages from "@/components/Pages"
import Company from "@/components/Company"
import CMS from "@/components/CMS"
import Utility from "@/components/Utility"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Main/>
      <Design/>
      <Pages/>
      <Company/>
      <CMS/>
      <Utility/>
      <Footer/>
    </>
  )
}

export default Home