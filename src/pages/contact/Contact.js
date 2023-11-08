import React from 'react';
import Helmet from "../../components/helmet/Helmet";
import "./Contact.css"
import LiveChart from "../live/LiveChart"
import { WhatsApp } from '@mui/icons-material';

const Contact = () => {
  // Function to open WhatsApp with the provided phone number
  const handleWhatsApp = (phoneNumber) => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };


  return (
    <Helmet title="Contact">
      <>
        {/* Live chart */}
        <LiveChart />

        <h1 className='d-flex justify-content-center align-items-center'> Admin Contact </h1>
        <div className='container p-2'>
          <p className='text-justify'>
            Welcome to our contact page! We are thrilled to connect with you and provide any assistance you may need. Whether you have a question, a suggestion, or simply want to say hello, feel free to reach out to us through any of the contact options below:
          </p>
          <p className='text-justify'>
            <b>WhatsApp</b>: Click on the "WhatsApp" card to send us a message directly on WhatsApp. We're just a tap away and will respond to your inquiries as promptly as possible.
          </p>
          <p className='text-justify'>
            Your feedback and questions are valuable to us, and we are committed to responding to every user as soon as possible. At our end, we strive to provide excellent customer support and create a positive experience for everyone.
          </p>
          <p className='text-justify'>
            Don't hesitate to contact us through any of the provided options. We are here to assist you and make your interaction with us as smooth and enjoyable as possible. Thank you for choosing to connect with us, and we look forward to hearing from you soon!
          </p>
          <p className='text-justify'><b>NOTE : No game available on admin number </b> </p>
        </div>

        <div class="ag-format-container">
          <div class="ag-courses_box">
            <p className='admin-message'>Game ka Result dalwana ho ya apna number board pr lagwana ho to whatsapp karen. Only Whatsapp</p>
            <div class="ag-courses_item whatsapp-item" onClick={() => handleWhatsApp('+910000000000')}>
              <div class="ag-courses-item_bg"></div>
              <div class="ag-courses-item_title whatsapp-title">
                <span ><WhatsApp className=' contact-icon contact-whatsapp' /></span>
                WhatsApp
              </div>
            </div>
          </div>
        </div>

      </>
    </Helmet >
  );
}

export default Contact;
