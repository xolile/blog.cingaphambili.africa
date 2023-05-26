import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import FunFact from '../FunFact';
import PageHeading from '../PageHeading';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import TeamSlider from '../Slider/TeamSlider';
import Spacing from '../Spacing';

export default function WhatWeDoPage() {
  pageTitle('What We Do');

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
        title="What We Do"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText="What We Do"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}

        <div className="container what-we-do">
            <div className="row text-row">
                <h1></h1>
                <p>
                    <span>Cinga Phambili</span>  brings you expertise around building compelling digital systems and interactive
                    media through an approach that’s simple, practical and engaging.
                    We help you create a digital experience that is consistent, differentiated and converts thought into
                    action. By leveraging AI, data analytics and our proprietary CPx Framework, we help you achieve
                    improved digital adoption by aligning technology solutions with your business objectives.
                    Our people create digital systems and interactive media properties, both large and small, across a
                    range of sectors; and we have enough experience for long enough to know what works … and what
                    doesn’t
                </p>
            </div>
            <div className="row our-solutions align-items-center">
                <div className="col-lg-12">
                    <h2>Consulting & Strategey Development</h2>
                    <p>
                        Products and services are what runs your business in order to generate revenue. Because they form
                        the basis of your business operations, it is important to take a calculated, strategic approach to
                        designing your digital products and services. Service design is the coordination and combination of
                        people, processes, and material components to create a winning service. Product design is the
                        combination of manufacturing capabilities with product and business knowledge to transform ideas
                        into physical and useful objects.
                    </p>
                </div>
                <div className="col-lg-12">
                    <ul className='service-list'>
                        <li>
                            <img src="/public/icons/idea.png" alt="icon" />
                            Customer Exerience Consulting
                        </li>
                        <li>
                            <img src="/public/icons/pen.png" alt="icon" />
                            Customer Journey Mapping
                        </li>
                        <li>
                            <img src="/public/icons/idea.png" alt="icon" />
                            Roadmap Ideation and Modelling
                        </li>
                        <li>
                            <img src="/public/icons/pen.png" alt="icon" />
                            Concept Design and Prototyping
                        </li>
                    </ul>
                </div>
                <p>
                    Clients often come to us with various digital requirements, but have disorganised product and
                    service offerings, with an unclear digital strategy. If you aren’t clearly communicating the benefits of
                    your products and services, you are losing sales and revenue. If you don’t have clear product or
                    service positioning with successful differentiation, a large percentage of potential customers will
                    choose your competitors over you. Don’t make that mistake.
                </p>
            </div>
            {/* Digital Technology Development Row */}
            <div className="row our-solutions">
                <div className="col-lg-6">
                    <h2>DIGITAL TECHNOLOGY DEVELOPMENT</h2>
                    <p>
                        The digital revolution has ushered in transformative changes to the ways we learn, work and play,
                        causing a ripple effect across social and economic spheres. Mobile phones and internet technologies
                        are being used positively by every demographic to access information resources, in order to increase
                        productivity and to impact change. The same technologies are also used in many other fields such as
                        surveillance, medicine, banking, entertainment, food and beverage, and much more.
                    </p>
                </div>
                <div className="col-lg-6">
                    <ul className='service-list'>
                        <li>
                            <img src="/public/icons/pen.png" alt="icon" />
                            UI / UX Development
                        </li>
                        <li>
                            <img src="/public/icons/idea.png" alt="icon" />
                            Website Design and Development
                        </li>
                        <li>
                            <img src="/public/icons/pen.png" alt="icon" />
                            Mobile App Development
                        </li>
                        <li>
                            <img src="/public/icons/idea.png" alt="icon" />
                            Full Stack Development
                        </li>
                        <li>
                            <img src="/public/icons/pen.png" alt="icon" />
                            Interactive Media Development
                        </li>
                        <li>
                            <img src="/public/icons/idea.png" alt="icon" />
                            QA & Testing
                        </li>
                    </ul>
                   
                </div>
                <p>
                    Our cutting-edge development processes have seen us work with multiple industries, using best
                    practice to develop digital solutions that harnesses the power of connectivity, data analytics,
                    artificial intelligence, and various other emerging technologies. Get in touch with us today to find
                    out more about how digital technologies can be used to augment your business processes.
                </p>
            </div>  
            {/* HUMAN CAPITAL MANAGEMENT Row */}
            <div className="row our-solutions">
                <div className="col-lg-6">
                    <h2>HUMAN CAPITAL MANAGEMENT</h2>
                    <p>
                        Human Capital is considered a centrepiece to digital transformation success as it leads organisations
                        towards having empowered employees that adopt a digital mindset to improve workforce processes
                        and increase productivity. The digital transformation journey requires the mindsets across the
                        organisation to be changed, and this change begins with the HR transformation, after all, it is the
                        company’s workforce that engages with digital technologies and properties on a daily basis to drive
                        the organisation forward.
                    </p>
                </div>
                <div className="col-lg-6">
                    <ul className='service-list'>
                        <li>
                            <img src="/public/icons/pen.png" alt="icon" />
                            Staff Recruitment
                        </li>
                        <li>
                            <img src="/public/icons/idea.png" alt="icon" />
                            Staff Augmentation
                        </li>
                        <li>
                            <img src="/public/icons/pen.png" alt="icon" />
                            Performance Management
                        </li>
                        <li>
                            <img src="/public/icons/idea.png" alt="icon" />
                            Concept Design and Prototyping
                        </li>
                    </ul>
                </div>
                <p>
                    For digital transformation, cultural change is as important as technology. Without a strong skilled
                    workforce, it is very rare that the organisation will be successful. It is the HR systems in place that
                    have to ensure that each and every team member is adequately trained to meet the challenges
                    ahead.
                </p>
            </div>  
        </div>


      {/* <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="Cinga Phambili"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Cinga Phambili brings you expertise around building compelling digital systems and interactive
                media through an approach that’s simple, practical and engaging.
                We help you create a digital experience that is consistent, differentiated and converts thought into
                action. By leveraging AI, data analytics and our proprietary CPx Framework, we help you achieve
                improved digital adoption by aligning technology solutions with your business objectives.
                Our people create digital systems and interactive media properties, both large and small, across a
                range of sectors; and we have enough experience for long enough to know what works … and what
                doesn’t.
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
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/about_img_2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/about_img_3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" /> */}
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/about_img_4.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly experienced pepole with us"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining. Through our years of experience, we’ve also learned
                that while each channel.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                This is the main factor that sets us apart from our competition
                and allows us to deliver a specialist business consultancy
                service. Our team applies its wide-ranging experience to
                determining.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

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
