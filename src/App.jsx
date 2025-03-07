import './App.css'
import { Routes, Route } from 'react-router-dom'

import StartPage from './pages/StartPage'
import { TodosContextProvider } from './context/TodosContext'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </>
  )
}

export default App
