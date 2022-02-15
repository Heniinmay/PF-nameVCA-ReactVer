import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RefContext from "../../contexts/RefContext";
import './Banner.css';

const banners = [
  {
    cn: "perlee_1",
    link: "#perlee",
    left: {
      title: "SIGNITURE :",
      content: "A renewed aesthetic of gleaming beads and golden clovers",
    },
    right: {
      title: "Perlee collection",
      content: "",
      link: "#",
    },
  }, //Slide1
  {
    cn: "ballerina",
    link: "#",
    left: {
      title: "Delicate Ballerinas",
      content:
        "The grace of the movements and elegance of the costumes inspire poetry in these clips.",
      link: "#",
    },
  }, //Slide2
  {
    cn: "frivole",
    link: "#",
    left: {
      title: "frivole",
      content: "Like so many flowers dancing in the breeze.",
      // link: "#",
    },
  }, //Slide3
];

const Banner = () => {
  const [slideIdx, setSlideIdx] = useState(1);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const {collectionRef} = useContext(RefContext);

  useEffect(() => {
    function loopSlider(){
      return setTimeout(() => {
        setSlideIdx(slideIdx + 1 > 3 ? 1 : slideIdx + 1);
      },3500)
    }
    isMouseOver ? clearInterval(loopSlider) : loopSlider();

    return clearInterval(loopSlider); //페이지가 바뀌면 ? 변경 / 페이지 전환시에 Timeout 프로세스를 바꿔준다.
  });

  const handleMouseLeave = () => {
    // 빠져나오면
    setIsMouseOver(false);
  }

  const ScrollDown = () =>{
    collectionRef.current.scrollIntoView({
      behavior:'smooth',
    });
  };

  return (
    <div className="main_banner container"
      onMouseEnter = {()=>{
        setIsMouseOver(true);
      }}
      onMouseLeave ={handleMouseLeave}
    >
      <ul className={`main_banner_slides top${slideIdx}`}>
        {banners.map((banner, index) => (
          <li key={index} className={`slide${index + 1}`}>
            <div className={`page ${banner.cn} container`}>
              <Link to={banner.link} />
              {banner.left === undefined ? (
                ""
              ) : (
                <div className="main_b_left">
                  <h2>{banner.left.title}</h2>
                  <p>{banner.left.content}</p>
                  {banner.left.link === undefined ? (
                    ""
                  ) : (
                    <Link to={banner.left.link} className="arrow_more sprite">
                      to more
                    </Link>
                  )}
                </div>
              )}
              {banner.right === undefined ? (
                ""
              ) : (
                <div className="main_b_right">
                  <h1>{banner.right.title}</h1>
                  {/* right link 있을수도 있고, 없을 수도 있음 */}
                  {banner.right.link === undefined ? (
                    ""
                  ) : (
                    <Link to={banner.right.link} className="arrow_more sprite">
                      to more
                    </Link>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      
      <p className="pager">
        {banners.map((banner,index) => (
          <Link
            to="#"
            className = { slideIdx - 1 === index ? 'active' : ''}
            onClick={() => setSlideIdx(index + 1)}
          >
            {index}
          </Link>
        ))}
      </p>

      <p className="controls">
        <Link to="" className="next" onClick={ScrollDown}>
          <i className="fas fa-angle-double-down"></i>
        </Link>
      </p>
      <div className="main_fixed">alhambra_sig</div>
    </div>
  );
};

export default Banner;
