import React, { useEffect, useState } from 'react';
import ProfImg from './images/profile-img.png';
import { Link, useParams } from 'react-router-dom';

const Profile = () => {
  const [getuser, setuser] = useState([]);

  const { id } = useParams('');

  const userData = async () => {
    const res = await fetch(
		`https://scms-backend-35da66f730af.herokuapp.com/singleuser/${id}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log('Error ');
    } else {
      setuser(data[0]);
      console.log('Data Fetched');
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className='text-center text-secondary mt-5'>
        <div className='card mx-4 mx-md-5 shadow-5-strong login-style'>
          <div className='card-body py-5 px-md-5 rounded-3 bi-light border-0 shadow'>
            <div className='row d-flex justify-content-center'>
              <div className='col-lg-12'>
                <h2 className='fw-bold mb-5 mt-5'>My Profile</h2>

                <div className='row mb-5'>
                  <div className='imgbox col-lg-6 col-md-6 col-12'>
                    <img src={ProfImg} style={{ width: 100 }} alt='prof' />
                  </div>
                  <div className='btnbox col-lg-6 col-md-6 col-12'>
                    <Link to={`/update/${getuser.id}`}>
                      <button className='btn btn-sm btn-secondary mt-3'>
                        <i
                          className='fa-sharp fa-solid fa-pen'
                          style={{ fontSize: '25px' }}
                        ></i>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='row'>
                  <div className='p-style col-lg-4 col-md-4 col-12'>
                    <p>
                      First Name:{' '}
                      <span className='text-success fw-bold lead'>
                        {getuser.fname}
                      </span>{' '}
                    </p>
                    <p>
                      Number:{' '}
                      <span className='text-success fw-bold lead'>
                        {getuser.uphone}
                      </span>{' '}
                    </p>
                  </div>
                  <div className='p-style lead  col-lg-4 col-md-4 col-12'>
                    <p>
                      Last Name:{' '}
                      <span className='text-success fw-bold lead'>
                        {getuser.lname}
                      </span>{' '}
                    </p>
                    <p>
                      Email:{' '}
                      <span className='text-success fw-bold lead'>
                        {getuser.uemail}
                      </span>{' '}
                    </p>
                  </div>
                  <div className='p-style col-lg-4 col-md-4 col-12'>
                    <p>
                      Status:{' '}
                      <span className='text-success fw-bold lead'>
                        {getuser.ustatus}
                      </span>{' '}
                    </p>
                    <p>
                      Password:{' '}
                      <span className='text-success fw-bold lead'>
                        {getuser.upassword}
                      </span>{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
};

export default Profile;
