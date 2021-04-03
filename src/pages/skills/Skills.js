import React from 'react'
import './skills.css'

function Skills() {
    return (
        <div>
            <div className='technontechcontainer'>
            <div className='flip-card-technontech'>
                <div className='flip-card-inner-technontech'>
                    <div className='flip-card-front-technontech'>
                        <h1>
                            Technical Skills
                        </h1>
                    </div>
                    <div class="flip-card-back-technontech">
                        <h3>
                            Click here to see all resources 
                        </h3>
                    </div>
                </div>
            </div>
            <div className='flip-card-technontech'>
                <div className='flip-card-inner-technontech'>
                    <div className='flip-card-front-technontech'>
                        <h1>
                            Non-Technical Skills
                        </h1>
                    </div>
                    <div class="flip-card-back-technontech">
                        <h3>
                            Click here to see all resources
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Skills
