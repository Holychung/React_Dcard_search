import React from 'react'
import { withRouter,Link } from 'react-router-dom'

const NavItem = withRouter((props)=>(
    <Link to={props.anchor}>
        <div className={`nav-item ${props.location.pathname===props.anchor && 'active'}`}>
            {props.name}
        </div>
    </Link>
))

const Navbar = ()=>(
    <div className='nav'>
      <NavItem name='Ｎ＋小實作' anchor='/'/>
      <NavItem name='搜尋貼文' anchor='/search'/>
    </div>
)

export default Navbar