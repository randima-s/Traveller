import { Component } from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

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
            <Navbar bg="dark" expand="lg" variant="dark" expanded={this.state.NavbarExpanded}>
                <div className="container-fluid ">
                <Link to="/" className="navbar-brand">Traveller</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>this.ToggleClick(!this.state.NavbarExpanded)} />
                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="ms-auto text-center">
                    <Link to="/" className="nav-link" onSelect={()=>this.ToggleClick(false)}>Home</Link>
                    <Link to="/blog" className="nav-link" onSelect={()=>this.ToggleClick(false)}>Blog</Link>
                    <Link to="/gallery" className="nav-link" onSelect={()=>this.ToggleClick(false)}>Galley</Link>
                    <Link to="/contact" className="nav-link" onSelect={()=>this.ToggleClick(false)}>Contact</Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        );
    };
}


export default NavbarComponent;