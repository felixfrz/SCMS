import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import swal from 'sweetalert';


const Staffs = () => {

  const history = useNavigate();

  const [getuserdata, setUserdata] = useState([]);


  const getData = async () => {

    const res = await fetch("https://db-k432.onrender.com//getuserdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");

    } else {
      setUserdata(data)
      console.log("Data Fetched");

    }
  }

  useEffect(() => {
    getData();
  }, []);


  const Active = async (id) => {

    const status = "active";

    const res = await fetch(`https://db-k432.onrender.com/changestatus/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status
      })
    });

    if (res.status === 201) {
      swal("Great", "Status Updated!", "success");
      history("/staff/staffs");
      window.location.reload(false);
    } else {
      swal("Sorry", "Updation Failed!", "warning");
    }
  }


  const Inactive = async (id) => {

    const status = "inactive";

    const res = await fetch(`https://db-k432.onrender.com/changestatus/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status
      })
    });

    if (res.status === 201) {
      swal("Great", "Status Updated!", "success");
      history("/staff/staffs");
      window.location.reload(false);
    } else {
      swal("Sorry", "Updation Failed!", "warning");
    }

  }


  return (
    <>
      <div className='container d-flex'>
        <p className='p2-style display-2 container'>All Staff</p>
        <button className='btn btn-secondary text-white btn-sm plus-style'>
          <Link to='/staff/signup'>
            <PersonAddIcon />
          </Link>
        </button>
      </div>

      <div className='container table-responsive'>
        <table className='table table-striped table-hover table-bordered border-secondary'>
          <thead className='bg-dark text-white'>
            <tr>
              <th scope='col'>S.N.</th>
              <th scope='col'>Name</th>
              <th scope='col'>Sername</th>
              <th scope='col'>Number</th>
              <th scope='col'>Email</th>
              <th scope='col'>Department</th>
              <th scope='col'>Status</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>

          <tbody className='bg-light'>
            {getuserdata
              .filter(
                (getuserdata) =>
                  !getuserdata.department.includes('user') &&
                  !getuserdata.department.includes('admin')
              )
              .map((element, id) => {
                return (
                  <>
                    <tr>
                      <th scope='row'>1</th>
                      <td>{element.fname}</td>
                      <td>{element.lname}</td>
                      <td>{element.uphone}</td>
                      <td>{element.uemail}</td>
                      <td>{element.department}</td>
                      <td>{element.ustatus}</td>
                      <td>
                        <button
                          className='btn btn-sm btn-success mx-3'
                          onClick={() => Active(element.id)}
                        >
                          <CheckBoxIcon />
                        </button>
                        <button
                          className='btn btn-sm btn-danger'
                          onClick={() => Inactive(element.id)}
                        >
                          <CancelIcon />
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
}

export default Staffs
