import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import Contact from './components/Contact/Contact.jsx'
import Github, {gitHubloader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/' element={<User />} >
          <Route path=':userid' element={<User />} />
        </Route>
        <Route 
        loader = {gitHubloader}
        path='github' element={<Github />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Route>
    )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      
  </StrictMode>,
)
