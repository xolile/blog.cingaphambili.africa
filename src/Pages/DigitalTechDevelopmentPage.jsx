import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Accordion from '../Accordion'
import Button from '../Button'
import Cta from '../Cta'
import IconBox from '../IconBox'
import PageHeading from '../PageHeading'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'


const DigitalTechDevelopmentPage = () => {
  pageTitle('Service Details');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <PageHeading 
          title='Digital Technology & Development'
          bgSrc='/images/service_hero_bg.jpeg'
          pageLinkText={params.serviceDetailsId}
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='We Offer The Best Digital Technology & Development' 
          subtitle='Consulting Strategy & Development' 
          variant='cs-style1 text-center'
        />

{/*START OF SUB SECTION INFO */}


{/* ********************************************************** Digital Tech & Development ***************************************************************/}
<h1 className='mt-5 pt-5 cd-dev-headings'>DIGITAL TECHNOLOGY DEVELOPMENT</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sapiente! Animi iusto ullam provident 
            odio unde excepturi temporibus earum culpa, consequatur quae. Quasi quo nostrum magnam reprehenderit quisquam aspernatur quia.
            odio unde excepturi temporibus earum culpa, consequatur quae. Quasi quo nostrum magnam reprehenderit quisquam aspernatur quia.

        </p>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>UI/ UX Development</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/images/about_img_2.jpeg" alt="" srcset="" />
          </div>
        </div>
        {/*  */}
        <div className="row align-items-center mt-5 pt-5 ">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>Website Design and Development</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/public/images/commercial.jpeg" alt="" srcset="" />
          </div>
        </div>
        {/*  */}
        <div className="row  align-items-center mt-5 pt-5">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>Mobile App Development</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/public/images/service_4.jpeg" alt="" srcset="" />
          </div>
        </div>
        {/*  */}
        <div className="row  align-items-center mt-5 pt-5">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>Full Stack Development</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/public/images/service_3.jpeg" alt="" srcset="" />
          </div>
        </div>
         {/*  */}
         <div className="row  align-items-center mt-5 pt-5">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>Interactive Media Development</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/public/images/service_2.jpeg" alt="" srcset="" />
          </div>
        </div>
         {/*  */}
         <div className="row  align-items-center mt-5 pt-5">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>QA & Testing</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/public/images/service_5.jpeg" alt="" srcset="" />
          </div>
        </div>
         

{/*END OF SUB SECTION INFO */}


      
        <Div className="container">
          <Cta 
            title='Let’s disscuse make <br />something <i>cool</i> together' 
            btnText='Apply For Meeting' 
            btnLink='/contact' 
            bgSrc='/images/cta_bg.jpeg'
          />
        </Div>
      </Div>          
    </div>
  )
}

export default DigitalTechDevelopmentPage