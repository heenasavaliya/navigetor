import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=> {
  return (
    <div id='a'>
    < div id='b' >
    <div style={{display: 'flex',justifyContent:'space-evenly',backgroundColor:'black',fontSize:'30px',padding:'20px'}}>
      <Link to = '/Home'style={{textDecoration:'none',color:'white'}}  >Home</Link>
      <Link to = '/About' style={{textDecoration:'none',color:'white'}}  >About</Link>

      <Link to = '/Localstorage'style={{textDecoration:'none',color:'white'}}  > Localstorage</Link>
      <Link to = '/contact'style={{textDecoration:'none',color:'white'}}  >Contact</Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar