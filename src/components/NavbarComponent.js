import { Component } from "react";
import {Navbar,Nav} from "react-bootstrap";


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
                <Navbar.Brand href="/">Traveller</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>this.ToggleClick(!this.state.NavbarExpanded)} />
                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="ms-auto text-center">
                    <Nav.Link href="/" onSelect={()=>this.ToggleClick(false)}>Home</Nav.Link>
                    <Nav.Link href="/blog" onSelect={()=>this.ToggleClick(false)}>Blog</Nav.Link>
                    <Nav.Link href="/gallery" onSelect={()=>this.ToggleClick(false)}>Galley</Nav.Link>
                    <Nav.Link href="/contact" onSelect={()=>this.ToggleClick(false)}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        );
    };
}


/*class NavbarComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            NavbarExpanded:false
        }
    }

    ToggleClick=()=>{
        this.setState(()=>{return {NavbarExpanded:!this.state.NavbarExpanded}});
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );
    };
}*/

export default NavbarComponent;