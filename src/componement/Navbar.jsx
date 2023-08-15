import React from 'react'
import checker from './components/img/ckeck.jpg'
const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
          <img src={checker}/>
          <h1>checker.tn</h1>
          <ul>
            <li>Home</li>
            <li>Game</li>
            <li>History</li>
          </ul>
        </nav> 
      </div>
  )
}

export default Navbar