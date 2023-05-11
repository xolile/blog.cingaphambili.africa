import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';

export default function OurVisionPage() {
  pageTitle('Our Vision');

  const funfaceData = [
    {
      title: 'Global Happy Clients',
      factNumber: '40K',
    },
    {
      title: 'Project Completed',
      factNumber: '50K',
    },
    {
      title: 'Team Members',
      factNumber: '245',
    },
    {
      title: 'Digital products',
      factNumber: '550',
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Our Vision"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Our Vision"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="We Care About Our Goals & Stick To Our Vision "
              subtitle="Vision Statement"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Cinga Phambili had its genesis in 2015, led by its founder Ms. Sinno Maseko. Cinga 
                Phambili has worked with some amazing organisations helping them grow and cement connections with their employees and customers.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
          
          </Div>
        </Div>
      </Div>
      {/*  */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="What Our Mission Means "
              subtitle="Mission Statement"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Cinga Phambili had its genesis in 2015, led by its founder Ms. Sinno Maseko. Cinga 
                Phambili has worked with some amazing organisations helping them grow and cement connections with their employees and customers.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
          
          </Div>
        </Div>
      </Div>
      <div className="row core-values">
        <div className="col-lg-6">
          <h1>Our Core Values</h1>
          <ul className='values'>
            <li>Excellence</li>
            <li>Innovation</li>
            <li>Community</li>
            <li>Dependability</li>
            <li>Structure</li>
          </ul>
        </div>
      </div>



     

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div> */}
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
