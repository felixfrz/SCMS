import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import axios from 'axios';
const moment = require('moment');

const Member = () => {
  const [data, setData] = useState([]);

  const getMembers = async () => {
    const res = await axios.get('https://db-k432.onrender.com/getmembers', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.data.status === 201) {
      console.log('Data Fetched');
      setData(res.data.data);
    } else {
      console.log('Fetching Failed');
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

  const deleteMember = async (id) => {
    const res = await axios.delete(`https://db-k432.onrender.com/deletemember/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 201) {
      getMembers();
      swal('', 'Member deleted successfully!', 'success');
    } else {
      console.log('error');
      swal('', 'Deletion Failed!', 'warning');
    }
  };

  return (
    <>
      <p className='p2-style display-2 container'>All Subscribers</p>
      <div className='container table-responsive'>
        <table className='table table-striped table-hover table-bordered border-secondary'>
          <caption>List of Subscribers</caption>
          <thead className='bg-dark text-white'>
            <tr>
              <th scope='col'>S.N.</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Date</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>

          <tbody className='bg-light'>
            {data.length > 0
              ? data.map((el, id) => {
                  return (
                    <>
                      <tr key={el.id}>
                        <th scope='row'>{id + 1}</th>
                        <td>{el.mname}</td>
                        <td>{el.memail}</td>
                        <td>{moment(el.date).format('DD-MM-YYYY')}</td>
                        <td>
                          <button
                            className='btn btn-danger'
                            onClick={() => {
                              if (
                                window.confirm(
                                  'Are you sure you wish to delete this item?'
                                )
                              )
                                deleteMember(el.id);
                            }}
                          >
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              : ''}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Member;
