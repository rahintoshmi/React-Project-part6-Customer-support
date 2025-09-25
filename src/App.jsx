import './App.css'
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar/Navbar';
import Banner from './banner/Banner';
import Footer from './Footer/Footer';
import Content from './content/Content';
import { Suspense, useEffect, useState } from 'react';
//fetch tickets from local server
const fetchTickets = async () => {
  const res = await fetch('/tickets.json');
  return res.json()
}

const tickets = fetchTickets();
function App() {
  const [progress,setProgress] = useState(0);//for progress count
  const [addTask,setAddTask] = useState([]); //for adding task
  const [resolvedTask,setResolvedTask] = useState([]);//for resolved task
  const [availableTickets, setAvailableTickets] = useState([]); //for available tickets
  //load tickets data from local server
  useEffect(() => {
    fetchTickets().then((data) => {
      setAvailableTickets(data);
    });
  }, []);
  return (
    <>

      <Navbar></Navbar>
      <Banner resolvedTask={resolvedTask} progress={progress}></Banner>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
        <Content availableTickets={availableTickets} setAvailableTickets={setAvailableTickets} resolvedTask={resolvedTask} setResolvedTask={setResolvedTask} addTask={addTask} setAddTask={setAddTask} progress={progress} setProgress={setProgress} tickets={tickets}></Content>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
