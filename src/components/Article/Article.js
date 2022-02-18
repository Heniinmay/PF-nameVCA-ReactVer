import React from "react";

const Article = () => {
  return (
    <>
      <section className="about_products container">
        <div className="vca_article_wrap cf">
          <div className="vca_article article1 cf">
            <div className="article_left">
              <h2>Van Cleef &amp; Arpels’ bouquets</h2>
              <p>
                Nature is one of the Maison’s prime sources of inspiration,
                imbuing creations with vitalit and poetic grace.
              </p>
              <div className="sprite btn_bg">More</div>
            </div>
            <div className="article_right">
              <div className="border_ra_round">bouquers</div>
            </div>
          </div>

          <div className="vca_article article2 cf">
            <div className="article_right">
              <h2>The guilloché, a savoir-faire</h2>
              <p>which illuminates Van Cleef & Arpels’ creations</p>
              <div className="sprite btn_bg">More</div>
            </div>
            <div className="article_left">
              <div className="border_ra_tl_br">savoir-faire</div>
            </div>
          </div>
        </div>
        <blockquote>
          <span className="before text">"</span>Arranged in sun-shape, in undulating
          lines or criss-crossed, the striations arouse subtle interplays of
          light.<span className="After text">"</span>
        </blockquote>
      </section>
    </>
  );
};

export default Article;
