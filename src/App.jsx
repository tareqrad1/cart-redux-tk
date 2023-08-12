import Cart from "./components/Cart"
import Home from "./components/Home"
import Navbars from "./components/Navbar"
import {Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <>  
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App