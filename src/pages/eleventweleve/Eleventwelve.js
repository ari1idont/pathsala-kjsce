import React,{useState} from 'react'
import './eleventwelve.css'
import {Link} from 'react-router-dom'


function Eleventwelve() {
    return (
        <div className='eleventwelvecontainer'>
            
            <div className='flip-card-eleventwelve' >
            <Link to='/pcme11'>
                <div className='flip-card-inner-eleventwelve'>
                    <div className='flip-card-front-eleventwelve'>
                        <br /><br />
                        <h1>
                            11<sup>th</sup>
                        </h1>
                    </div>
                    <div class="flip-card-back-eleventwelve">
                        <br /> <br />
                        <h3>
                            click to gain all the important resources of PCM class 11<sup>th</sup>
                        </h3>
                    </div>
                </div>
                </Link>
            </div>
            
            
            <div className='flip-card-eleventwelve'>
            <Link to='/pcme12'>
                <div className='flip-card-inner-eleventwelve'>
                    <div className='flip-card-front-eleventwelve'>
                        <br/><br/>
                        <h1>
                            12<sup>th</sup>
                        </h1>
                    </div>
                    <div class="flip-card-back-eleventwelve">
                        <br/><br/>
                        <h3>
                            click to gain all the important resources of PCM class 12<sup>th</sup>
                        </h3>
                    </div>
                </div>
                </Link>
            </div>
           
        </div>
    )
}

export default Eleventwelve