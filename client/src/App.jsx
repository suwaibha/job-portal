import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import ApplyJob from './Pages/ApplyJob'
import Home from './Pages/Home'
import Applications from './Pages/Applications'
import RecruiterLogin from './Components/RecruiterLogin'
import AppContext from './Context/AppContext'
import Dashboard from './Pages/Dashboard'
import ManageJobs from './Pages/ManageJobs'
import ViewApplications from './Pages/ViewApplications'
import AddJob from './Pages/AddJob'
import 'quill/dist/quill.snow.css'

const App = () => {

  const {showRecruiterLogin}=useContext(AppContext)


  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/apply-job/:id' element={<ApplyJob/>}/>
        <Route path='/applications' element={<Applications/>}/>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='add-job' element={<AddJob />}/>
          <Route path='manage-job' element={<ManageJobs />}/>
          <Route path='view-applications' element={<ViewApplications />}/>


        </Route>


      </Routes>
    </div>
  )
}

export default App
