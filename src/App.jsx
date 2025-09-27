import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import IssueManagement from './Components/IssueManagement/IssueManagement'
import { Suspense } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchIssues = async () => {
  const result = await fetch("/data.json")
  return result.json()
}

function App() {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App