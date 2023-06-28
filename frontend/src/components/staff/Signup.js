import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

const Signup = () => {
  const history = useNavigate();

  const [inputval, setINP] = useState({
    fname: '',
    lname: '',
    uphone: '',
    uemail: '',
    upassword: '',
    cpassword: 'NA',
    department: '',
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

  const [data, setData] = useState([]);

  const getDepartment = async () => {
    const res = await axios.get('/getdepartment', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.data.status === 201) {
      setData(res.data.data);
    } else {
      console.log('Fetching Failed');
    }
  };

  useEffect(() => {
    getDepartment();
  }, []);

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
        swal('Great!', 'Staff Added Successfully!', 'success');
        history('/staff/staffs');
      }
    }
  };

  return (
    <>
      {/* <!-- ======= Register Section ======= --> */}
      <section id='contact' className='contact section-bg'>
        <div className='container'>
          <div className='section-title'>
            <h2>Add Staff</h2>
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
                      placeholder='Contact Number'
                    />
                  </div>
                  <div className='col-md-6 form-group mt-3 mt-md-0'>
                    <input
                      type='email'
                      onChange={Setdata}
                      name='uemail'
                      className='form-control'
                      id='email'
                      placeholder='Email Address'
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
                    <select
                      onChange={Setdata}
                      name='department'
                      className='form-control'
                    >
                      <option>--choose department--</option>

                      {data.length > 0
                        ? data.map((el, id) => {
                            return (
                              <>
                                <option>{el.title}</option>
                              </>
                            );
                          })
                        : ''}
                    </select>
                  </div>
                </div>

                <div className='text-center'>
                  <button type='submit' onClick={Addinputdata}>
                    Add Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End RegisterSection --> */}
    </>
  );
};

export default Signup;
