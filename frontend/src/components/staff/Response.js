import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
const moment = require("moment");


const Response = () => {


    const [getcomp, setcomp] = useState([]);

    const history = useNavigate();
    const { id } = useParams("");

    const compData = async () => {

        const res = await fetch(`/singlecomp/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("Error ");

        } else {
            setcomp(data[0])
            console.log("Data Fetched");
        }
    }


    useEffect(() => {
        compData();
    }, []);


    const [resp, setResp] = useState({

        respmsg: "",
    })

    const SetRespData = (e) => {
        const { name, value } = e.target;
        setResp((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const GiveResp = async (e) => {
        e.preventDefault();

        const { respmsg } = resp;

        const res2 = await fetch(`/response/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                respmsg
            })

        });

        const data2 = await res2.json();

        if (res2.status === 422 || !data2) {
            swal("Warning!", "Response Failed!", "warning");

        } else {
            swal("Great!", "Response Success!", "success");
            history(`/staff/response/${id}`)
            window.location.reload(false);
        }

}



return (
    <>

        {/* <!-- Section: Design Block --> */}
        <section className="text-center mt-5">
            <div className="card mx-4 mx-md-5 shadow-5-strong login-style">
                <div className="card-body py-5 px-md-5" style={{ background: 'aliceblue' }}>

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-12">
                            <h2 className="fw-bold mb-5 mt-5">Response Here</h2>
                            <div className='row'>
                                <div className='p-style col-lg-4 col-md-4 col-12'>
                                    <p>ComplainID: <span>{getcomp.compid}</span></p>
                                    <p>Userame: <span>{getcomp.username}</span></p>
                                    <p>Department: <span>{getcomp.department}</span></p>
                                    <p>Date: <span>{moment(getcomp.date).format("DD-MM-YYYY")}</span> </p>
                                </div>
                                <div className='p-style col-lg-8 col-md-8 col-12'>
                                    <form className="php-email-form form">

                                        <input type="text" onChange={SetRespData} name="respmsg" className="form-control" id="name" placeholder="Write Response" />

                                        <div className="text-center"><button type="submit" className='btn btn-secondary my-2' onClick={GiveResp}>Submit</button></div>

                                    </form>
                                    <p className='mt-5 float-style'>Last Response: <span>{getcomp.response}</span></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Section: Design Block --> */}

    </>
)
}

export default Response
