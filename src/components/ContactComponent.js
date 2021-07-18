import {useEffect }from "react";
import {Row} from "react-bootstrap";
import {baseURL} from "../shared/baseUrl";

function ContactComponent(props){
    
    useEffect (()=>{
        document.title="Traveller Contact"
    });

    return(
        <div>
            <div className="container mt-2 pb-2 bg-dark text-light">
                <h3 className="text-center">Contact</h3>
                <Row className=" m-2  p-2 bg-light text-dark">
                    <div className="col-md-2">
                        <img src={baseURL+"/assets/img/randima.jpg"} className="w-100 rounded" alt="Randima"/>
                    </div>
                    <div className="col-md-6 position-relative">
                        <h4>Randima Senanayaka</h4>
                        <ol className="list-inline">
                            <li className="list-inline-item"><a href="mailto:rmsenanayake@gmail.com"><img src="https://img.icons8.com/fluent/48/000000/gmail.png"/><br/> Email</a></li>
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com/Randima.M.Senanayaka" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/><br/> Facebook
                                </a>
                                </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/randima_senanayaka" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/><br/> Instagram
                                </a>
                                </li>
                        </ol>

                        <div className="position-absolute  bottom-0">
                        <a className="fs-6 text-secondary" href="https://icons8.com/icon/ho8QlOYvMuG3/gmail">Gmail icon by Icons8</a>
                        <a className="fs-6 text-secondary" href="https://icons8.com/icon/uLWV5A9vXIPu/facebook">Facebook icon by Icons8</a>
                        <a className="fs-6 text-secondary" href="https://icons8.com/icon/Xy10Jcu1L2Su/instagram">Instagram icon by Icons8</a>
                        </div>


                    </div>
                </Row>
            </div>
        </div>
    );
}

export default ContactComponent;