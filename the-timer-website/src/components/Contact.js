import React, { Component } from 'react';
import '../sass/contact.scss';

export default class Contact extends Component {
    render() {
        return (
            <>
                <section className="contact-page-sec">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="contact-info">
                            <div className="contact-info-item">
                            <div className="contact-info-text">
                                <h2>address</h2>
                                <span className='text-white'>
                                    BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh
                                </span> 
                            </div>
                            </div>            
                        </div>          
                        </div>          
                        <div className="col-md-4">
                        <div className="contact-info">
                            <div className="contact-info-item">
                            <div className="contact-info-text">
                                <h2>E-mail</h2>
                                <span className='text-white'>hhim.student@puthisastra.edu.kh</span> 
                                <span className='text-white'>dda.student@puthisastra.edu.kh</span>
                            </div>
                            </div>            
                        </div>                
                        </div>                
                        <div className="col-md-4">
                        <div className="contact-info">
                            <div className="contact-info-item">
                            <div className="contact-info-text">
                                <h2>Phone</h2>
                                <span className='text-white'>0846947832</span>
                                <span className='text-white'>0946947832</span>
                            </div>
                            </div>            
                        </div>          
                        </div>          
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                        <div className="contact-page-form" method="post">
                            <h2>Get in Touch</h2> 
                            <form action="contact-mail.php" method="post">
                            <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="single-input-field">
                                <input type="text" placeholder="Your Name" name="name"/>
                                </div>
                            </div>  
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="single-input-field">
                                <input type="email" placeholder="E-mail" name="email" required/>
                                </div>
                            </div>                              
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="single-input-field">
                                <input type="text" placeholder="Phone Number" name="phone"/>
                                </div>
                            </div>  
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="single-input-field">
                                <input type="text" placeholder="Subject" name="subject"/>
                                </div>
                            </div>                
                            <div className="col-md-12 message-input">
                                <div className="single-input-field">
                                <textarea  placeholder="Write Your Message" name="message"></textarea>
                                </div>
                                <div className="single-input-fieldsbtn">
                                <input type="submit" className='btn btn-primary' value="Send Now"/>
                            </div>  
                            </div>                                                
                                                    
                            </div>
                            
                            </form>   
                        </div>      
                        </div>
                        <div className="col-md-4">        
                            <div className="contact-page-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.013834999073!2d104.88089491412248!3d11.550865047581027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPasserelles%20Num%C3%A9riques%20Cambodia%20(PNC)!5e0!3m2!1sen!2skh!4v1648695371266!5m2!1sen!2skh" width="350" height="450" loading="lazy" ></iframe>
                            </div>          
                        </div>        
                    </div>
                    </div>
                </section>
            </>
        );
    }
}