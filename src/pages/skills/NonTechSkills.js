import React from 'react'
import './nonTechSkills.css'

function NonTechSkills() {
    return (
        <div>
            <div className='nontechcontainer'>
            <div className='flip-card-nontech'>
                <div className='flip-card-inner-nontech'>
                    <div className='flip-card-front-nontech'>
                        <h1>
                        <br/>
                            Digital Marketing
                        </h1>
                    </div>
                    <div class="flip-card-back-nontech">
                        <h3>
                        <br/>
                        <br/>
                            <a href='https://youtube.com/playlist?list=PLLSovFY-eK2_1isRMtrNS_me4zDrs2CuS'>Video Resource</a>
                            <br/>
                            <br/>
                            <a href='https://www.coursera.org/courses?query=digital%20marketing'>Certified Courses</a>
                            <br />
                        </h3>
                    </div>
                </div>
            </div>
            <div className='flip-card-nontech'>
                <div className='flip-card-inner-nontech'>
                    <div className='flip-card-front-nontech'>
                        <h1>
                        <br/>
                            Communication Skills
                        </h1>
                    </div>
                    <div class="flip-card-back-technontech">
                        <h3>
                        <br/>
                        <br/>
                        <a href='https://youtube.com/playlist?list=PLOaeOd121eBEEWP14TYgSnFsvaTIjPD22'>Video Resource</a>
                        <br/>
                        <br/>
                        <a href='https://www.coursera.org/courses?query=communication%20skills'>Certified Courses</a>
                        <br />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default NonTechSkills
