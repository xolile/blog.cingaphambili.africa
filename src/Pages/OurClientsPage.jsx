import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function OurClientsPage() {
  pageTitle('Our Clients');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Our Client"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Our Clients"
      />

      <div className="row  ">
        <div className="col-lg-12">
          <h1 className='our-clients-heading'>When It Comes To our Clients We Are Very Passionate At Delivering Thier Business Needs</h1>
        </div>
        <div className="col-lg-12 ">
          <p className='our-clients-top-paragraph'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam possimus corrupti quis, itaque temporibus corporis, 
            reiciendis laborum suscipit similique, id dolor molestias accusantium eum perspiciatis amet quia maiores ipsa perferendis.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, vitae, qui natus quisquam itaque consequuntur voluptas
            alias fuga asperiores libero dolores doloribus perferendis quidem corporis, optio eveniet ab minima adipisci.
          </p>
        </div>
        <div className="col-lg-12">
          <img src="/public/pexels-fauxels-3182812.jpg" alt="" srcset="" />
        </div>
        <div className="row capabilities-row mt-5 pt-5">
          <h2>Our typical customers work with us to benefit from our unique capabilities in:</h2>
          <div className="col-lg-6 mt-5">
            <h3>Digital Experiences Management:</h3>
            <p>Creating efficient systems to deliver digital experiences across the user’s journey in ways that increase engagement and grow revenue.</p>
          </div>
          <div className="col-lg-6 mt-5">
            <h3>AI-Powered Personalisation:</h3>
            <p>Using personalised, relevant content to differentiate and support users through the power of Artificial Intelligence and Analytics.</p>
          </div>
          <div className="col-lg-6 mt-5">
            <h3>Omnichannel Engagement:</h3>
            <p>Delivering contextual experiences wherever users may be and staying relevant each time.</p>
          </div>
          <div className="col-lg-6 mt-5">
            <h3>Create inspiring experiences</h3>
            <p>Delivering the visually rich, engaging and interactive experiences that users demand.</p>
          </div>
        </div>

      </div>

      {/* Start CTA Section */}
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
