import React from 'react'
import './engineeringBranches.css'
import {Link} from 'react-router-dom'
function EngineeringBranches() {
    return (
        
            <div className='engineering-branches'>
            <div className='flip-card-eng'>
                <Link to='/cs'>
                <div className='flip-card-inner-eng'>
                    <div className='flip-card-front-eng'>
                        <h1>
                            Computer Science and Engineering
                        </h1>
                    </div>
                    <div class="flip-card-back-eng">
                        <h3>
                            Click to gain all the important resources for CSE
                        </h3>
                    </div>
                </div>
                </Link>
            </div>
            <div className='flip-card-eng'>
                <Link to='/ece'>
                <div className='flip-card-inner-eng'>
                    <div className='flip-card-front-eng'>
                        <h1>
                            Electronics and Communication Engineering
                        </h1>
                    </div>
                    <div class="flip-card-back-eng">
                        <h3>
                        Click to gain all the important resources for ECE
                        </h3>
                    </div>
                </div>
                </Link>
            </div>
            <div className='flip-card-eng'>
                <Link to='/mech'>
                <div className='flip-card-inner-eng'>
                    <div className='flip-card-front-eng'>
                        <h1>
                            Mechanical Engineering
                        </h1>
                    </div>
                    <div class="flip-card-back-eng">
                        <h3>
                        Click to gain all the important resources for Mechanical Engineering
                        </h3>
                    </div>
                </div>
                </Link>
            </div>
        </div>
        
    )
}

export default EngineeringBranches
