import React from 'react'

//import files
import "./OurStoryAndPayment.css"
import Heading from "../../Reusable/Heading/Heading"
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const OurStoryAndPayment = ({text,buttonContent}) => {
    return (
        <div className="ourStoryStyling flex flex-col">
            <Heading text={text}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis asperiores voluptas repudiandae delectus eveniet doloremque alias quisquam libero cupiditate consectetur minima dolores provident sed eligendi suscipit, veritatis numquam mollitia laboriosam?
            Iure odio odit illo corporis dignissimos, quidem saepe. Consequatur eius voluptatum autem illo maiores porro hic est possimus, minima voluptas, doloribus sed ipsa id, delectus ab molestias optio? Excepturi, harum.</p>
            {/* button */}
            <Button variant="warning">{buttonContent}</Button>{' '}
        </div>
    )
}

export default OurStoryAndPayment