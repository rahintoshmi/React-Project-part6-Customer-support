import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar/Navbar';
import Banner from './banner/Banner';
import Footer from './Footer/Footer';
import Content from './content/Content';
function App() {
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Content></Content>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
