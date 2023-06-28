import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
const moment = require('moment');

const Complains2 = () => {
  const auth = localStorage.getItem('user');
  const Department = JSON.parse(auth).department;

  const [getcompdata, setCompData] = useState([]);

  const getData = async () => {
    const res = await axios.get('/getcomplains', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.data.status === 201) {
      console.log('Data Got');
      setCompData(res.data.data);
    } else {
      console.log('Data Failed');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <p className='p2-style display-2 container'>All Complaints</p>
      <div className='container table-responsive'>
        <table className='table table-striped table-hover table-bordered border-secondary'>
          <thead className='bg-secondary text-white'>
            <tr>
              <th scope='col'>ComplainID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Number</th>
              <th scope='col'>Email</th>
              <th scope='col'>Department</th>
              <th scope='col'>Address</th>
              <th scope='col'>Message</th>
              <th scope='col'>Date</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>

          <tbody className='bg-light'>
            {getcompdata
              .filter((getcompdata) =>
                getcompdata.department.includes(Department)
              )
              .map((el, id) => {
                return (
                  <>
                    <tr key={el.id}>
                      <td>{el.compid}</td>
                      <td>{el.username}</td>
                      <td>{el.userphone}</td>
                      <td>{el.useremail}</td>
                      <td>{el.department}</td>
                      <td>{el.address}</td>
                      <td>{el.message}</td>
                      <td>{moment(el.date).format('DD-MM-YYYY')}</td>
                      <td className='link-style'>
                        <Link to={`../staff/attach/${el.id}`}>
                          {' '}
                          <button className='btn btn-success'>
                            <RemoveRedEyeIcon />
                          </button>
                        </Link>
                        <Link to={`../staff/response/${el.id}`}>
                          {' '}
                          <button className='btn btn-warning'>
                            <CreateIcon />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Complains2;
