
import './App.css'


import Navbar from "./components/widjets/Navbar/Navbar.tsx";
import AppRoutes from "./providers/routes/AppRoutes.tsx";



function App() {


  return (
    <div>
        <Navbar/>
        <AppRoutes/>
    </div>
  )
}

export default App
