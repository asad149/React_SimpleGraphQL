import React from "react";


import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
        id,
      name,
      email,
      age
    }
  }
`;

const Students = () => {

    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
          const {students} = data;
        
          console.log(students)
  return <div>

    <h2>Students Lists</h2>
          
            <table width="500" cellPadding="20" border="1" style={{margin:"0 auto",border:"2px solid black"}}>
                <thead >
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
          {students.map(std=>{
             
              return(
                  <tr key={std.id}>
                      <td>
                      {std.name}
                      </td>
              <td>{std.email}</td>
              <td>{std.age}</td>
                  </tr>
           
              )
          })}
          </tbody>

</table>



  </div>;
};

export default Students;
