import React from 'react';
import { Link } from 'react-router-dom';

const AboutVca = () => {
    return (
        <div>
            <section className="about_Vca">
        <div className="sub_title">
            <h2>Van Cleef &amp; Arpel</h2>
            <img src={require("../../assets/img/title_line.png")} />
        </div>
        <div className="About_Vca_wrap">
            <div className="contents container">
                <div className="cf">
                    <div className="vca_imgs container">
                        <img src={require("../../assets/img/vca_couple.png")} alt="vancleefarpel_wedding" />
                    </div>
                    <div className="about_story_wrap cf container">
                        <div className="about_story">
                            <h2>Estelle Arpels and Alfred Van Cleef</h2>
                            <h3>A Love Story : Once upon a time, there was a story of love and precious stones.</h3>
                            <p> It all started in 1895, in the heart of Paris, with the marriage of Estelle Arpels,
                                daughter of
                                a dealer in precious stones, and Alfred Van Cleef, son of a lapidary. The young couple
                                shared
                                the same values: a spirit of enthusiasm and innovation, a sense of family and a passion
                                for
                                precious stones.</p>
                            <Link to="" className="view_more">View more</Link>
                            <Link to="" className="view_arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default AboutVca;