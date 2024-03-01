import React from 'react'
import RootLayout from './Shared/Components/Layouts/RootLayout'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Projects/Projects'
import Project from './Pages/Projects/Project'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import SamplePage from './Pages/Test'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/Project' element={<Projects />} />
          <Route path='/Project/:id' element={<Project />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Sample' element={<SamplePage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

// https://colorhunt.co/palette/fff7f1ffe4c9e78895bed1cf