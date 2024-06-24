import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about_img'/>
            <img src={play_icon} alt="" className='play_icon' onClick={()=>
            {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing 
                elit. Dolorum dicta dolore deserunt laudantium, veniam 
                deleniti quasi amet inventore laboriosam rem sed 
                officia perferendis expedita molestiae fugit, minima 
                cupiditate voluptas ad?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing e
                lit. Sunt possimus autem tenetur unde vel nemo, 
                inventore recusandae voluptatum natus dolorem molestias dolore odio architecto harum asperiores reiciendis iusto facere perferendis.</p>
        </div>
    </div>
  )
}

export default About