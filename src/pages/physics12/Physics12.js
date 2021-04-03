import React from 'react'
import ReactPlayer from 'react-player'
import './physics12.css'

function Physics12() {
    return (
        <div className='physics-container'>
            <div>
                <h1 className='h1-physics'>
                    Physics
                </h1>
            </div>
            <div className='youtube-physics'>
                <ReactPlayer url='https://www.youtube.com/watch?v=gQdpp57jV0Q'></ReactPlayer>
            </div>
            <div className='video-resources-physics'>
                <h2 className='h2-physics'>
                    Video Resources
                </h2>    
                <li>
                    <a href='https://www.youtube.com/watch?v=gQdpp57jV0Q'>  physics in one shot</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLbu_fGT0MPsuUzCT6BZvto0hkcA3dEigi'>Complete unacademy playlist for class 12 physics</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLVLoWQFkZbhXwv1-s52tBcw4ygKcHdKZu'>Complete playlist for class 12 physics</a>
                </li>
            </div>
            <div className='reading-resources-physics'>
                <h2 className='h2-physics'>
                    Reading Resources
                </h2>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?leph1=0-8'>Class 12 physics part 1 </a>
                </li>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?leph2=0-6'>Class 12 physics part 2</a>
                </li>
                <li>
                    <a href='https://eg4.nic.in/jnv/DFILES/EBOOKS/IR/conceptsofphysics2.pdf'> Concepts of Physics by HC Verma Part 2</a>
                </li>


            </div>


        </div>
    )
}

export default Physics12
