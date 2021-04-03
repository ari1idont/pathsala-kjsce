import React from 'react'
import ReactPlayer from 'react-player'
import './physics11.css'

function Physics11() {
    return (
        <div className='physics-container'>
            <div>
                <h1 className='h1-physics'>
                    Physics
                </h1>
            </div>
            <div className='youtube-physics'>
                <ReactPlayer url='https://www.youtube.com/watch?v=xnXW0VZqwNo'></ReactPlayer>
            </div>
            <div className='video-resources-physics'>
                <h2 className='h2-physics'>
                    Video Resources
                </h2>    
                <li>
                    <a href='https://www.youtube.com/watch?v=xnXW0VZqwNo'> Complete physics class 11 in one shot</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLbu_fGT0MPsuUzCT6BZvto0hkcA3dEigi'>Complete playlist by unacademy</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLF3cuN1QRaoTwyMUyn2tXqqdbnohucaTG'>Complete playlist for class 11</a>
                </li>
            </div>
            <div className='reading-resources-physics'>
                <h2 className='h2-physics'>
                    Reading Resources
                </h2>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?keph1=0-8'>Class 11 physics part 1 </a>
                </li>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?keph2=0-7'>Class 11 physics part 2</a>
                </li>
                <li>
                    <a href='https://bbooks.info/b/w/484e27b2d7a269f0bbc8ed5f2d8a52c9c9fd4178/concept-physics-part-1-2019-2020-session-by-hc-verma.pdf'> Concepts of Physics by HC Verma Part 1</a>
                </li>


            </div>


        </div>
    )
}

export default Physics11
