import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-indigo-500/30">
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'glass-toast',
          style: {
            background: 'rgba(17, 17, 26, 0.8)',
            color: '#f5f5f7',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      />
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App
