import react, { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authobject from './appwrite/auth'
import {login, logout} from "./store/authSlice"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authobject.getCurrentUser().
    then((userData) => {
      if (userData){
        dispatch(login({userData}))
      } else {
        dispatch(login())
      }
    }).
    finally(() => setLoading(false))
  }, [])

  console.log(import.meta.env.VITE_APPWRITE_URL)

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full-block'>
        <Header />
        <main>
          
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
