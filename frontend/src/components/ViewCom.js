import React, { useState, useEffect } from 'react';
import axios from 'axios';
const moment = require("moment");


const ViewComp = () => {


  const auth = localStorage.getItem('user');
  const userId = JSON.parse(auth).id;


  const [getcompdata, setCompData] = useState([]);


  const getData = async () => {

    const res = await axios.get(
		'https://db-k432.onrender.com/getcomplains',
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

    if (res.data.status === 201) {
      console.log("Data Got");
      setCompData(res.data.data)
    }
    else {
      console.log("Data Failed")
    }
  }


  useEffect(() => {
    getData();
  }, []);


  return (
    <>

      <p className='p2-style display-2 container'>Complaints</p>
      <div className='container table-responsive'>

        <table className="table table-striped table-hover table-bordered border-secondary">
          <thead className='bg-dark text-white'>
            <tr>
              <th scope="col">ComplainID</th>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">Address</th>
              <th scope="col">Message</th>
              <th scope="col">Response</th>
              <th scope="col">Date</th>
            </tr>
          </thead>

          <tbody className='bg-light'>

            {
              getcompdata.length > 0 ? getcompdata.filter((getuserdata) => getuserdata.userid.includes(userId)).map((el, id) => {

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
                      <td>{el.response}</td>
                      <td>{moment(el.date).format("DD-MM-YYYY")}</td>
                    </tr>

                  </>
                )
              }) : "Sorry, No Records Found!"
            }

          </tbody>
        </table>

      </div>

    </>
  )
}

export default ViewComp
