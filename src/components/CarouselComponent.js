
import {Carousel} from "react-bootstrap";

function CarouselComponent(props) {

    const filteredLocations=props.images.filter((location)=>location.carousel===true);
    const item=filteredLocations.map((location)=>{
        return(
            <Carousel.Item key={location.id}>
                <img
                className={"d-block w-100 rounded"}
                src={location.image}
                alt={location.name}
                />
                <Carousel.Caption>
                <h3>{location.name}</h3>
                <h5>{location.description}</h5>
                </Carousel.Caption>
            </Carousel.Item>
        );
    });

    return (
        <Carousel >
            {item}
        </Carousel>
    ); 
}

export default CarouselComponent;