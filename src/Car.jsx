import React, { Component } from 'react'

export default class Car extends Component {
    //properties
    
    //constructor
    constructor(){
        super()
        this.state={
            carName:"POLO GT"
        }
    }

    //methods
    getCarName(car){
        this.setState({carName:car})
    }
    render() {
        return (
            <div className='m-5 border p-5'>
                <h1 className='text-center text-primary'>Inside Car Component</h1>
                <input onChange={e=>this.getCarName(e.target.value)}  type="text" className='form-control w-75 m-5' placeholder='Enter a carname' />
                <div className="bg-warning p-5 text-light fs-2 fw-bolder">Car is : <span className='text-danger'> {this.state.carName} </span> </div>
            </div>
        )
    }
}
