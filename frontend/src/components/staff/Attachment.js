import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Response = () => {
  const [getcomp, setcomp] = useState([]);

  const { id } = useParams('');

  const compData = async () => {
    const res = await fetch(`/singlecomp/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log('Error ');
    } else {
      setcomp(data[0]);
      console.log('Data Fetched');
    }
  };

  useEffect(() => {
    compData();
  }, []);

  const MyAudioPlayer = ({ filePath }) => {
    return (
      <audio controls>
        <source src={filePath} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    );
  };

  const handleOpenFile = (filePath) => {
    window.open(filePath);
  };

  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className='text-center mt-5'>
        <div className='card mx-4 mx-md-5 shadow-5-strong login-style'>
          <div className='card-body py-5 px-md-5 bg-muted shadow'>
            <div className='row d-flex justify-content-center'>
              <div className='col-lg-12 mt-3 mb-5'>
                <h2 className='fw-bold mb-5 mt-5'>Response Here</h2>
                <div className='row'>
                  <div className='p-style col-lg-3 col-md-4 col-12'>
                    <p>Image:</p>
                    <Link to={`../files/myimg/${getcomp.compfile1}`}>
                      <button className='btn btn-secondary btn-lg'>
                        <b> View</b>
                        <span>
                          {' '}
                          <i class='fa-sharp fa-regular fa-images text-white'></i>
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className='p-style col-lg-3 col-md-4 col-12'>
                    <p>PDF:</p>
                    <Link to={`../files/mypdf/${getcomp.compfile2}`}>
                      <button className='btn btn-secondary btn-lg'>
                        <b>View</b>
                        <span>
                          {' '}
                          <i class='fa-solid fa-file-pdf text-white'></i>
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className='p-style col-lg-3 col-md-4 col-12'>
                    <p>Audio:</p>
                    <Link to={`../files/myaud/${getcomp.compfile3}`}>
                      <button className='btn btn-secondary btn-lg'>
                        <b>View</b>
                        <span>
                          {' '}
                          <i class='fa-solid fa-file-audio text-white'></i>
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className='p-style col-lg-3 col-md-4 col-12'>
                    <p>Video:</p>
                    <Link to={`../files/myvid/${getcomp.compfile4}`}>
                      <button className='btn btn-secondary btn-lg'>
                        <b>View</b>
                        <span>
                          {' '}
                          <i class='fa-solid fa-video text-white'></i>
                        </span>
                      </button>
                    </Link>
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

export default Response;
