import React from 'react'
import {Header} from './'

// oooo here we could define day and night view hopefully
const backgroundStyle = {
    backgroundColor: '#c7919f',
    height: '100vh'
}
import 'bootstrap/dist/css/bootstrap.css';


// style={backgroundStyle}
function Layout({children}) {
  return (
    <div className='test' style={backgroundStyle}>
        <Header />
        {children}
    </div>
  )
}

export default Layout