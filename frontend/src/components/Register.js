import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Register = () => {
  const history = useNavigate();

  const [inputval, setINP] = useState({
    fname: '',
    lname: '',
    uphone: '',
    uemail: '',
    upassword: '',
    cpassword: '',
    department: 'user',
  });

  const Setdata = (e) => {
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const Addinputdata = async (e) => {
    e.preventDefault();

    const { fname, lname, uphone, uemail, upassword, cpassword, department } =
      inputval;

    if (fname === '') {
      swal('Warning!', 'Please enter first name!', 'warning');
    } else if (uemail === '') {
      swal('Warning!', 'Please enter an email!', 'warning');
    } else if (upassword === '') {
      swal('Warning!', 'Please enter a password!', 'warning');
    } else if (!uemail.includes('@')) {
      swal('Warning!', 'Please enter valid email!', 'warning');
    } else if (upassword !== cpassword) {
      swal('Warning!', 'Please enter same passwords', 'warning');
    } else {
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname,
          lname,
          uphone,
          uemail,
          upassword,
          cpassword,
          department,
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        swal('Warning!', 'Email is already exist!', 'warning');
      } else {
        swal('Great!', 'Registration Success!', 'success');
        history('/login');
      }
    }
  };

  return (
    <>
      {/* <!-- reg --> */}
      <section id='contact' className='contact section-bg'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='display-3'>Register</h2>
            <p>
              Magnam dolores commodi suscipit eius consequatur ex aliquid fuga
            </p>
          </div>

          <div className='row mt-2 justify-content-center'>
            <div className='col-lg-10'>
              <form className='php-email-form'>
                <div className='row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      onChange={Setdata}
                      name='fname'
                      className='form-control'
                      id='name'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='col-md-6 form-group mt-3 mt-md-0'>
                    <input
                      type='text'
                      onChange={Setdata}
                      className='form-control'
                      name='lname'
                      id='email'
                      placeholder='Last Name'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='text'
                      onChange={Setdata}
                      name='uphone'
                      className='form-control'
                      id='name'
                      placeholder='Your Number'
                    />
                  </div>
                  <div className='col-md-6 form-group mt-3 mt-md-0'>
                    <input
                      type='email'
                      onChange={Setdata}
                      name='uemail'
                      className='form-control'
                      id='email'
                      placeholder='Your Email'
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 form-group'>
                    <input
                      type='password'
                      onChange={Setdata}
                      name='upassword'
                      className='form-control'
                      id='name'
                      placeholder='New Password'
                    />
                  </div>
                  <div className='col-md-6 form-group mt-3 mt-md-0'>
                    <input
                      type='password'
                      onChange={Setdata}
                      name='cpassword'
                      className='form-control'
                      id='email'
                      placeholder='Confirm Password'
                    />
                  </div>
                </div>
                <div className='text-center'>
                  <button
                    className='btn btn-md btn-secondary'
                    type='submit'
                    onClick={Addinputdata}
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- reg --> */}
    </>
  );
};

export default Register;
