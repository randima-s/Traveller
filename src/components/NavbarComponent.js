import { useState } from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {baseURL} from "../shared/baseUrl";

function NavbarComponent(props){

    const [navbarExpanded,setNavbarExpanded]=useState(false);

    const toggleClick=(newState)=>{
        setNavbarExpanded(newState);
    }

    return(
        <Navbar style={{backgroundColor:"black"}} expand="lg" variant="dark" expanded={navbarExpanded} >
            <div className="container ">
                <Link to="/" className="navbar-brand" ><img src={baseURL+"/assets/img/logo.png"} alt="Traveller"/></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>toggleClick(!navbarExpanded)} />
                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="ms-auto text-center" onClick={()=>toggleClick(false)}>
                    <Link to="/" className="nav-link" >Home</Link>
                    <Link to="/blog" className="nav-link" >Blog</Link>
                    <Link to="/gallery" className="nav-link" >Galley</Link>
                    <Link to="/contact" className="nav-link" >Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default NavbarComponent;