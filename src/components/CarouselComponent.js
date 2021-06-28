import {Component} from "react";
import {Carousel} from "react-bootstrap";


/*const RenderCarouselItem=({location})=>{
    console.log("item rendered");
    return(
        <Carousel.Item key={location.id}>
            <img
            className="d-block w-100"
            src={location.img}
            alt={location.name}
            />
            <Carousel.Caption>
            <h3>{location.name}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};

const RenderCarousel=({locations})=>{
    console.log("item Parent rendered");
    const items=locations.map((locationx)=>{
        return (
                <RenderCarouselItem location={locationx}/>
        );
    });
};*/



class CarouselComponent extends Component{

    constructor(props){
        super(props);

        

        /*const carouselLocations=this.state.locations.filter((location)=>location.carousel===true);
        const items=this.state.locations.map((location)=>{
            return (
                    {<RenderCarouselItem location={location}/>}
            );
        });*/
    }


    render(){
        
        
        const filteredLocations=this.props.locations.filter((location)=>location.carousel===true);
        //console.log(filteredLocations);
        const item=filteredLocations.map((location)=>{
            //console.log("called");
            return(
                <Carousel.Item key={location.id}>
                    <img
                    className={"d-block w-100"}
                    src={location.image}
                    alt={location.name}
                    />
                    <Carousel.Caption>
                    <h3>{location.name}</h3>
                    <p>{location.description}</p>
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
    
}

export default CarouselComponent;