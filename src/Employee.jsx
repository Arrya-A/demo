import React from 'react'
import myStyles from './styles.module.css'

const Employee = ({ dataFromParent, empStatus, empCheck }) => {
    console.log(dataFromParent, empStatus);
    // alert "inside Employee Component"
    const displayData = () => {
        alert("This is Handling function without arguments")
    }

    const alertData = (data) => {
        alert(data)
    }

    const getName = (event) => {
        console.log(event.target.value);

    }
    return (
        <>
            <h1 className={myStyles.group1}>Employee Details!!!</h1>
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
            {/* button to display data */}
            <div className={`${myStyles.group2} container`}>
                <button onClick={displayData} className='btn btn-success mb-5'>Show Data</button>
                <input onChange={(e) => { getName(e) }} className='form-control w-75' type="text" placeholder='Enter username' />
                <button onClick={() => alertData("This is Handling function with arguments")} className='btn btn-primary mt-5'>Alert Data</button>

            </div>
        </>
    )
}

export default Employee