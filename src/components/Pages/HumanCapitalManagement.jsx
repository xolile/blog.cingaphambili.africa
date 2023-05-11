// import React from 'react'

// const HumanCapitalManagement = () => {
//   return (
//     <div>HumanCapitalManagement</div>
//   )
// }

// export default HumanCapitalManagement

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


const HumanCapitalManagement = () => {
  pageTitle('Service Details');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <PageHeading 
          title='Human Capital Management'
          bgSrc='/images/service_hero_bg.jpeg'
          pageLinkText={params.serviceDetailsId}
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='We Offer The Best Human Capital Management' 
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
            <h2>Staff Recruitment</h2>
            <p>
              As organisations increase usage of digital technologies in their operations, it is important to bring in the right kind of talent. New work models 
              like remote working need to be considered and strategies related to the same need to be implemented.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/images/about_img_2.jpeg" alt="" srcset="" />
          </div>
        </div>
        {/*  */}
        <div className="row align-items-center mt-5 pt-5 ">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>Staff Augmentation</h2>
            <p>
              Employees at each point should be informed about the progress and results of the process while maintaining the requisite transparency. The key point of contact for employees is the HR team and the HRIS being used. Data at every stage has 
              to be properly recorded and made available to the employees for reference, only then will they trust the organisation.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/public/images/commercial.jpeg" alt="" srcset="" />
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

export default HumanCapitalManagement