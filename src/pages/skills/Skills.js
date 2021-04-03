import React from 'react'
import './skills.css'
import {Link} from 'react-router-dom'
function Skills() {
    return (
        <div>
            <div className='technontechcontainer'>
            <div className='flip-card-technontech'>
                <Link to='/technicalskills'>
                <div className='flip-card-inner-technontech'>
                    <div className='flip-card-front-technontech'>
                        <br /><br /><br />
                        <h1>
                            Technical Skills
                        </h1>
                    </div>
                    <div class="flip-card-back-technontech">
                        <br /><br /><br />
                        <h3>
                            Click here to see all resources 
                        </h3>
                    </div>
                </div>
                </Link>
            </div>
            <div className='flip-card-technontech'>
                <Link to='/nontechnicalskills'>
                <div className='flip-card-inner-technontech'>
                    <div className='flip-card-front-technontech'>
                        <br /><br />
                        <h1>
                            Non-Technical Skills
                        </h1>
                    </div>
                    <div class="flip-card-back-technontech">
                        <br /><br /><br />
                        <h3>
                            Click here to see all resources
                        </h3>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        </div>
    )
}

export default Skills
