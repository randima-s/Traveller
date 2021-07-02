import {useEffect }from "react";

function ContactComponent(props){
    
    useEffect (()=>{
        document.title="Traveller Contact"
    });

    return(
        <div>
            <div className="container-fulid">
                <h2 className="text-center">Contact</h2>
                <a href="mailto:rmsenanayake@gmail.com"><p className="text-center">rmsenanayake@gamil.com</p></a>
            </div>
        </div>
    );
}

export default ContactComponent;