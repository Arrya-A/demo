import React from 'react'

const Employee = ({ dataFromParent, empStatus, empCheck }) => {
    console.log(dataFromParent, empStatus);

    return (
        <>
            <h1 className='fw-bolder text-success'>Employee Details!!!</h1>
            {
                empCheck != "" ?
                    <>
                        <p className='fw-bolder'>Data from Parent : {dataFromParent}</p>
                        <p>Employee Status: {empStatus ? "active" : "inactive"} </p>
                        <p>{empCheck}</p>
                    </>
                    :
                    <p>Nothing to display</p>
            }
        </>
    )
}

export default Employee