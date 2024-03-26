import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  return (
    <div className='home_container'>
      <Navbar />

      <div className="info">


        <div class="wrapper">
          
            < h1 x="50%" y="50%" dy=".35em" text-anchor="middle">
              CLub Scientifique
            </h1>
         
        </div>

        <h3>A nonprofit network of high school coding clubs and makers around the world, for the students, by the students.
        </h3>
        <div className="btn">

          <button>
            <p>

              our vsion
            </p>
            <FaArrowRightLong color='white' size={20} />
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home