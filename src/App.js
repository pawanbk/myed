import { Routes, Route } from "react-router-dom"
import Auth from "../src/components/Auth"
import Dashboard from "./components/Dashboard"
function App(){
  return(
      <Routes>
        <Route path="/login" element= {<Auth />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
  )
}
export default App