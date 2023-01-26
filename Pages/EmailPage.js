import emailjs from 'emailjs-com';
import React, {useRef} from 'react';

export default function Contact() {
    const form = useRef();

function Email(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_bbxxr74', 'template_oi40n6j', form.current, 'hJ21LQcL39BvJwzRx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();

}
    return (
        <div>
            <div className="contact">
            <p className="email-directions">Use the form below to send me an email when an item/items in your inventory reach 0.</p>

            <form ref={form} onSubmit={Email} >
                <div className="row pt-10 mx-auto">
                    <div className = "col-8 form-group mx-auto"></div>

                    <input type="text" className="contact-input" placeholder="Name" name="Name" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="contact-input" placeholder="Email"
                        name="Email" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="contact-input"
                        placeholder="Subject"
                        name="Subject" />
                    </div>

                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="contact-input"
                        cols="40"
                        rows="10"
                        placeholder="Type your message here."
                        name="Message"> </textarea>

                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="email-submit-btn" value="Submit Your Message"></input>
                        </div>

                    </div>

                
                </form>
                </div>
            </div>
    )
    }

