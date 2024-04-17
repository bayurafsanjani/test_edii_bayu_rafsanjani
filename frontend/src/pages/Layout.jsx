import React from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const Layout  = ({children}) => {
  return (
      <React.Fragment>
        <Navbar />
        <div className='columns mt-6'>
            <div className='column is-2'>
                <Sidebar/>
            </div>
            <div className="colmn has-background-light"></div>
            <main>children</main>
        </div>
      </React.Fragment>
  )
}

export default Layout 
