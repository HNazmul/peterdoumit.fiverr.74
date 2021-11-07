import React from 'react';
import SECTION_BG from "../../Images/handshake.jpg";

const Business = () => {


    return (
        <section id="business">
            <div className="container-xxl text-center">
                <h1 className="display-1 fw-bold text-light">Lorem, ipsum dolor.</h1>
                <button className="mt-4 btn btn-outline-light border-3 fs-4">Call Us now</button>
            </div>
            
            
            <img src={SECTION_BG} alt="" className="section-bg" />
        </section>
    );
};

export default Business;