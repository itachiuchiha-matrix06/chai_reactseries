import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './compon/home/Home.jsx'
import About from './compon/About/About.jsx'
import Contact from './compon/contact/Contact.jsx'
import User from './compon/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: "user:userid",
//         element: <User />
//       }
//     ]
//   }
// ])




// const router = createBrowserRouter (createRoutesFromElements(
//   <Route path='/' element={<Layout/>}>
//     <Router path='' element={<Home />}  />
//     <Router path='about' element={<About />}  />
//     <Router path='contact' element={<Contact />}  />
//   </Route>
// ))



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>

    </Route>
  )
)






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
