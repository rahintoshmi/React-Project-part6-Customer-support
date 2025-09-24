import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar/Navbar';
import Banner from './banner/Banner';
function App() {
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      
      <ToastContainer />
    </>
  )
}

export default App
