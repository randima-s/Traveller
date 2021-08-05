import { useState } from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {baseURL} from "../shared/baseUrl";
import {signOut} from "../firebase/auth";

function NavbarComponent(props){

    const [navbarExpanded,setNavbarExpanded]=useState(false);

    const toggleClick=(newState)=>{
        setNavbarExpanded(newState);
    }

    const handleLogOutClick=()=>{
        signOut();
    }

    return(
        <Navbar style={{backgroundColor:"black"}} expand="lg" variant="dark" expanded={navbarExpanded} >
            <div className="container ">
                <Link to="/" className="navbar-brand" ><img src={baseURL+"/assets/img/logo.png"} alt="Traveller"/></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>toggleClick(!navbarExpanded)} />
                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="me-auto text-center">
                        {props.user.user &&<div className="text-light">Welcome {props.user.user.displayName}</div>}
                    </Nav>
                    <Nav className="ms-auto text-center" onClick={()=>toggleClick(false)}>
                    <Link to="/" className="nav-link" >Home</Link>
                    <Link to="/blog" className="nav-link" >Blog</Link>
                    <Link to="/gallery" className="nav-link" >Galley</Link>
                    <Link to="/contact" className="nav-link" >Contact</Link>
                    {props.user.isLoggedIn?(<Link to="/" className="nav-link" onClick={handleLogOutClick}>Log Out</Link>):(<Link to="/login" className="nav-link">Sign In</Link>)}
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavbarComponent;