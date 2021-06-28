 
 import {Card,Col } from "react-bootstrap";

 function HomeCardComponent(props){
    const HomeTiles=props.hometiles.map((tile)=>{
        console.log(11);
        return(
            <Col lg={4} className=" d-none d-lg-block">
            <Card className={tile.color} text="light" border="primary">
            <Card.Header className="text-center ">{tile.title}</Card.Header>
            <Card.Img  src={tile.image} id="HomeCardImg"/>
            </Card>
            </Col>
        );
    })

    return(
        <div className="row w-80 mt-5 " >
            {HomeTiles}
        </div>
    );

 }

 export default HomeCardComponent;