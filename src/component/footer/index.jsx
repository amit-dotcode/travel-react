import './index.css';
const Footer = () => {
    return (
        <>
            <section className="footer_wrapper">
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-3 col-12">
                            <h6>About us</h6>
                            <div className="link_footer">
                                <ul>
                                    <li><a href='/'>About SriLankan Airlines</a></li>
                                    <li><a href='/'>Right to Information Act</a></li>
                                    <li><a href='/'>Tender and GSA notices</a></li>
                                    <li><a href='/'>Advertise with us</a></li>
                                    <li><a href='/'>Sri Lanka Tourism</a></li>
                                    <li><a href='/'>Media Center</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-3 col-12">
                            <h6>help</h6>
                            <div className="link_footer">
                                <ul>
                                    <li><a href='/'>24 Hours Contact Center</a></li>
                                    <li><a href='/'>Online Chat Support</a></li>
                                    <li><a href='/'>FAQs</a></li>
                                    <li><h6>SRILANKAN DIRECT CONNECT</h6></li>
                                    <li><a href='/'>Agent Registration</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-3 col-12">
                            <h6>service</h6>
                            <div className="link_footer">
                                <ul>
                                    <li><a href='/'>MICE</a></li>
                                    <li><a href='/'>Cargo</a></li>
                                    <li><a href='/'>FAQs</a></li>
                                    <li><a href='/'>Training</a></li>
                                    <li><a href='/'>Ground Handling</a></li>
                                    <li><a href='/'>SriLankan Holidays</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-md-3 col-12">
                            <h6>Tearms & Conditions</h6>
                            <div className="link_footer">
                                <ul>
                                    <li><a href='/'>Online Booking Terms of Use</a></li>
                                    <li><a href='/'>Conditions of Carriage</a></li>
                                    <li><a href='/'>Notices For Travel Agents</a></li>
                                    <li><a href='/'>Permission Center</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='row bottom_footer'>
                        <div className='col-12 col-lg-9 col-md-6 col-sm-6'>
                            <h6>SUBSCRIBE TO OUR SPECIAL OFFERS</h6>
                            <div className='subscribe_form'>
                                <form className="row g-4">
                                    <div className="col-auto">
                                        <label for="staticEmail2" className="visually-hidden">Email</label>
                                        <input type="text" readonly className="form-control" id="staticEmail2" placeholder='Enter your email' />
                                    </div>
                                    <div className="col-auto">
                                        <label for="inputPassword2" className="visually-hidden">Password</label>
                                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" />
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary mb-3">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Yes, I would like to receive promotional content from SriLankan Airlines
                                </label>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 col-md-6 col-sm-6'>
                            <h6>Follow us</h6>
                            <div className="link_footer social_icon pt-2">
                                <ul>
                                    <li><a href='https://www.facebook.com/flysrilankan/'> <i class="fa fa-facebook" aria-hidden="true"></i> </a></li>
                                    <li><a href='https://twitter.com/flysrilankan'> <i class="fa fa-linkedin" aria-hidden="true"></i> </a></li>
                                    <li><a href='https://youtube.com'> <i class="fa fa-youtube" aria-hidden="true"></i> </a></li>
                                    <li><a href='https://instagram.com'> <i class="fa fa-instagram" aria-hidden="true"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer_copywrite_wrapper'>
            <div className='row'>
                        <div className='col-12 col-lg-9 col-sm-6 col-md-9 link_footer copywrite'>
                                <ul>
                                    <li><a href='/'>Privacy Policy</a></li>
                                    <li><a href='/'>Cookie Policy</a></li>
                                    <li><a href='/'>Legal Notice</a></li>
                                </ul>
                        </div>
                        <div className='col-12 col-lg-3 col-sm-6 col-md-9 company_name'>
                                <p>2023 © SriLankan IT Systems</p>
                         </div>
            </div>
            </section>

        </>
    )
}

export default Footer;