import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RefContext from "../../contexts/RefContext";

const vac_colls = [
    {
        cn:'vca_coll_1',
        src : require("../../assets/img/coll_main.png"),
        alt : 'vintage Alhambra ring',
        prdName : 'vintage Alhambra R.',
},
    {
        cn:'vca_coll_2',
        src : require("../../assets/img/coll_2nd_l.png"),
        alt : 'magic Alhambra between ring',
        // prdName : 'Magic Alhambra Between R.',
},
    {
        cn:'vca_coll_3',
        src : require("../../assets/img/coll_3rd_l.png"),
        alt : 'Perlee Diamond ring',
        // prdName : 'Perlee Diamond R.',
},
    {
        cn:'vca_coll_4',
        src : require("../../assets/img/coll_2nd_r.png"),
        alt : 'magic Alhambra between ring',
        // prdName : 'Magic Alhambra Between R.',
},
    {
        cn:'vca_coll_5',
        src : require("../../assets/img/coll_3rd_r.png"),
        alt : 'Perlee sweet clovers ring',
        // prdName : 'Perlee sweet clovers R.',
},
]
const Collection = () => {
    const { collectionRef } = useContext(RefContext); //RefContext.js 파일 안에 있는 collectionRef변수

    //react는 ref, 일단 변수를 만들고
    //엘리먼트로 와서 여기 '이 곳'에 그 변수를 쓸거라고 지정(매칭)해준다.

  return (
    <section className="collection container" ref={collectionRef}>
      <div className="small_logo">sub_logo</div>
      <div className="sub_title">
        <h2>Collection</h2>
        <img src={require("../../assets/img/title_line.png")} alt="" />
      </div>
      <div className="collection_slides_wrapper container">
        <ul className="collection_slides container">
        {vac_colls.map((vac_coll, index) => (
          <li key={index} className={vac_coll.cn}>
            <img src={vac_coll.src} alt={vac_coll.alt} />
            {vac_coll.prdName ? <p>{vac_coll.prdName}</p> : ''}
          </li>
        ))}
        </ul>
        <div className="controls">
          <Link to="">
            <i className="fas fa-chevron-circle-left"></i>
          </Link>
          <Link to="">
            <i className="fas fa-chevron-circle-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collection;
