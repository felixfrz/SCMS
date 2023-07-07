import Contimg from './images/cont-image.jpg';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import CONTACT from './images/contact.png';

const Contact = () => {
  const history = useNavigate();

  const [inputVal, setInput] = useState({
    cname: '',
    cemail: '',
    csubject: '',
    cmessage: '',
  });

  const ContactInput = (e) => {
    const { name, value } = e.target;
    setInput((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const ContactUs = async (e) => {
    e.preventDefault();

    const { cname, cemail, csubject, cmessage } = inputVal;

    if (cname === '') {
      alert('name is required');
    } else if (cemail === '') {
      alert('Email is required');
    } else if (!cemail.includes('@')) {
      alert('Enter valid email');
    } else if (cmessage === '') {
      alert('Message is required');
    } else {
      const res = await fetch(
			'https://scms-backend-35da66f730af.herokuapp.com/contactus',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					cname,
					cemail,
					csubject,
					cmessage,
				}),
			}
		);

      if (res.status === 422) {
        swal('Sorry!', 'Senidng Failed!', 'warning');
      } else {
        swal('Thankyou!', 'Details Sent!', 'success');
        history('/');
      }
    }
  };

  return (
		<>
			{/* <!-- ======= Contact Section ======= --> */}
			<section id='contact' className='contact'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title'>
						<h2 className='text-secondary'>Contact</h2>
						<h3>
							<span className='display-3 text-secondary'>
								Contact Us
							</span>
						</h3>
						<p>
							Ut possimus qui ut temporibus culpa velit eveniet
							modi omnis est adipisci expedita at voluptas atque
							vitae autem.
						</p>
					</div>

					<div
						className='row'
						data-aos='fade-up'
						data-aos-delay='100'
					>
						<div className='col-lg-6 '>
							<img
								className='mb-4 mb-lg-0'
								src={CONTACT}
								style={{
									border: 0,
									width: '100%',
									height: '384px',
								}}
								allowfullscreen
								alt='Cont-1'
							></img>
						</div>

						<div className='col-lg-6'>
							<form className='php-email-form'>
								<div className='row'>
									<div className='col form-group'>
										<input
											type='text'
											onChange={ContactInput}
											name='cname'
											className='form-control'
											id='name'
											placeholder='Your Name'
										/>
									</div>
									<div className='col form-group'>
										<input
											type='email'
											className='form-control'
											onChange={ContactInput}
											name='cemail'
											id='email'
											placeholder='Your Email'
										/>
									</div>
								</div>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										onChange={ContactInput}
										name='csubject'
										id='subject'
										placeholder='Subject'
									/>
								</div>
								<div className='form-group'>
									<textarea
										className='form-control'
										onChange={ContactInput}
										name='cmessage'
										rows='5'
										placeholder='Message'
										required
									></textarea>
								</div>
								<div className='my-3'>
									<div className='loading'>Loading</div>
									<div className='error-message'></div>
									<div className='sent-message'>
										Your message has been sent. Thank you!
									</div>
								</div>
								<div className='text-center '>
									<button
										className='btn btn-md btn-secondary'
										onClick={ContactUs}
										type='submit'
									>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>

					<div
						className='row mt-5'
						data-aos='fade-up'
						data-aos-delay='100'
					>
						<div className='col-lg-4'>
							<div className='info-box mb-4'>
								<i class='fa-solid fa-location-dot'></i>
								<h3>Our Address</h3>
								<p>
									A108 Adam Street, Hatfield, Hertfordshire,
									United Kingdom
								</p>
							</div>
						</div>

						<div className='col-lg-4 col-md-4'>
							<div className='info-box  mb-4'>
								<i class='fa-solid fa-envelope'></i>
								<h3>Email Us</h3>
								<p>info@scms.com</p>
							</div>
						</div>

						<div className='col-lg-4 col-md-4'>
							<div className='info-box  mb-4'>
								<i class='fa-solid fa-phone-volume'></i>
								<h3>Call Us</h3>
								<p>+447412314065</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Contact Section --> */}
		</>
  );
};

export default Contact;
