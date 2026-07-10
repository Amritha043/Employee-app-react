import React, { useState } from 'react'

const ViewEmploye = () => {
  const [data,changeData]=useState(
    [
     
      {"name":"Aarav Sharma","code":"EMP101","phone":9876543210,"desg":"Software Engineer"},
      {"name":"Ananya Nair","code":"EMP102","phone":9123456789,"desg":"HR Executive"},
      {"name":"Rahul Kumar","code":"EMP103","phone":9988776655,"desg":"Project Manager"},
      {"name":"Sneha Joseph","code":"EMP104","phone":9876501234,"desg":"UI/UX Designer"},
      {"name":"Aditya Singh","code":"EMP105","phone":9765432109,"desg":"System Analyst"},
      {"name":"Meera Menon","code":"EMP106","phone":9898989898,"desg":"Network Engineer"},
    ]
  )
  return (
    <div>

 <div className="container mt-4">
        <h2 className="text-center mb-4">View All Employees</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee Code</th>
              <th>Phone Number</th>
              <th>Designation</th>
            </tr>
          </thead>

          <tbody>
            {
              data.map(
                (value,index)=>{
                  return(
                    <tr>
              <td>{value.name}</td>
              <td>{value.code}</td>
              <td>{value.phone}</td>
              <td>{value.desg}</td>
            </tr>
                  )
                }
              )
            }
            

           
            
          </tbody>
        </table>
      </div>




    </div>
  )
}

export default ViewEmploye