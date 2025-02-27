import './Contact.css'
import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93578944-d898-408a-91c6-8a1a8a4aa3a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
 
 
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out throug contact form or find our contact 
            information below. tYou feedback, questions, and suggesions are impotrtant to us 
            as we strive to provide exceptional service to our university cpmmunity.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" /> kiili075@gmail.com</li>
            <li><img src={phone_icon} alt="" /> +254794483321</li>
            <li><img src={location_icon} alt="" /> 90100 Nairobi, Kenya <br />Nairobi , Kenya</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label >Your Name</label>
          <input type="text" name='name' placeholder='Enter Your Name' required/>
          <label >Your Email</label>
          <input type="tel" name='phone' placeholder='Enter Your mobile number' required/>
          <label >Write Your Message Here</label>
          <textarea name="message"  rows="6" placeholder='Enter Your Message Here' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
