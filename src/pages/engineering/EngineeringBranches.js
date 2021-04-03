import React from 'react'
import './engineeringBranches.css'

function EngineeringBranches() {
    return (
        
            <div className='engineering-branches'>
            <div className='flip-card-eng'>
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
            </div>
            <div className='flip-card-eng'>
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
            </div>
            <div className='flip-card-eng'>
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
            </div>
        </div>
        
    )
}

export default EngineeringBranches
