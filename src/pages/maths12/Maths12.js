import React from 'react'
import ReactPlayer from 'react-player'
import './maths12.css'

function Maths12() {
    return (
        <div className='math-container'>
            <div>
                <h1 className='h1-math'>
                    Mathematics
                </h1>
            </div>
            <div className='youtube-math'>
                <ReactPlayer url='https://youtube.com/playlist?list=PLlbiy4KXpE8I7NgSNELPTEjbqwSsS3Isv'></ReactPlayer>
            </div>
            <div className='video-resources-math'>
                <h2 className='h2-math'>
                   Additional Video Resources
                </h2>    
                <li>
                    <a href='https://youtube.com/playlist?list=PLQLS4tnUJrQeuXet1H2V5D637WyY9IGio'> Complete Math class 12 in one shot</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLCtUyOrCJbxwySG3cebnPQ3tipBwhKyQ3'>Complete playlist by vedantu</a>
                </li>
                <li>
                    <a href='https://youtube.com/playlist?list=PLlbiy4KXpE8I7NgSNELPTEjbqwSsS3Isv'>Complete playlist for class 12</a>
                </li>
            </div>
            <div className='reading-resources-math'>
                <h2 className='h2-math'>
                    Reading Resources
                </h2>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?lemh1=0-6'>Class 12 Math part1  </a>
                </li>
                <li>
                    <a href='https://ncert.nic.in/textbook.php?lemh2=0-7'>Class 12 Math path2 </a>
                </li>
              
                <li>
                    <a href='https://www.selfstudys.com/books/rdsharma-solution/english/12th/maths-rd-sharma-solution/805'> Mathematics by RD Sharma class 12 </a>
                </li>
                


            </div>


        </div>
    )
}

export default Maths12
