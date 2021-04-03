import React,{useState} from 'react'
import './pcme12.css'
import {Link} from 'react-router-dom'


function pcme() {
    return (
        <div className='pcmecontainer'>
            <div className='flip-card-pcme1'>
                <Link to='/physics12'>
                <div className='flip-card-inner-pcme1'>
                    <div className='flip-card-front-pcme1'>
                    </div>
                    <div class="flip-card-back-pcme1">
                        <br/><br/>
                        <br/>
                        <p>
                            Click to gain all the important resources of Physics class 12<sup>th</sup>
                        </p>
                    </div>
                </div>
                </Link>
            </div>
            

            <div className='flip-card-pcme2'>
                <Link to='/chemistry12'>
                <div className='flip-card-inner-pcme2'>
                    <div className='flip-card-front-pcme2'>
                        
                    </div>
                    <div class="flip-card-back-pcme2">
                        <br/><br/>
                        <br/>
                        <p>
                            Click to gain all the important resources of Chemisrty class 12<sup>th</sup>
                        </p>
                    </div>
                </div>
                </Link>
            </div>



            <div className='flip-card-pcme3'>
                <Link to='/maths12'>
                <div className='flip-card-inner-pcme3'>
                    <div className='flip-card-front-pcme3'>
                    </div>
                    <div class="flip-card-back-pcme3">
                        <br/><br/>
                        <br/>
                        <p>
                            Click to gain all the important resources of Maths class 12<sup>th</sup>
                        </p>
                    </div>
                </div>
                </Link>
            </div>


            <div className='flip-card-pcme4'>
                <Link to='/extras12'>
                <div className='flip-card-inner-pcme4'>
                    <div className='flip-card-front-pcme4'>
                        <br/><br/><br/>
                        <h2 className='pcme-h2'>
                            Supplementary

                        </h2>
                    </div>
                    <div class="flip-card-back-pcme4">
                        <br/><br/>
                        <br/><br/>
                        <p>
                            Click to gain the extra resources for class 12
                        </p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default pcme