import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editprofile from './pages/Editprofile'
import MrgePdf from './pages/MrgePdf'
import Splitpdg from './pages/Splitpdg'
import RotatePdf from './pages/RotatePdf'
import Compresspdf from './pages/Compresspdf'
import ConertWordtoPdf from './pages/ConertWordtoPdf'
import Lockprotect from './pages/Lock-protect'
import UnlockPdf from './pages/UnlockPdf'
import SignPdf from './pages/SignPdf'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
    
          <Route index path="/" element={<Home />} />
          <Route index path="/edit-pdf" element={<Editprofile />} />
          <Route index path="/merge-pdf" element={<MrgePdf />} />
          <Route index path="/split-pdf" element={<Splitpdg />} />
          <Route index path="/rotate-pdf" element={<RotatePdf />} />
          <Route index path="/compress-pdf" element={<Compresspdf />} />
          <Route index path="/word-to-pdf" element={<ConertWordtoPdf />} />
          <Route index path="/lock-protect" element={<Lockprotect />} />
          <Route index path="/unlock" element={<UnlockPdf />} />
          <Route index path="/sign-a-pdf" element={<SignPdf />} />
          
      </Routes>
    <Footer/>
      {/* <Home/> */}
      </BrowserRouter>
      {/* <PDFConverter/> */}
    </>
  )
}

export default App
