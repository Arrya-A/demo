import React from 'react'

const Company = () => {
    const allEmployees = [
        { id: 1, empName: "Max", desg: "Dev", salary: 35000 },
        { id: 2, empName: "Neel", desg: "Tester", salary: 20000 },
        { id: 3, empName: "Alex", desg: "Hr", salary: 40000 },
        { id: 4, empName: "Albert", desg: "DevOps", salary: 25000 }
    ]
    return (
        <>
            <h3 className='text-center'>All Employee List</h3>
            <div className='container'>
                <table className="table shadow">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Employee Designation</th>
                            <th>Employee Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allEmployees.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.empName}</td>
                                    <td>{item.desg}</td>
                                    <td>{item.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Company