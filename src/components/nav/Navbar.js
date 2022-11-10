import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'




function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="navbar"> NA<span className='text-danger'> TO</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                
                <ul class="navbar-nav">
                    
                    <div className='closed'>
                        <close className='close' />

                    </div>
                
                <li class="nav-item">
                    <Link to = '/'><div class="nav-link key"> <i class="bi bi-house-door-fill text-light"></i> Home</div></Link>
                </li>

                <li class="nav-item">
                    <Link to = '/about'><div class="nav-link key"> <i class="bi bi-people-fill text-light"></i> About</div></Link>
                </li>
                <li class="nav-item">
                    <Link to = '/portfolio'><div class="nav-link key">  <i class="bi bi-laptop text-light"></i> Portfolio</div></Link>
                </li>
                <li class="nav-item">
                    <Link to = '/contact'><div class="nav-link key"> <i class="bi bi-telephone text-light"></i> Contact</div></Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;