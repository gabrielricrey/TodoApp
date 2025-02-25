import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import StartPage from './pages/StartPage'
import CreateAccountPage from './pages/CreateAccountPage'
import { TodosContextProvider } from './context/TodosContext'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
      </Routes>
    </>
  )
}

export default App
