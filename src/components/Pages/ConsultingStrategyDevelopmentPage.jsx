// import React from 'react'
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


const ConsultingStrategyDevelopmentPage = () => {
  pageTitle('Service Details');
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <PageHeading 
          title='Consulting Strategy & Development'
          bgSrc='/images/service_hero_bg.jpeg'
          pageLinkText={params.serviceDetailsId}
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='We Offer The Best Consulting Strategy & Development' 
          subtitle='Consulting Strategy & Development' 
          variant='cs-style1 text-center'
        />

{/*START OF SUB SECTION INFO */}
        <h1 className='mt-5 pt-5 cd-dev-headings'>Consulting & Strategy Development</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sapiente! Animi iusto ullam provident 
            odio unde excepturi temporibus earum culpa, consequatur quae. Quasi quo nostrum magnam reprehenderit quisquam aspernatur quia.
            odio unde excepturi temporibus earum culpa, consequatur quae. Quasi quo nostrum magnam reprehenderit quisquam aspernatur quia.

        </p>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>Customer Experience Consulting</h2>
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
            <h2>Customer Experience Consulting</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/images/about_img_4.jpeg" alt="" srcset="" />
          </div>
        </div>
        {/*  */}
        <div className="row  align-items-center mt-5 pt-5">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>Customer Journey Mapping</h2>
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
            <h2>Roadmap Ideation and Modelling</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/public/images/service_6.jpeg" alt="" srcset="" />
          </div>
        </div>
         {/*  */}
         <div className="row align-items-center mt-5 pt-5">
          <div className="col-lg-6 mt-5 pt-5">
            <h2>Concept Design and Prototyping</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat illum ratione, aut maxime dolor 
                quis commodi itaque earum culpa voluptate eveniet dolorem nihil iusto facilis in tempore consequuntur quisquam doloribus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ipsam aliquid nam eos, nemo debitis repudiandae obcaecati, a
                ut nostrum accusamus sit quidem ipsa ullam asperiores illum iusto commodi placeat. Inventore?
            </p>
          </div>
          <div className="col-lg-6">
            <img src="/images/about_img_3.jpeg" alt="" srcset="" />
          </div>
        </div>
         

{/*END OF SUB SECTION INFO */}


        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_1.svg'
              title='Sketching'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_2.svg'
              title='Wireframing'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/service_icon_3.svg'
              title='Prototyping'
              subtitle='Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium also a doloremque laudantium, totam remain beatae vitae dictaro enim ipsam sunt explicabo.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img src="/images/service_img_1.jpeg" alt="Service" className='cs-radius_15 w-100' />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">Below our most design related services</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='Web page design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='eCommerce design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Landing page' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Email template' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Application design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Illustration' variant='cs-type2'/>
                <Spacing lg='0' md='10'/>
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='/service/service-details' btnText='Infographic design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Mobile apps design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Banner, brochure, card' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='/service/service-details' btnText='Other design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>          
    </div>
  )
}

export default ConsultingStrategyDevelopmentPage

