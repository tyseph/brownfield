import React from "react";
import image from "../../elements/10134.jpg"
const SectionOne = () => {

    return (
        <div className="sectionOne relative"> 
            <section className="left-section" data-aos="fade-right" data-aos-duration="1500">
                <div className="h1">
                    <h1>Where would you</h1>
                    <h1>like to go</h1>
                </div>
            </section>
            <section className="right-section" data-aos="flip-left" data-aos-duration="1500">
                <img src={image} />
            </section>
        </div>
    )
}

export default SectionOne;