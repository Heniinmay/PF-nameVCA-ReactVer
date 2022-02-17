import React from 'react';
import { Link } from 'react-router-dom';

const Arrivals = () => {
    return (
        <>
            <section className="new_arrivals container">
                <div className="sub_title">
                    <h2>New Arrivals</h2>
                    <img src={require('../../assets/img/title_line.png')} alt="" />
                </div>
                <div className="new_things_list cf">
                    <div className="new ring">
                        <Link to="#">
                            <img src={require("../../assets/img/arri_ring.png")} alt="vc_a new ring"/>
                        </Link>
                    </div>
                    <div className="new earr">
                        <Link to="#">
                            <img src={require("../../assets/img/arri_earr.png")} alt="vc_a new earring"/>
                        </Link>
                    </div>
                    <div className="new neck">
                        <Link to="#">
                            <img src={require('../../assets/img/arri_neck.png')} alt="vc_a new necklace"/>
                        </Link>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default Arrivals;