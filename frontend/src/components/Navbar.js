import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const auth = localStorage.getItem('user');

  const history = useNavigate();

  const Logout = () => {
    localStorage.clear();
    history('/login');
    window.location.reload(false);
  };

  return (
    <>
      {/* <!-- ======= Header ======= --> */}

      {/* navbar */}
      <nav className='navbar navbar-expand-md navbar-light bg-light'>
        <div className='container-xxl'>
          <Link to='/' className='navbar-brand'>
            <span className='fw-bolder text-secondary'>SCMS - the Web App</span>
          </Link>
          {/* toggle button for mobile nav */}
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          {/* navbar links */}
          <div
            className='collapse navbar-collapse justify-content-end align-center'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active'>
                  Home
                </Link>
              </li>

              {auth && JSON.parse(auth).department === 'user' ? (
                <li className='nav-item'>
                  <Link to='/addcom/Admin' className='nav-link active'>
                    File-Complaint
                  </Link>
                </li>
              ) : (
                <li className='nav-item'>
                  <Link to='/about' className='nav-link active'>
                    About
                  </Link>
                </li>
              )}

              {auth && JSON.parse(auth).department === 'user' ? (
                <li className='nav-item'>
                  <Link to='/viewcom' className='nav-link active'>
                    View-Complaint
                  </Link>
                </li>
              ) : (
                <li className='nav-item'>
                  <Link to='/contact' className='nav-link active'>
                    Contact
                  </Link>
                </li>
              )}

              {auth ? (
                <li className='nav-item'>
                  <Link
                    to={`/profile/${JSON.parse(auth).id}`}
                    className='nav-link active'
                  >
                    Profile
                  </Link>
                </li>
              ) : (
                <li className='nav-item'>
                  <Link to='/register' className='nav-link active'>
                    Register
                  </Link>
                </li>
              )}

              {auth ? (
                <li className='nav-item'>
                  <Link
                    to='/login'
                    onClick={Logout}
                    className='nav-link active'
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li className='nav-item'>
                  <Link to='/login' className='nav-link active'>
                    Login
                  </Link>
                </li>
              )}

              <li className='nav-item'>
                <Link to='/chatbot' className='nav-link active'>
                  ChatBot
                </Link>
              </li>
              <div className='d-flex wlcm-style nav-item ms-3'>
                {auth ? (
                  <div className=''>
                    <Link to='/staff/admin'>
                      <p className='text-primary fw-bold lead'>
                        <i class='fa-regular fa-user'></i>{' '}
                        👋🇼‌🇪‌🇱‌🇨‌🇴‌🇲‌🇪‌: {JSON.parse(auth).fname}
                      </p>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- End Header --> */}
    </>
  );
};

export default Navbar;
