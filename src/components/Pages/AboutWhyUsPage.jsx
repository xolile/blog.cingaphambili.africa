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
        title="Why Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="Why Choose Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Why Us? Lets Find Out! "
              subtitle="Why Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                  We are a high performing, cohesive team with strong leadership. We collaborate with organisations and often 
                  construct combined teams with our clients to help drive digital transformation from within. 
                  We believe that great people and fit-for-purpose software systems have the power to positively change 
                  organisational processes and improve profitability.
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
                We are agile, eager, passionate about disruptive digital technologies, outcome-driven and above all, ignited by our imagination. 
                We work closely with our clients to build engaging user experiences across all platforms and touch points. 
                Working across platforms, disciplines and industries, our approach is based on a deep understanding 
                of the interplay between design, technology and the needs of our clients.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/about_img_4.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
          
          </Div>
        </Div>
      </Div>
      <div className="row our-advantages mt-5 pt-5">
        <div className="col-lg-12">
          <h1>The Cinga Phambili advantage can be summarised as:</h1>
          <ul className='advantages'>
            <li>We are able to quickly gain deep and accurate insights into our client’s requirements in a way that can unlock their business performance.</li>
            <li>We uncover the important user touchpoints and moments of interaction that influence user perceptions and the adoption of digital systems</li>
            <li>We are well versed in system design to understand the personal and emotional elements of the user experience.</li>
            <li>We create a central, consistent, and accurate view of the user experience</li>
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
