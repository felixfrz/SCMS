import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import swal from 'sweetalert';

const Login = () => {
  const history = useNavigate();

  const [uemail, setEmail] = useState('');
  const [upassword, setPassword] = useState('');

  Axios.defaults.withCredentials = true;

  const LoginNow = () => {
    Axios.post('https://scms-backend-35da66f730af.herokuapp.com/login', {
		uemail: uemail,
		upassword: upassword,
	}).then((response) => {
		if (response.data[0]) {
			localStorage.setItem('user', JSON.stringify(response.data[0]));
			console.log('login successfully', response.data[0]);

			if (response.data[0].department === 'user') {
				swal('Great!', 'Login SUccess!', 'success');
				history('https://scms-web.netlify.app/');
					
			} else if (response.data[0].department === 'admin') {
				swal('Great!', 'Login SUccess!', 'success');
				history('/staff/admin');
			} else {
				swal('Great!', 'Login SUccess!', 'success');
				history('/staff/department');
			}
		} else {
			swal('Warning!', 'Invalid Credentails!', 'warning');
		}
	});
  };

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth && JSON.parse(auth).department === 'user') {
      history('https://scms-web.netlify.app/');
	    	console.log('login successfully');
    } else if (auth && JSON.parse(auth).department === 'admin') {
      history('/staff/admin');
    } else if (
      auth &&
      JSON.parse(auth).department !== 'user' &&
      JSON.parse(auth).department !== 'admin'
    ) {
      history('/staff/department');
    }
  });

  return (
    <>
      {/* <!-- Section: Design Block --> */}
      {/* <section className="text-center mt-5">
                <div className="card mx-4 mx-md-5 shadow-5-strong login-style">
                    <div className="card-body py-5 px-md-5" style={{ background: 'aliceblue' }}>

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-4 mt-5">User Login</h2>
                                <form>

                                    <div className="form-outline mb-5 label-style">
                                        <input type="email" onChange={(e) => { setEmail(e.target.value); }} name="uemail" id="form3Example3" className="form-control" />
                                    </div>

                                    <div className="form-outline mb-5 label-style">
                                        <input type="password" onChange={(e) => { setPassword(e.target.value); }} name="upassword" id="form3Example4" className="form-control" />
                                    </div>


                                    <button type="submit" onClick={LoginNow} className="btn btn-primary btn-block mb-4 btn-style">
                                        Login Now
                                    </button>

                                    <div className="text-center mt-2">
                                        <p><b>Don't have an user account</b> - <Link to="/register"><i>Register Here</i></Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
      {/* <!-- Section: Design Block --> */}
      <section id='contact'>
        <div class='container-lg'>
          <div class='text-center'>
            <h2 class='display-3'>Sign In</h2>
            <p class='lead'>
              complaints to lodge? Sigin with your credentails...
            </p>
          </div>
          <div class='row justify-content-center my-5'>
            <div class='col-lg-6'>
              <form>
                <label for='email' class='form-label'>
                  Email address:
                </label>
                <div class='input-group mb-4'>
                  <span class='input-group-text'>
                    <i class='fa-regular fa-at text-secondary'></i>
                  </span>
                  <input
                    type='text'
                    id='email'
                    class='form-control'
                    placeholder='e.g. ayodejioladoyin@example.com'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <label for='email' class='form-label'>
                  Password:
                </label>
                <div class='input-group mb-4'>
                  <span class='input-group-text'>
                    <i class='fa-solid fa-key text-secondary'></i>
                  </span>
                  <input
                    type='password'
                    id='password'
                    class='form-control'
                    placeholder='Password Here'
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div class='mb-4 text-center'>
                  <button
                    type='submit'
                    onClick={LoginNow}
                    class='btn btn-md btn-secondary'
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
