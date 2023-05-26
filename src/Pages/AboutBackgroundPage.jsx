import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';

export default function AboutBackgroundPage() {
  pageTitle('About');

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
        title="Background"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Background"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Learn Our Past To See The Future"
              subtitle="Our Background"
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

          {/* Background content */}
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-lg-12">
            <img src="/public/pexels-andrea-piacquadio-789822.jpg" alt=""  />
          </div>
          <div className="col-lg-12 mt-5 mt-5 background-container">
            <p>
              <span>Cinga Phambili</span>  builds digital experiences and implements goal-oriented disruption by combining strategic 
              vision, product innovation and emerging technologies. Simply put, we are a digital strategy, design and development specialist.
            </p>
            <p>
              Our goal is to help you be successful by sharing and utilising our expertise. Browse our site to learn more about the services we provide. Our offerings are designed to help you work through today's complex business challenges. We are firm believers
              in the concept that "knowledge is power". Our people are always first rate and our technology is leading edge. Let us help you.
            </p>
          </div>
          <div className="col-lg-12 background-container">
            <img src="/public/images/about_img_3.jpeg" alt="" srcset="" />
            <p className='mt-5 pt-5'>
              We are agile, eager, passionate about disruptive digital technologies, outcome-driven and above all, ignited by our imagination. We work closely with our clients to build digital systems and interactive media properties across all platforms and user touch points. Working across platforms, disciplines and 
              industries, our approach is based on a deep understanding of the interplay between design, technology and the needs of our clients.
            </p>
          </div>

        </div>
      </div>



     

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
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
