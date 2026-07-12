import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import Active from './pages/Active'
import Completed from './pages/Completed'
import { Navbar } from './components/layout/Navbar'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter  basename="/Task-Management-Dashboard">
        <Navbar />
        <Routes>
          <Route path="/" element={<Active />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
