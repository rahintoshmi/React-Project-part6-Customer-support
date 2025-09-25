import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar/Navbar';
import Banner from './banner/Banner';
import Footer from './Footer/Footer';
import Content from './content/Content';
import { Suspense } from 'react';
//fetch tickets from local server
const fetchTickets = async () => {
  const res = await fetch('/tickets.json');
  return res.json()
}
function App() {
  const tickets = fetchTickets();
  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Content tickets={tickets}></Content>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
