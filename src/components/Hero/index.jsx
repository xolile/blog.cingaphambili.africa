import React from 'react';
import parse from 'html-react-parser';
import './hero.scss';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div className="hero-cp-paragraph">
              {/* <Button btnLink={btnLink} btnText={btnText} /> */}
              <p>
                Do you require a partner to solve your technology and media challenges with efficient, engaging digital solutions?
              </p>
              <p>
                Cinga Phambili delivers through innovative service and product architecture, user-focused design and cutting-edge digital engineering
              </p>
              


            </Div>
            <Div>
              <Div className="cs-hero_subtitle hero-cp-paragraph">
                {/* {subtitle} */}
                <p>
                  Expand your digital transformation opportunities with a reliable and innovative technical partner.
                </p>
                <p>
                  We make use of leading technologies and processes to ensure your organisation deploys effective digital systems and interactive media
                </p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} /> */}
      {/* <a href={scrollDownId} className="cs-down_btn">
        .
      </a> */}
    </Div>
  );
}
