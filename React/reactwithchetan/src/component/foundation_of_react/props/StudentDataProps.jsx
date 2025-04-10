import React from 'react'

function StudentDataProps({name, age, phone, email}) {

  return (
    <>
        <table border={1}>
            <tr>
                <th>Student Name</th>
                <td>{name}</td>
            </tr>
            <tr>
                <th>Student Age</th>
                <td>{age}</td>
            </tr>
            <tr>
                <th>Student Phone</th>
                <td>{phone}</td>
            </tr>
            <tr>
                <th>Student Email</th>
                <td>{email}</td>
            </tr>
        </table>
    
    </>
  )
}

export default StudentDataProps