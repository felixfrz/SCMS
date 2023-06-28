import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Department = () => {


    const history = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth && JSON.parse(auth).department === 'user') {
      history('/');
    }
    else if ((auth && JSON.parse(auth).department === 'admin')) {
      history('/staff/admin');
    }
  })


  return (
    <>
      {/* <!-- ======= Featured Services Section ======= --> */}
      <section id="featured-services" className="featured-services admin-style">
        <div className="container m-auto" data-aos="fade-up">

          
          <div className="row mt-5 py-5 text-center">

            <div className="col-md-4 col-lg-4 align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box m-auto" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><i className="fa-sharp fa-solid fa-question"></i></div>
                <h4 className="title"><Link to="/staff/query">All Queries</Link></h4>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box m-auto" data-aos="fade-up" data-aos-delay="400">
                <div className="icon"><i className="fa-solid fa-pen-to-square"></i></div>
                <h4 className="title"><Link to="/staff/complains2">All Complaints</Link></h4>
              </div>
            </div>

            <div className="col-md-4 col-lg-4 align-items-stretch mb-5 mb-lg-0">
              <div className="icon-box m-auto" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="fa-solid fa-user-group"></i></div>
                <h4 className="title"><Link to="/staff/member">All Subscribers</Link></h4>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* <!-- End Featured Services Section --> */}
    </>
  )
}

export default Department
