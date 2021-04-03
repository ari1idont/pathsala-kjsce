import React from 'react'
import ReactPlayer from 'react-player'
import './chemistry11.css'

function Chemistry11() {
    return (
        <div className='chemistry-container'>
            <div>
                <h1 className='h1-chemistry'>
                    Chemistry
                </h1>
            </div>
            <div className='youtube-chemistry'>
                <ReactPlayer url='https://youtube.com/playlist?list=PLCC6k_T0h-eLJtCjzhvAv1b8oUcj9cM96'></ReactPlayer>
            </div>
            <div className='video-resources-chemistry'>
                <h2 className='h2-chemistry'>
                    Video Resources
                </h2>    
                <li>
                    <a href='https://youtube.com/playlist?list=PLCC6k_T0h-eLJtCjzhvAv1b8oUcj9cM96'> Complete chemistry class 11 in one shot</a>
                </li>
                <li>
                    <a href='https://youtu.be/15ygVBZitso'>Complete playlist by unacademy</a>
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
                    <a href='https://ncert.nic.in/textbook.php?kech1=0-7'>Class 11 chemistry part 1 </a>
                </li>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?kech2=0-7'>Class 11 chemistry part 2</a>
                </li>
                <li>
                    <a href='https://drive.google.com/file/d/18jKrm9iCWLvIXpFxGJXR5fGDs-HnS68a/view'> Chemistry text book</a>
                </li>


            </div>


        </div>
    )
}

export default Chemistry11
