import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Dummy from './images/dummy.png';
import SCMS from './images/scms-cover.png';

const Home = () => {
  const auth = localStorage.getItem('user');

  const [data, setData] = useState([]);

  const getDepartment = async () => {
    const resp = await axios.get(
		'https://db-k432.onrender.com/getdepartment',
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

    if (resp.data.status === 201) {
      console.log('Data Fetched');
      setData(resp.data.data);
    } else {
      console.log('Fetching Failed');
    }
  };

  const history = useNavigate();

  const [inpval, setINP] = useState({
    teamname: '',
    teamemail: '',
  });

  const setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const JoinNow = async (e) => {
    e.preventDefault();

    const { mname, memail } = inpval;

    if (mname === '') {
      alert('Name is required');
    } else if (memail === '') {
      alert('Email is required');
    } else if (!memail.includes('@')) {
      alert('Enter valid email');
    } else {
      const resp = await fetch(
			'https://db-k432.onrender.com/addmember',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					mname,
					memail,
				}),
			}
		);

      if (resp.status === 201) {
        swal('Thankyou!', 'Details Sent!', 'success');
        window.location.reload(false);
        history('/');
      } else {
        swal('Sorry!', 'Senidng Failed!', 'warning');
      }
    }
  };

  const [data2, setData2] = useState([]);

  const getMembers = async () => {
    const resp = await axios.get(
		'https://db-k432.onrender.com/getmembers',
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

    if (resp.data.status === 201) {
      console.log('Data Fetched');
      setData2(resp.data.data);
    } else {
      console.log('Fetching Failed');
    }
  };

  useEffect(() => {
    getDepartment();
    getMembers();
  }, []);

  return (
		<>
			{/* <!-- SCMS First--> */}
			<section id='intro'>
				<div className='container-lg'>
					<div className='row justify-content-center align-items-center'>
						<div className='col-md-5 text-center text-md-start'>
							<h1>
								<div className='display-1'>Welcome to</div>
								<div className='display-5 text-muted'>
									Smart Complaint Management System
								</div>
							</h1>
							<p className='lead my-4 text-muted'>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Dolore ratione unde qui eaque
								vitae veritatis sit.
							</p>
							<Link
								to='/contact'
								className='btn btn-secondary btn-lg'
							>
								Contact Us
							</Link>
						</div>
						<div className='col-md-5 text-center d-none d-md-block'>
							<img className='img-fluid' src={SCMS} alt='' />
						</div>
					</div>
				</div>
			</section>

			{/* <!-- End Hero --> */}

			{/* <!-- ======= Services Section ======= --> */}
			<section id='' className='bg-light mt-5'>
				<div className='container-lg' data-aos='fade-up'>
					<div className='text-center'>
						<h2>Departments</h2>
						<div className='lead text-muted'>
							Select a department you wish to lodge a complaint
						</div>
					</div>

					<div className='row my-5 align-items-center justify-content-center g-0'>
						{data.length > 0
							? data.map((el, id) => {
									return (
										<>
											<div
												className=' col-8 col-lg-4 col-md-6'
												data-aos='zoom-in'
												data-aos-delay='100'
											>
												<div className='card border-0 mb-3'>
													<div className='card-body text-center py-4'>
														<Link
															className='text-decoration-none text-secondary'
															to={`/addcom/${el.title}`}
														>
															<h4 className='card-title'>
																{' '}
																{el.title}
															</h4>
															<img
																className='card-img-top img-fluid'
																src={`/uploads/${el.image}`}
																alt='dept'
																style={{
																	width: 200,
																	height: 200,
																}}
															/>
															<div className='card-body'>
																<h5 className='card-text lead'>
																	{el.detail}
																</h5>
															</div>
														</Link>
													</div>
												</div>
											</div>
										</>
									);
							  })
							: ''}
					</div>
				</div>
			</section>
			{/* <!-- End --> */}

			{/* <!-- subscribe --> */}
			<section id='team' className='team section-bg mb-5'>
				<div className='container' data-aos='fade-up'>
					<div className='section-title mb-3'>
						<h3>
							Our <span>Subscribers</span>
						</h3>
					</div>

					<div className='row'>
						{data2.length > 0
							? data2
									.map((el, id) => {
										return (
											<>
												<div
													className='col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center'
													data-aos='fade-up'
													data-aos-delay='100'
												>
													<div className='member mt-3'>
														<div className='member-img'>
															<img
																src={Dummy}
																className='img-fluid'
																alt='member'
																style={{
																	height: 250,
																	width: 200,
																}}
															/>
															<div className='social'>
																<Link to=''>
																	<i className='fa-brands fa-square-facebook'></i>
																</Link>
																<Link to=''>
																	<i className='fa-brands fa-square-instagram'></i>
																</Link>
																<Link to=''>
																	<i className='fa-brands fa-square-twitter'></i>
																</Link>
																<Link to=''>
																	<i className='fa-brands fa-linkedin'></i>
																</Link>
															</div>
														</div>
														<div className='member-info text-center'>
															<h4>{el.mname}</h4>
															<span>
																{el.memail}
															</span>
														</div>
													</div>
												</div>
											</>
										);
									})
									.slice(0, 4)
							: ''}
					</div>
				</div>
			</section>
			{/* <!-- end subscribe --> */}

			{/* <!-- foot --> */}
			<footer id='footer'>
				<div className='footer-newsletter'>
					<div className='container mb-5'>
						<div className='row justify-content-center media-style'>
							<div className='col-lg-6'>
								<h4>Become a Subscriber</h4>
								<form>
									<input
										type='text'
										onChange={setdata}
										name='mname'
										placeholder='Full Name'
										className='input-style'
									/>
									<input
										type='email'
										onChange={setdata}
										name='memail'
										placeholder='Email Address'
										className='input-style'
									/>
									<input
										type='submit'
										onClick={JoinNow}
										value='Subscribe Now'
										className='subs-style'
									/>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className='footer-top mb-5'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3 col-md-6 footer-contact'>
								<h4>SCMS Department</h4>
								<p>
									<strong>Call:</strong> +447412314065
								</p>
								<p>
									<strong>Email:</strong> info@scms.com
								</p>
								<p>
									<strong>location:</strong> A108 Adam Street,
									Hatfield, Hertfordshire, United Kingdom
								</p>
							</div>

							<div className='col-lg-3 col-md-6 footer-links'>
								<h4>Useful Links</h4>
								<ul>
									<li>
										<i className='bx bx-chevron-right '></i>
										<Link
											to='/'
											className='btn-get-started scrollto'
										>
											<b>Home</b>
										</Link>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>
										<Link
											to='/about'
											className='btn-get-started scrollto'
										>
											<b>About</b>
										</Link>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>
										<Link
											to='/contact'
											className='btn-get-started scrollto'
										>
											<b>Contact</b>
										</Link>
									</li>
								</ul>
							</div>

							<div className=' col-md-6 footer-links col-lg-3'>
								<h4>Our Services</h4>
								<ul>
									<li>
										<i className='bx-chevron-right bx '></i>
										{auth ? (
											<Link
												to={`/view/${
													JSON.parse(auth).id
												}`}
												className='btn-get-started scrollto'
											>
												Profile
											</Link>
										) : (
											<Link
												to='/register'
												className='btn-get-started scrollto'
											>
												<b>Register</b>
											</Link>
										)}
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>
										{auth ? (
											<Link
												to='/logout'
												className='btn-get-started scrollto'
											>
												Log Out
											</Link>
										) : (
											<Link
												to='/login'
												className='btn-get-started scrollto'
											>
												<b>LogIn</b>
											</Link>
										)}
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>
										<Link
											to='/staff/admin'
											className='btn-get-started scrollto'
										>
											<b>Admin</b>
										</Link>
									</li>
								</ul>
							</div>

							<div className='col-lg-3 col-md-6 footer-links'>
								<h3>Social Media</h3>
								<div className='social-links'>
									<p>
										<i className='fa-brands fa-twitter'></i>{' '}
										- <b>Twitter</b>
									</p>
									<p>
										<i className='fa-brands fa-facebook'></i>{' '}
										- <b>Facebook</b>
									</p>
									<p>
										<i className='fa-brands fa-linkedin'></i>{' '}
										- <b>LinkedIn</b>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* <!-- foot --> */}
		</>
  );
};

export default Home;
