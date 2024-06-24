import React, { useRef } from 'react'
import './Slider.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Slider = () => {
        // กำหนดใช้ userRef เพื่อเข้าถึง Slide A
        const photos = useRef();
        let tx = 0;

const slideForward = () => {
    if(tx > -50){
        tx -= 25;
    }
    photos.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
    if(tx < 0){
        tx += 25;
    }
    photos.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='Slider'>
        <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
        <div className="photos">
            {/* dกำหนด ref = photos เพื่อเข้าถึง slide */}
            <ul ref={photos}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Kubayazhi</h3>
                                <span>TLC , Bankok</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum eveniet, quidem exercitationem possimus odit id 
                            eaque dolore at optio asperiores perferendis explicabo 
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Dimoo Atrtoys</h3>
                                <span>TLC , Bankok</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum eveniet, quidem exercitationem possimus odit id 
                            eaque dolore at optio asperiores perferendis explicabo 
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Molly Arttoy</h3>
                                <span>TLC , China</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum eveniet, quidem exercitationem possimus odit id 
                            eaque dolore at optio asperiores perferendis explicabo 
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Sofia baer</h3>
                                <span>Rungsit, Bankok</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Rerum eveniet, quidem exercitationem possimus odit id 
                            eaque dolore at optio asperiores perferendis explicabo 
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Slider