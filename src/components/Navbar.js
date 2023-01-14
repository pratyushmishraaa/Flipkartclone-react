import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    
      <div className="header">
         
         <div className="header-1">
         <h2>Flip<span>Kart</span></h2>
         
         <div> 
         <span className='s-1'>
             explore plus
         </span>   
         </div>
         
        
         </div>
         <div className="header-3">
         <input className='inp' type="text" placeholder='search for 
          items' />
          <button className='btn-1'>search</button>
          
         </div>
          
         
        
         <div className="header-4">
            <button className='btn-2'>login</button>
         </div>
         <div className="header-5">
         Cart
         


         </div>

      </div>
      
      
    
  )
}

export default Navbar;