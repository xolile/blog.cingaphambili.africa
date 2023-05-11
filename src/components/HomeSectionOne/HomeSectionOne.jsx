import React from 'react'

const HomeSectionOne = () => {
  return (
    <div>
        <div className="container home-section-one-container">
            <div className="row home-section-one mb-5 pb-5">
                <div className="col-lg-6">
                    <h1>Reshaping Digital Experiences</h1>
                </div>
                <div className="col-lg-12">
                    <p>
                        We solve business challenges by crafting superior solutions through innovative user-focused design, 
                        forward-looking product architecture and leading-edge digital engineering.
                    </p>
                </div>
            </div>
            <div className="row justify-content-center align-items-center home-row mt-5 ">
                <div className="col-lg-6">
                    <p>
                        Cinga Phambili is a team of creative and talented professionals who understand the 
                        importance of high-quality work. We have worked 
                        on numerous projects and contributed vastly to the technology success of many of our customers.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="/public/pexels-fauxels-3184360.jpg"/>
                </div>
                {/*  */}
            </div>
            <div className="row justify-content-center align-items-center home-row mt-5">
                <div className="col-lg-6">
                    <img src="/public/pexels-canva-studio-3153207.jpg" alt="" srcset="" />
                </div>
                <div className="col-lg-6">
                    <p>
                        We work to design and develop digital systems and interactive media properties that are 
                        responsive to the user and the environment, able to shape-shift and stay relevant to changing customer needs. Be it implementing digital transformation across the enterprise to become innovative, developing 
                        websites and mobile apps, or recruiting the right technology staff for your project or organisation, 
                        we can do it.
                    </p>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-12">
                    <p className='quote'>
                        "To ask the right question is already half the solution of a problem." -Carl Jung
                    </p>
                </div>
                {/* image here */}
                <div className="col-lg-12">
                    <img src="/pexels-canva-studio-3153198.jpg" alt="" srcset="" />
                </div>
                <div className="col-lg-12 mt-5 home-p">
                    <p>
                        Cinga Phambili brings you expertise around building compelling digital experiences, 
                        through an approach that’s simple, practical, engaging and entrenched in digital.
                    </p>
                </div>
                <div className="col-lg-12 mt-5 home-p">
                    <p>
                        We help you create a digital experience that is consistent, differentiated and converts thought into action. By leveraging our proprietary CPx Framework, we help you achieve improved 
                        digital adoption by aligning technology solutions with your business objectives.
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HomeSectionOne