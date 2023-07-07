import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';


const Update = () => {


    const history = useNavigate();
    const { id } = useParams("");


    const [inputval, setINP] = useState({

        fname: "",
        lname: "",
        uphone: "",
        uemail: "",
        upassword: "",
        cpassword: ""
    })

    const Setdata = (e) => {
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const UpdateData = async (e) => {
        e.preventDefault();

        const { fname, lname, uphone, uemail, upassword, cpassword } = inputval;

        if (!uemail.includes("@")) {
            swal("Warning!", "Please enter valid email!", "warning");
        } else if (upassword !== cpassword ) {
            swal("Warning!", "Please enter same passwords", "warning");
        } else {
            const res2 = await fetch(
				`https://scms-backend-35da66f730af.herokuapp.com/update/${id}`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						fname,
						lname,
						uphone,
						uemail,
						upassword,
						cpassword,
					}),
				}
			);

            const data2 = await res2.json();

            if (res2.status === 422 || !data2) {
                swal("Warning!", "Updation Failed!", "warning");

            } else {
                swal("Great!", "Updation Success!", "success");
                history(`/profile/${id}`)
            }

        }

    }


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
            console.log("Error ");

        } else {
            setINP(data[0])
            console.log("Data Fetched");
        }
    }
    

    useEffect(() => {
        userData();
    }, []);


    return (
        <>

            {/* <!-- ======= Register Section ======= --> */}
            <section id="contact" className="contact section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Update</h2>
                        <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fuga</p>
                    </div>

                    <div className="row mt-2 justify-content-center">
                        <div className="col-lg-10">
                            <form className="php-email-form">

                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" value={inputval.fname} onChange={Setdata} name="fname" className="form-control" id="name" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="text" value={inputval.lname} onChange={Setdata} className="form-control" name="lname" id="email" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" value={inputval.uphone} onChange={Setdata} name="uphone" className="form-control" id="name" placeholder="Your Number" />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" value={inputval.uemail} onChange={Setdata} name="uemail" className="form-control" id="email" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" value={inputval.upassword} onChange={Setdata} name="upassword" className="form-control" id="name" placeholder="New Password" />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="text" value={inputval.cpassword} onChange={Setdata} name="cpassword" className="form-control" id="email" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                
                                <div className="text-center"><button type="submit" onClick={UpdateData}>Update Now</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
            {/* <!-- End RegisterSection --> */}

        </>
    )
}

export default Update
