import React from 'react'
import ReactPlayer from 'react-player'
import './chemistry12.css'

function Chemistry12() {
    return (
        <div className='chemistry-container'>
            <div>
                <h1 className='h1-chemistry'>
                    Chemistry
                </h1>
            </div>
            <div className='youtube-chemistry'>
                <ReactPlayer url='https://youtube.com/playlist?list=PLVSwGhkgl7tyWLXicbYiE73_oW-omxBje'></ReactPlayer>
            </div>
            <div className='video-resources-chemistry'>
                <h2 className='h2-chemistry'>
                   Additional Video Resources
                </h2>    
                <li>
                    <a href='https://youtube.com/playlist?list=PLVSwGhkgl7tyWLXicbYiE73_oW-omxBje'> Complete chemistry class 11 in one shot</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLCtUyOrCJbxxHIW9s8HOZs8VKG2zsGeYo'>Complete playlist by vedantu</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLF3cuN1QRaoS0Z4VJIvct3mXMVl9765zA'>Complete playlist for class 11</a>
                </li>
            </div>
            <div className='reading-resources-chemistry'>
                <h2 className='h2-chemistry'>
                    Reading Resources
                </h2>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?lech1=0-9'>Class 12 chemistry part 1 </a>
                </li>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?lech2=0-7'>Class 12 chemistry part 2</a>
                </li>
                <li>
                    <a href='https://drive.google.com/file/d/18jKrm9iCWLvIXpFxGJXR5fGDs-HnS68a/view'> Chemistry text book</a>
                </li>


            </div>


        </div>
    )
}

export default Chemistry12
