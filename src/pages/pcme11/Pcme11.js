import React,{useState} from 'react'
import './pcme11.css'
import {Link} from 'react-router-dom'


function pcme() {
    return (
        <div className='pcmecontainer'>
            <div className='flip-card-pcme1'>
                <Link to='/physics11'>
                <div className='flip-card-inner-pcme1'>
                    <div className='flip-card-front-pcme1'>
                    </div>
                    <div class="flip-card-back-pcme1">
                        <p>
                        <br/><br/><br/>
                            Click to gain all the important resources of Physics class 11<sup>th</sup>
                        </p>
                    </div>
                </div>
                </Link>
            </div>
            <div className='flip-card-pcme2'>
                <Link to='/chemistry11'>
                <div className='flip-card-inner-pcme2'>
                    <div className='flip-card-front-pcme2'>
                        
                    </div>
                    <div class="flip-card-back-pcme2">
                        <p>
                        <br/><br/><br/>
                            Click to gain all the important resources of Chemisrty class 11<sup>th</sup>
                        </p>
                    </div>
                </div>
                </Link>
            </div>



            <div className='flip-card-pcme3'>
                <Link to='/maths11'>
                <div className='flip-card-inner-pcme3'>
                    <div className='flip-card-front-pcme3'>
                    </div>
                    <div class="flip-card-back-pcme3">
                        <p>
                        <br/><br/><br/>
                            click to gain all the important resources of Maths class 11<sup>th</sup>
                        </p>
                    </div>
                </div>
                </Link>
            </div>


            
        </div>
    )
}

export default pcme