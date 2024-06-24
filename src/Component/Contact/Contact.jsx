import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {



    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b64f8c49-d1f6-4f72-bd0a-9bef00d3ce08");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Massage To Me <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Consequuntur officia 
                perspiciatis velit illum nulla asperiores 
                et veritatis itaque vitae iure?</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> Kubayazhi@gmail.com</li>
                    <li><img src={phone_icon} alt="" /> +6691-743-8355</li>
                    <li><img src={location_icon} alt="" /> 189/59 Raikhing Samphran nakhonprathom</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Number phone</label>
                <input type="tel" name='phone' placeholder='Enter your Number phone' required/>
                <label>Write your messages here</label>
                <textarea name="messages" rows={12} placeholder='Enter Your Messages'></textarea>
                <button className='btn dark-btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact