import React from 'react'
import ReactPlayer from 'react-player'
import './maths11.css'

function Maths11() {
    return (
        <div className='math-container'>
            <div>
                <h1 className='h1-math'>
                    Mathematics
                </h1>
            </div>
            <div className='youtube-math'>
                <ReactPlayer url='https://youtube.com/playlist?list=PLVLoWQFkZbhVTcotKKM8XX5KVXSFyXixJ'></ReactPlayer>
            </div>
            <div className='video-resources-math'>
                <h2 className='h2-math'>
                    Video Resources
                </h2>    
                <li>
                    <a href='https://youtube.com/playlist?list=PLVLoWQFkZbhVTcotKKM8XX5KVXSFyXixJ'> Complete Math class 11 in one shot</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLbu_fGT0MPssea8Yb0bov4v0o_0xfT9Qr'>Complete playlist by unacademy</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLPFrn0ppwwkSQ2h9b0BUu_Mraq0iQYBufucaTG'>Complete playlist for class 11</a>
                </li>
            </div>
            <div className='reading-resources-math'>
                <h2 className='h2-math'>
                    Reading Resources
                </h2>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?kemh1=0-16'>Class 11 Math  </a>
                </li>
              
                <li>
                    <a href='https://drive.google.com/file/d/0B92qEUz-ispGbkZESmhvbTRDZHc/view'> Mathematics by RD Sharma</a>
                </li>


            </div>


        </div>
    )
}

export default Maths11
