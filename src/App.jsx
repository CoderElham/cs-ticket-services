import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import IssueManagement from './Components/IssueManagement/IssueManagement'
import { Suspense } from 'react'

const fetchIssues = async () => {
  const result = await fetch("/data.json")
  return result.json()
}

function App() {
  const fetchPromise = fetchIssues();

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading.....</div>}>
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>
      <Footer></Footer>

    </>
  )
}

export default App