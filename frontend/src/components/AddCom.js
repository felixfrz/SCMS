import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


const AddCom = () => {


    const history = useNavigate();

    const { department } = useParams("");

    const [compId] = useState(
        Math.floor(Math.random() * 900) + 100
    );


    const auth = localStorage.getItem('user');
    const userId = JSON.parse(auth).id;
    const userName = JSON.parse(auth).fname + ' ' + JSON.parse(auth).lname;
    const userPhone = JSON.parse(auth).uphone;
    const userEmail = JSON.parse(auth).uemail;


    const [getComp, setComp] = useState({

        username: { userName },
        userphone: { userPhone },
        useremail: { userEmail },
        department: { department },
        address: "",
        message: "",
        userid: { userId },
        compid: { compId }
    })

    const Setinput = (e) => {
        const { name, value } = e.target;
        setComp((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const [files, setFiles] = useState({
        compfile1: null,
        compfile2: null,
        compfile3: null,
        compfile4: null
    });

    const setCompFIle = (e) => {
        setFiles({
            ...files,
            [e.target.name]: e.target.files[0],
        });
    };


    const AddComplaint = async (e) => {
        e.preventDefault();

        const { address, message } = getComp;

        var formData = new FormData();

        Object.keys(files).forEach((key) => {
            formData.append(key, files[key]);
        });

        formData.append("username", userName)
        formData.append("userphone", userPhone)
        formData.append("useremail", userEmail)
        formData.append("department", department)
        formData.append("address", address)
        formData.append("message", message)
        formData.append("userid", userId)
        formData.append("compid", compId)

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        if (address === "") {
            swal("Warning!", "Please enter an Address!", "warning");
        } else if (message === "") {
            swal("Warning!", "Please enter a message", "warning");
        } else {

            try {
                const res = await axios.post("/addcomplaint", formData, config);

                if (res.status === 201) {
                    swal("Thankyou!", "Complaint Sent to Selected Department!", "success");
                    history(`/`)
                } else {
                    swal("Error!", "Please attach correct file for each form feild", "warning");
                }

            } catch (error) {
                if (error.isAxiosError) {
                    swal("Error!", "Please attach correct file for each form feild", "warning");
                } else {
                    throw error;
                }
            }


        }

    }



    return (
        <>

            {/* <!-- ======= Register Section ======= --> */}
            <section id="contact" className="contact section-bg2">
                <div className="container">

                    <div className="section-title">
                        <h2>File Complaint</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <form className="php-email-form label-style2">

                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="username" className="form-label">Full Name</label>
                                        <input type="text" value={userName} name="userphone" className="form-control" readOnly />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="username" className="form-label">Phone Number</label>
                                        <input type="text" value={userPhone} name="userphone" className="form-control" readOnly />
                                    </div>
                                </div> 

                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="useremail" className="form-label">Email Address</label>
                                        <input type="email" value={userEmail} name="useremail" className="form-control" readOnly />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <label htmlFor="department" className="form-label">Selected Department</label>
                                        <input type="text" value={department} name="department" className="form-control" readOnly />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3 form-group">
                                        <label htmlFor="compfile1" className="form-label">Image:</label>
                                        <input type="file" onChange={setCompFIle} name="compfile1" className="form-control" />
                                    </div>
                                    <div className="col-md-3 form-group">
                                        <label htmlFor="compfile2" className="form-label">PDF:</label>
                                        <input type="file" onChange={setCompFIle} name="compfile2" className="form-control" />
                                    </div>
                                    <div className="col-md-3 form-group">
                                        <label htmlFor="compfile3" className="form-label">Audio:</label>
                                        <input type="file" onChange={setCompFIle} name="compfile3" className="form-control" />
                                    </div>
                                    <div className="col-md-3 form-group">
                                        <label htmlFor="compfile4" className="form-label">Video:</label>
                                        <input type="file" onChange={setCompFIle} name="compfile4" className="form-control" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <input type="text" onChange={Setinput} name="address" className="form-control" placeholder='Enter Address' />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-12 form-group mt-3 mt-md-0">
                                        <input type="text" onChange={Setinput} name="message" className="form-control" placeholder='Enter Message' />
                                    </div>
                                </div>

                                <div className="text-center"><button type="submit" onClick={AddComplaint} >Submit Now</button></div>

                            </form>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End RegisterSection --> */}

        </>
    )
}

export default AddCom
