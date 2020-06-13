import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';



const Navbar = (props) =>
{

    //Programmatic Redirect use withRouter
    /**setTimeout(() =>
    {
        props.history.push('/about')
    },2000);*/


       return(
            <nav>
            <div className="nav-wrapper">
            <Link to="#" className="brand-logo">PokeTimes</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/todoApp">TodoApp</NavLink></li>       
            </ul>
            </div>
          </nav>
       )
}



export default withRouter(Navbar);