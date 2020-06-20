import React from 'react';
import NotFoundImage from '../images/notfound.png'

const NotFound = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                 <img id="notFound" src={NotFoundImage} alt="Not Found" />
            </div>
        </div>
    )
}

export default NotFound;