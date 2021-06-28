import React from "react";
import {Card,Button} from "react-bootstrap";

const CardItem=(color)=>(
    <React.Fragment>
        <div className="col-lg-4 col-md-4 col-sm-6 p-2">
            
        <Card  className={color}>
        <Card.Img variant="top" src="assets/img/1.jpg" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </div>
    </React.Fragment>
);

function HomeBodyComponentBlog(props){

    

    return(
        <div className="container-fluid  ">
        <div className="row my-4">
        <h2 className="border-primary py-2 ">Blog</h2>
            {CardItem("bg-primary")}
            {CardItem("bg-primary")}
            {CardItem("bg-primary")}
        </div>
        </div>
    );
}

function HomeBodyComponentGallery(props){
    return(
        <div className="container-fluid  ">
        <div className="row my-4">
        <h2 className="border-primary py-2 ">Gallery</h2>
            {CardItem("bg-dark")}
            {CardItem("bg-dark")}
            {CardItem("bg-dark")}
        </div>
        </div>
    );
}


export  {HomeBodyComponentBlog,HomeBodyComponentGallery};