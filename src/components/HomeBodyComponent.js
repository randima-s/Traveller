//import {Link} from "react-router-dom";
import { NavHashLink  as Link }  from "react-router-hash-link";
import {Card} from "react-bootstrap";

function HomeBodyComponent(props){
    const linkStyle={
        textDecoration:"none"
    };

    const CardItem=props.cards.map((card)=>{
        return(
        <div className="col-lg-2 col-md-3 col-sm-4 pb-4  align-items-stretch" key={card.id} >
        
        <Card  bg="light">
        <Link to={card.link+"#top"} ><img  src={card.image} alt={card.title} className="d-block rounded-circle w-50 mx-auto" /></Link>
        <Card.Body className="text-center">
            <Link to={card.link} style={linkStyle}><Card.Title >{card.title}</Card.Title></Link>
            <Card.Text>{card.desc}
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        );
    });

    return(
        <div className="container-fluid p-0 ">
        <h2 className=" py-2 ms-2 ">Explore</h2>
        <div className="row my-2 justify-content-around ">
        {CardItem}
        </div>
        </div>
    );
}



export  {HomeBodyComponent};