
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ContextProvider } from './Components/utils/global.context'

function App() {
  return (
    <ContextProvider>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dentist/:id" element={<Detail />} />
      <Route path="/favs" element={<Favs />} />
    </Routes>
    <Footer />
  </Router>
  </ContextProvider>
  );
}

export default App;
