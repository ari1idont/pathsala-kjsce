import React,{useState} from 'react'
import './pcme12.css'


function pcme() {
    return (
        <div className='pcmecontainer'>
            <div className='flip-card-pcme1'>
                <div className='flip-card-inner-pcme1'>
                    <div className='flip-card-front-pcme1'>
                    </div>
                    <div class="flip-card-back-pcme1">
                        <br/><br/>
                        <p>
                            click to gain all the important resources of Physics class 12<sup>th</sup>
                        </p>
                    </div>
                </div>
            </div>
            

            <div className='flip-card-pcme2'>
                <div className='flip-card-inner-pcme2'>
                    <div className='flip-card-front-pcme2'>
                        
                    </div>
                    <div class="flip-card-back-pcme2">
                        <br/><br/>
                        <p>
                            click to gain all the important resources of Chemisrty class 12<sup>th</sup>
                        </p>
                    </div>
                </div>
            </div>



            <div className='flip-card-pcme3'>
                <div className='flip-card-inner-pcme3'>
                    <div className='flip-card-front-pcme3'>
                    </div>
                    <div class="flip-card-back-pcme3">
                        <br/><br/>
                        <p>
                            click to gain all the important resources of Maths class 12<sup>th</sup>
                        </p>
                    </div>
                </div>
            </div>


            <div className='flip-card-pcme4'>
                <div className='flip-card-inner-pcme4'>
                    <div className='flip-card-front-pcme4'>
                        <br/><br/><br/>
                        <h2 className='pcme-h2'>
                            Supplementary

                        </h2>
                    </div>
                    <div class="flip-card-back-pcme4">
                        <br/><br/>
                        <p>
                            click to gain the extra resources for class 12
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pcme