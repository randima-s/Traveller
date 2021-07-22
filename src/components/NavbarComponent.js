import { Component } from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {baseURL} from "../shared/baseUrl";

class NavbarComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            NavbarExpanded:false
        }
    }

    ToggleClick=(newState)=>{
        this.setState({NavbarExpanded:newState});
    }

    render(){
        return(
            <Navbar style={{backgroundColor:"black"}} expand="lg" variant="dark" expanded={this.state.NavbarExpanded} >
                <div className="container ">
                <Link to="/" className="navbar-brand" ><img src={baseURL+"/assets/img/logo.png"} alt="Traveller"/></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>this.ToggleClick(!this.state.NavbarExpanded)} />
                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="ms-auto text-center">
                    <Link to="/" className="nav-link" onClick={()=>this.ToggleClick(false)}>Home</Link>
                    <Link to="/blog" className="nav-link" onClick={()=>this.ToggleClick(false)}>Blog</Link>
                    <Link to="/gallery" className="nav-link" onClick={()=>this.ToggleClick(false)}>Galley</Link>
                    <Link to="/contact" className="nav-link" onClick={()=>this.ToggleClick(false)}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        );
    };
}


export default NavbarComponent;