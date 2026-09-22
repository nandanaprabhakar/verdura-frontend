import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import Blogs from './Pages/Blogs'
import BlogAnimation from './Components/BlogAnimation'
import Plants from './Pages/Plants'
import PlantDetails from './Pages/PlantDetails'
import PotDetails from './Pages/PotDetails'
import Auth from './Components/Auth'
import PageNotFound from './Pages/PageNotFound'
import Profile from './Pages/Profile'
import Pots from './Pages/Pots'

function App() {
 
  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
       <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/plants' element={<Plants/>}/>
      <Route path='/plant-details/:id' element={<PlantDetails/>}/>
      <Route path='/pots' element={<Pots/>}/>
      <Route path='/pot-details/:id' element={<PotDetails/>}/>
      <Route path='/blogsa' element={<BlogAnimation/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
     </Routes>
    </>
  )
}

export default App
