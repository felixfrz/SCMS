import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import CancelIcon from '@mui/icons-material/Cancel';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
import swal from 'sweetalert';
import Delete from '@mui/icons-material/Delete';
import axios from "axios";
import {ToggleOff, ToggleOn} from "@mui/icons-material";

const Users = () => {
  const history = useNavigate();

  const [getuserdata, setUserdata] = useState([]);

  const getData = async () => {
    const res = await fetch('https://db-k432.onrender.com/getuserdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log('error ');
    } else {
      setUserdata(data);
      console.log('Data Fetched', data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const Active = async (id) => {
    const status = 'active';

    const res = await fetch(`https://db-k432.onrender.com/changestatus/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status,
      }),
    });

    if (res.status === 201) {
      swal('Great', 'Status Updated!', 'success');
      history('/staff/users');
      window.location.reload(false);
    } else {
      swal('Sorry', 'Updation Failed!', 'warning');
    }
  };
  const deleteUser = async (id) => {

    const res = await axios.delete(`https://db-k432.onrender.com/deleteuser/${id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (res.status === 201) {
      getData();
      swal("", "User deleted successfully!", "success");

    } else {
      console.log("error");
      swal("", "Deletion Failed!", "warning");
    }

  }
  const Inactive = async (id) => {
    const status = 'inactive';

    const res = await fetch(`https://db-k432.onrender.com/changestatus/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status,
      }),
    });

    if (res.status === 201) {
      swal('Great', 'Status Updated!', 'success');
      history('/staff/users');
      window.location.reload(false);
    } else {
      swal('Sorry', 'Updation Failed!', 'warning');
    }
  };

  return (
    <>
      <p className='p2-style display-2 container'>All Users</p>
      <div className='container table-responsive'>
        <table className='table table-striped table-hover table-bordered border-secondary'>
          <caption>List of users</caption>
          <thead className='bg-dark text-white'>
            <tr>
              <th scope='col'>S.N.</th>
              <th scope='col'>Name</th>
              <th scope='col'>Surname</th>
              <th scope='col'>Number</th>
              <th scope='col'>Email</th>
              <th scope='col'>Status</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>

          <tbody className='bg-light'>
            {getuserdata
              .filter((getuserdata) => getuserdata.department.includes('user'))
              .map((element, id) => {
                return (
                  <>
                    <tr key={element.id}>
                      <th scope='row'>{id + 1}</th>
                      <td>{element.fname}</td>
                      <td>{element.lname}</td>
                      <td>{element.uphone}</td>
                      <td>{element.uemail}</td>
                      <td>{element.ustatus}</td>
                      <td>
                        <button
                          className='btn btn-sm btn-success'
                          onClick={() => Active(element.id)}
                        >
                          {/*<CheckBoxIcon />*/}
                          <ToggleOn/>
                        </button>
                        <button
                          className='btn btn-sm btn-danger'
                          onClick={() => Inactive(element.id)}
                        >
                          {/* <CancelIcon /> */}
                          {/*<Delete />*/}
                          <ToggleOff/>
                        </button>
                        <button
                            className='btn btn-sm btn-danger'
                            onClick={() => deleteUser(element.id)}
                        >
                          {/* <CancelIcon /> */}
                          <Delete />
                        </button>
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

export default Users;
