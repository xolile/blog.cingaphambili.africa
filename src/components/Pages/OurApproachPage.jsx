import React, { useEffect, useState } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function OurApproachPage() {
  pageTitle('Case Study Details');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab,setActiveTab] = useState(true);

  const tabStyle = {
    color :  "#3abddb"
  }
  const handleTab = () => {
    setActiveTab(!activeTab)
  }
  return (
    <>
      <PageHeading
        title="Our Approach"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Case Study Details"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Importance of storytelling and influencer marketing in social media marketing"
          subtitle="Our Approach"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <img
          src="/images/case_study_img_1.jpeg"
          alt="Thumb"
          className="w-100 cs-radius_15"
        />
        <Spacing lg="140" md="80" />
        <h2 className="cs-font_38 text-center">Case Study Overview</h2>
        <Spacing lg="60" md="45" />
        <p className="cs-m0">
            Experience is whatever the user perceives it to be, and as an organisation you can’t control it completely. 
            What you can do is influence that experience by being very intentional about where and how you deliver what 
            the users need to achieve their desired outcomes. The challenge is to manage the complexity of multiple touchpoints 
            across a number of different platforms or systems which make up the typical user experience.
            It goes without saying that great planning and articulation of the business and user needs is half the work done. 
            Based on our deep design and technical experience, we have crafted the CPx framework to provide a calibrated approach to every engagement, be it big or small.
            The CPx Framework is our inhouse framework that is leveraged across all client projects. It unlocks your business 
            requirements to accelerate digital transformation and deliver digital experiences that grow user satisfaction.
        </p>
        <Spacing lg="65" md="45" />
        <Div className="row">
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_2.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_3.jpeg"
              alt="Thumb"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg="125" md="55" />
      </Div>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
        <Div className="cs-shape_2"></Div>
        <Div className="cs-shape_2"></Div>
        <Div className="container">
          <Spacing lg="145" md="80" />
          <h2 className="cs-font_38 text-center">Case Study Research</h2>
          <Spacing lg="90" md="45" />
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <h3 className="cs-font_30 cs-m0">Marketing strategy</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                Our goal perspiciatis unde omnis iste natus error sit voluptatem
                bolaru accusantium voltire doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem. <br />
                <br />
                Most cases aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsum
                quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore.
              </p>
            </Div>
            <Div className="col-lg-6 offset-lg-1 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_4.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
          <Spacing lg="100" md="80" />
          {/* <Div className="row align-items-center">
            <Div className="col-lg-6 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_5.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <h3 className="cs-font_30 cs-m0">Branding guideline</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                Our goal perspiciatis unde omnis iste natus error sit voluptatem
                bolaru accusantium voltire doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem. <br />
                <br />
                Most cases aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsum
                quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore.
              </p>
            </Div> */}
          {/* </Div> */}
          <Spacing lg="150" md="80" />
        </Div>
      </Div>
      <Spacing lg="140" md="80" />
      <Div className="container text-center">
        <Div className="row col-lg-10 offset-lg-1">
          <h2 className="cs-font_38 cs-m0">Result of The Case Study</h2>
          <Spacing lg="60" md="45" />
          <p className="cs-m0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium voltire doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo inventore veritatis et quasi architecto beatae
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit asperna aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad nima veniam, quis nostrum exercitationem
            ullam corporis suscipit.Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Ipsum quia dolor sit
            amet, consectetur
          </p>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />

{/* CPx FramWork */}    
      <h2>The CPx FrameWork</h2>
      <div className="row cpx">
        <div className="col-lg-4">
            <h4>Assess</h4>
            <p>Assess your current customer experience and technology posture across all digital properties</p>
        </div>
        <div className="col-lg-4">
            <h4>Define</h4>
            <p>Define a digital transformation roadmap to capture the business requirements</p>
        </div>
        <div className="col-lg-4">
            <h4>Develop</h4>
            <p>Develop the front-end and back-end systems and technologies to bring the digital strategy to life</p>
        </div>
      </div>
      <div className="row cpx">
        <div className="col-lg-4">
            <h4>Deploy</h4>
            <p>Deploy all the technologies and design elements together after thorough QA and user testing</p>
        </div>
        <div className="col-lg-4">
            <h4>Design</h4>
            <p>Design fit-for purpose digital systems with appropriate and engaging user experiences</p>
        </div>
        <div className="col-lg-4">
            <h4>Support</h4>
            <p>Support the deployed components to ensure the digital experience ecosystem meets its stated business objectives</p>
        </div>
      </div>

{/* UNDERSTADING THE CPX FRAMEWORK */}
    <div>
        
        <div className='cpx-framework'>
          <h2>Understanding the CPx Framework</h2>
          <p>
              Our CPx framework consists of the following stages that are leveraged as a whole or as individual modules depending on the engagement model.
          </p>
        <ul className='tab-items'>
            {/* <li onClick={handleTab} style={{activeTab ? borderColor:"#fff" : ""}}>Assess</li> */}
            <li className={activeTab ? ".active-tab" : "" }>NEW</li>
            <li>Define</li>
            <li>Design</li>
            <li>Develop</li>
        </ul>
        </div>

        <div className="assess">
            <h3>Asess</h3>
            <p>Assess your current digital systems and media properties across your entire technology ecosystem.</p>
            <h5>This stage involves mapping out the:</h5>            
            <ul>
                <li>Design and user experience consistency across all the digital systems and media properties</li>
                <li>Legacy systems and data, and their existing integrations</li>
                <li>Number and maturity of existing of online and offline digital touchpoints</li>
            </ul>
            <h5>Outcome: Overall digital maturity assessment score and areas of improvement.</h5>
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
