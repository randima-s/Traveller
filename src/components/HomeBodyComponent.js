import React from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

function HomeBodyComponent(props){
    const linkStyle={
        textDecoration:"none"
    };

    const CardItem=props.cards.map((card)=>{
        return(
        <React.Fragment>
        <div className="col-lg-4 col-md-4 col-sm-12 pb-4" >
        
        <Card  bg="light">
        <a href={card.link}><Card.Img variant="top" src={card.image}  /></a>
        <Card.Body>
            <a href={card.link} style={linkStyle}><Card.Title >{card.title}</Card.Title></a>
            <Card.Text>{card.desc}
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
        </React.Fragment>
        );
    });

    return(
        <div className="container-fluid p-0 ">
        <div className="row my-2 ">
        <h2 className="border-primary py-2 ms-2 bg-light">Explore</h2>
        {CardItem}
        </div>
        </div>
    );
}



export  {HomeBodyComponent};