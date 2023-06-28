import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert';
import axios from 'axios';



const Departs = () => {


    const history = useNavigate();

    const [file, setFile] = useState("");


    const [inpval, setINP] = useState({

        title: "",
        detail: ""
    })

    const setdata = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const setImgfile = (e) => {
        setFile(e.target.files[0])
    }

    const Addinputdata = async (e) => {
        e.preventDefault();

        const { title, detail } = inpval;

        var formData = new FormData();

        formData.append("compfile1", file)
        formData.append("title", title)
        formData.append("detail", detail)

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        const res = await axios.post("/adddepartment", formData, config);

        if (res.status === 422) {
            console.log("error ");
            swal("Warning!", "Addition Failed!", "warning");

        } else {
            swal("Great!", "Department Added Successfully!", "success");
            history("/staff/departs")
            window.location.reload(false);
        }
    }



    const [data, setData] = useState([]);

    const getDepartment = async () => {

        const res = await axios.get("/getdepartment", {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.data.status === 201) {
            console.log("Data Fetched");
            setData(res.data.data)
        }
        else {
            console.log("Fetching Failed")
        }
    }


    useEffect(() => {
        getDepartment();
    }, [])


    const deleteDept = async (id) => {

        const res = await axios.delete(`/deletedept/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (res.status === 201) {
            getDepartment();
            swal("", "Department deleted successfully!", "success");

        } else {
            console.log("error");
            swal("", "Deletion Failed!", "warning");
        }

    }


    return (
      <>
        <p className=' container display-2 text-center'>All Departments</p>
        <div className='container mt-2 mb-3 body-style rounded shadow bg-muted'>
          <div className='row'>
            <div className='col-lg-6'>
              <form className='php-email-form py-3'>
                <p className='display-4'>Add New Department</p>

                <div className='row mb-5 mt-5 m-auto'>
                  <div className='col-md-10 form-group'>
                    <input
                      type='file'
                      onChange={setImgfile}
                      name='compfile1'
                      className='form-control'
                      placeholder='First Name'
                    />
                  </div>
                </div>

                <div className='row mb-5 m-auto'>
                  <div className='col-md-10 form-group'>
                    <input
                      type='text'
                      onChange={setdata}
                      name='title'
                      className='form-control'
                      placeholder='Enter Title'
                    />
                  </div>
                </div>

                <div className='row mb-5 m-auto'>
                  <div className='col-md-10 form-group'>
                    <input
                      type='text'
                      onChange={setdata}
                      name='detail'
                      className='form-control'
                      placeholder='Enter Details'
                    />
                  </div>
                </div>

                <div className='text-center-sm '>
                  <button
                    className='btn btn-secondary btn-lg'
                    type='submit'
                    onClick={Addinputdata}
                  >
                    Add New
                  </button>
                </div>
              </form>
            </div>

            <div className='col-lg-6 container table-responsive'>
              <table className='table table-striped table-hover table-bordered border-secondary'>
                <thead className='bg-dark text-white'>
                  <tr>
                    <th scope='col'>S.N.</th>
                    <th scope='col'>Image</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Detail</th>
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
                              <td>
                                <img
                                  src={`/uploads/${el.image}`}
                                  alt='data'
                                  className='hover-style'
                                />
                              </td>
                              <td>{el.title}</td>
                              <td>{el.detail}</td>
                              <td>
                                <button
                                  className='btn btn-danger'
                                  onClick={() => {
                                    if (
                                      window.confirm(
                                        'Are you sure you wish to delete this item?'
                                      )
                                    )
                                      deleteDept(el.id);
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
          </div>
        </div>
      </>
    );
}

export default Departs
