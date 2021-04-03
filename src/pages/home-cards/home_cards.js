import React from 'react'
import './home_cards.css'
import {Link} from 'react-router-dom'

function HomeCards() {
    return(
        <div className = "container-cards">
            <div className = "cards-div">
            <div className='flip-card'>
                <Link to='/school'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front school'></div>
                    <div class="flip-card-back">
                        <h1>
                            School
                        </h1>
                    </div>
                </div>
                </Link>
            </div>
            <div className='flip-card'>
                <Link to='/engineering'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front college'>
                    </div>
                    <div class="flip-card-back">
                        <h1>
                            College
                        </h1>
                    </div>
                </div>
                </Link>
            </div>
            <div className='flip-card'>
                <Link to='/skills'>
                <div className='flip-card-inner'>
                    <div className='flip-card-front skills'></div>
                    <div class="flip-card-back">
                        <h1>
                            Skills
                        </h1>
                    </div>
                </div>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default HomeCards