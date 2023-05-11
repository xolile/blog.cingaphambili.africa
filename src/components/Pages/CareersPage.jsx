import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Cta from '../Cta';
import Div from '../Div';
import PageHeading from '../PageHeading';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

export default function CareersPage() {
  pageTitle('Careers');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="Careers"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Careers"
      />

      <div className="row  ">
        <div className="col-lg-12">
          <h1 className='our-clients-heading'>Come join our team of young, talented, and energetic individuals!</h1>
        </div>
        <div className="col-lg-12 ">
          <p className='our-clients-top-paragraph'>
            We are a high performing, cohesive team with strong leadership. We collaborate with organisations and often construct combined teams with our clients to help drive digital transformation from within. 
            We believe that great brands have the power to change lives, ignite the imagination, affect culture and generate positive behaviour.
          </p>
        </div>
        <div className="col-lg-12">
          <img src="/public/pexels-andrea-piacquadio-789822.jpg" alt="" srcset="" />
        </div>
        <div className="row mt-5 pt-5">
            <div className="col-lg-6">
                <p className='careers-paragraph'>We are agile, eager, passionate about disruptive digital technologies, outcome-driven and above all, ignited by our imagination.</p>
            </div>
            <div className="col-lg-6">
                <img src="/public/pexels-canva-studio-3153198.jpg" alt="" srcset="" />
            </div>
        </div>
        {/*  */}
        <div className="row mt-5 pt-5 align-center">
            <div className="col-lg-6">
                <p className='careers-paragraph'>We work closely with our customers to build engaging digital experiences across all platforms and user touch points.</p>
            </div>
            <div className="col-lg-6 align-items-center">
                <img src="/public/images/about_img_5.jpeg" alt="" srcset="" />
            </div>
        </div>
        {/*  */}
        <div className="row mt-5 pt-5 align-items-center">
            <div className="col-lg-6">
                <p className='careers-paragraph'>Working across platforms, disciplines and industries, our approach is based on a deep understanding of the interplay between design, technology and the needs of our clients</p>
            </div>
            <div className="col-lg-6 align-center">
                <img src="/public/images/about_img_4.jpeg" alt="" srcset="" />

            </div>
        </div>
        {/*  */}
        {/* <div className="row mt-5 pt-5 align-items-center">
            <div className="col-lg-6">
                <p className='careers-paragraph'>If this sounds like a team you would like to join, please complete and submit the below Employment Application form, remembering to attach your curriculum vitae in either PDF, or MS Word format (max 5MB upload).</p>
            </div>
            <div className="col-lg-6">
                <img src="/public/pexels-canva-studio-3153198.jpg" alt="" srcset="" />
            </div>
        </div> */}

      </div>

      {/* ************************************************************Career Application Form ********************************************************************************* */}
        <div className="container form-container">
            <div className="row form-row">
            <h4 className="mt-5 pt-5">
                If this sounds like a team you would like to join, please complete and submit the below Employment Application form, remembering to attach your curriculum vitae in either PDF, or MS Word format (max 5MB upload).
            </h4>

                <form className="application-form" action="">
                    <div className="row input-row">
                        <div className="col-lg-12 input-container">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" placeholder='First Name' id="first-name" required/>
                        </div>
                        <div className="col-lg-12 input-container">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" placeholder='Last Name' id="last-name" required/>
                        </div>
                        <div className="col-lg-12 input-container">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder='example@email.com' id="email" required/>
                        </div>
                        <div className="col-lg-12 input-container">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="tel" name="" id="telephone" />
                        </div>
                        <div className="col-lg-12 input-container">
                            <label htmlFor="comments">Comments</label>
                            <input type="text" name="" id="comments" height={400} />
                        </div>
                        <div className="col-lg-12 input-container">
                            <label htmlFor="cv">Upload Your CV</label>
                            <input type="file" name="" id="cv"/>
                        </div>
                        <div className="col-lg-12 input-container">
                            {/* <label htmlFor="submit"></label> */}
                            <input type="submit"  id="submit" className='btn-submit'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>       

      {/* ************************************************************Bootstrap Downloaded Form ********************************************************************************* */}

      {/* Start CTA Section */}
      {/* <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
      {/* End CTA Section */}
    </>
  );
}
